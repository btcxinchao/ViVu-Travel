export const authorizeRoles = (allowedRoles) => {
  try {
    return (req, res, next) => {
      // req.user được lấy từ middleware verifyToken phía trước
      if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Bạn không có quyền thực hiện hành động này.",
        });
      }
      next(); // Nếu role hợp lệ, cho phép đi tiếp vào controller
    };
  } catch (error) {
    console.error("loi khi xac minh Role trong roleMiddleware", error);
    return res.status(500).json({ message: "Loi he thong" });
  }
};
