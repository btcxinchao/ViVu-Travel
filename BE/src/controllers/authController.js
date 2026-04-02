import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Session from "../models/Session.js";

const ACCESS_TOKEN_TTL = "30m"; // thuong duoi 15m khi deploy
const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60 * 1000; // 14 ngay

export const signUp = async (req, res) => {
  try {
    const { username, email, phone, password, confirmpassword } = req.body;
    if (!username || !email || !phone || !password || !confirmpassword) {
      return res.status(400).json({
        message:
          "Khong the thieu username, email, phone, password, confirmpassword ",
      });
    }
    //kierm tra email ton tai chua
    const duplicate = await User.findOne({ email });
    if (duplicate) {
      return res.status(409).json({ message: "username da ton tai" });
    }
    // kiem tra confirm password dung chua
    if (password !== confirmpassword) {
      return res.status(401).json({ message: "Loi confirmpassword" });
    }
    // ma hoa password
    const hashedPassword = await bcrypt.hash(password, 10); // salt = 10 2^10
    // tao user moi
    await User.create({
      username,
      hashedPassword,
      email,
      phone,
    });
    // return
    return res.sendStatus(204);
  } catch (error) {
    console.error("Loi khi goi signUp", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};

export const signIn = async (req, res) => {
  try {
    // Lay inputs tu req.body
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "thieu email hoac password" });
    }
    //lay hashedPassword trong db de so voi password input
    // kiem tra email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "email hoac password khong chinh xac" });
    }
    // kiem tra password
    const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordCorrect) {
      return res
        .status(401)
        .json({ message: "email hoac password khong chinh xac" });
    }

    // neu khop, tao accessToken voi JWT
    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: ACCESS_TOKEN_TTL,
      },
    );
    // Tao refresh token
    const refreshToken = crypto.randomBytes(64).toString("hex");

    // Tao session moi de luu refresh token
    await Session.create({
      userId: user._id,
      refreshToken,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
    });
    // tra refresh token ve trong cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // chi gui qua http kh qua js
      secure: true, // gui qua https
      sameSite: "none", // be, fe deploy rieng
      maxAge: REFRESH_TOKEN_TTL,
    });
    // tra access token ve trong res
    return res
      .status(200)
      .json({ message: `User ${user.username} da logged in`, accessToken });
  } catch (error) {
    console.error("Loi khi goi signIn", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};

export const signOut = async (req, res) => {
  try {
    //Lay refresh token tu cookie
    const token = req.cookies?.refreshToken;

    if (token) {
      //Xoa refresh token trong Session
      await Session.deleteOne({ refreshToken: token });
      //Xoa cookie
      res.clearCookie("refreshToken");
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error("Loi khi goi signOut", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};

// tạo access token mới từ refresh token
export const refreshToken = async (req, res) => {
  try {
    // lấy refresh token từ cookie
    const token = req.cookies?.refreshToken;
    if (!token) {
      return res.status(401).json({ message: "Token không tồn tại." });
    }

    // so với refresh token trong db
    const session = await Session.findOne({ refreshToken: token });

    if (!session) {
      return res
        .status(403)
        .json({ message: "Token không hợp lệ hoặc đã hết hạn" });
    }

    // kiểm tra hết hạn chưa
    if (session.expiresAt < new Date()) {
      return res.status(403).json({ message: "Token đã hết hạn." });
    }

    // tạo access token mới
    const accessToken = jwt.sign(
      {
        userId: session.userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_TTL },
    );

    // return
    return res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Lỗi khi gọi refreshToken", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
