import User from "../models/User.js";

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // req.user được lấy từ middleware verifyToken phía trước
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'Bạn không có quyền thực hiện hành động này.' 
            });
        }
        next(); // Nếu role hợp lệ, cho phép đi tiếp vào controller
    };
};