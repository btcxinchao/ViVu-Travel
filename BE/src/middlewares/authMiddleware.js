import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Session from "../models/Session.js";
// authorization - xac minh user la ai
export const protectedRoute = (req, res, next) => {
  try {
    //Lay access token tu header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({ message: "khong tim thay token" });
    }

    // xac nhan token hop le
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedUser) => {
        if (err) {
          console.error(err);
          return res
            .status(403)
            .json({ message: "Access token het han hoac ko dung" });
        }
        const user = await User.findById(decodedUser.userId).select(
          "-hashedPassword",
        );
        if (!user) {
          return res.status(404).json({ message: "nguoi dung ko ton tai" });
        }
        // tra user ve trong req
        req.user = user;
        next();
      },
    );
  } catch (error) {
    console.error("loi khi xac minh JWT trong authMiddleware", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};
