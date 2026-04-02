import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function ProtectedRoute({ roles }) {
    const token = localStorage.getItem("accessToken");
    if (!token) return <Navigate to="/login" replace />;

    try {
        const decoded = jwtDecode(token);
        if (!roles.includes(decoded.role)) return <Navigate to="/" replace />;
        return <Outlet />;
    } catch {
        return <Navigate to="/" replace />;
    }
}