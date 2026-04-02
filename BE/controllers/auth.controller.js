const accounts = require("../models/account.models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt.js");

module.exports.register = async (req, res) => {
    try {
        const { fullName, email, phone, password, confirmPass,role } = req.body;

        if (!fullName || !email || !phone || !password || !confirmPass) {
            return res.status(400).json({ message: "Thiếu thông tin đăng ký" });
        }

        if (confirmPass !== password) {
            return res.status(400).json({ message: "Mật khẩu xác nhận không khớp" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Mật khẩu phải có ít nhất 6 ký tự" });
        }

        const existAccount = await accounts.findOne({
            $or: [{ email }, { phone }]
        });

        if (existAccount) {
            return res.status(400).json({ message: "Email hoặc số điện thoại đã tồn tại" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAccount = await accounts.create({
            fullName,
            email,
            phone,
            password: hashedPassword,
            role 
        });

        return res.status(201).json({
            message: "Đăng ký thành công",
            data: {
                fullName: newAccount.fullName,
                email: newAccount.email,
                phone: newAccount.phone,
                role: newAccount.role
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Thiếu email hoặc password" });
        }

        const user = await accounts.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email không tồn tại" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Sai mật khẩu" });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.refreshToken = refreshToken;
        await user.save();

        return res.status(200).json({
            message: "Đăng nhập thành công",
            data: {
                accessToken,
                refreshToken,
                user: {
                    id: user._id,
                    email: user.email,
                    fullName: user.fullName,
                    phone: user.phone,
                    role: user.role
                }
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

module.exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ message: "Thiếu refresh token" });
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await accounts.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ message: "Refresh token không hợp lệ" });
        }

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        user.refreshToken = newRefreshToken;
        await user.save();

        return res.status(200).json({
            message: "Làm mới token thành công",
            data: {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken
            }
        });
    } catch (error) {
        return res.status(403).json({ message: "Refresh token không hợp lệ", error: error.message });
    }
};

module.exports.logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (refreshToken) {
            await accounts.updateOne(
                { refreshToken },
                { $set: { refreshToken: null } }
            );
        }

        return res.status(200).json({ message: "Đăng xuất thành công" });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};


