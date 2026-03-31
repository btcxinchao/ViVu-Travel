import { FaFulcrum } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <FaFulcrum className="text-4xl mb-4 text-blue-500" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;