import { Navigate, Outlet } from "react-router-dom";
import { jwt  } from "../utils/jwt";

export default function ProtectedRoute({ roles }) {
  const user = jwt();

  if (!user) return <Navigate to="/signin" replace />;

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}