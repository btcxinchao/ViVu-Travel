const jwt = require("jsonwebtoken");
require("dotenv").config();
const accounts = require("../models/account.models.js");

const extractBearerToken = (authHeader) => {
  if (!authHeader) {
    return null;
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
};

const verifyToken = async (req, res, next) => {
  try {
    const token = extractBearerToken(req.headers.authorization);

    if (!token) {
      return res.status(401).json({ message: "Token khong hop le hoac bi thieu" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await accounts.findById(decoded.id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({ message: "Tai khoan khong ton tai" });
    }

    if (user.status !== "active") {
      return res.status(403).json({ message: "Tai khoan da bi khoa" });
    }

    req.user = {
      id: user._id.toString(),
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      role: user.role,
      status: user.status,
    };

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token khong hop le", error: error.message });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Ban chua dang nhap" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Ban khong co quyen truy cap",
        data: {
          requiredRoles: roles,
          currentRole: req.user.role,
        },
      });
    }

    next();
  };
};

module.exports = {
  verifyToken,
  authorizeRoles,
};
