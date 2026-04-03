import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout.jsx";
import LayoutAdmin from "../layout/LayoutAdmin.jsx";
import HomePage from "../Pages/HomePage.jsx";
import SignIn from "../Pages/Auth/SignIn.jsx";
import Register from "../Pages/Auth/Register.jsx";
import DashboardProvider from "../Pages/DashboardProvider.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { jwt } from "../utils/jwt.js";
import Services from "../Pages/Services.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import AddServices from "../Pages/AddServices.jsx";
import ServicesDetail from "../Pages/ServicesDetail.jsx";

function Routers() {
  const user = jwt();

  return (
    <Routes>

      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Route>

      {/* USER */}
      <Route element={<ProtectedRoute roles={["user"]} />}>
        <Route path="/user" element={<PublicLayout />}>
          <Route path="dashboard" element={<div>User Dashboard</div>} />
        </Route>
      </Route>

      {/* ADMIN */}
      <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="dashboard" element={<div>Admin Dashboard</div>} />
        </Route>
      </Route>

      {/* PROVIDER */}
      <Route element={<ProtectedRoute roles={["provider"]} />}>
        <Route path="/provider" element={<LayoutAdmin />}>
          <Route path="dashboard" element={<DashboardProvider />} />
          {/* <Route path="/DBdeatils" element={<Dashboard/>} /> */}
          <Route path="Services" element={<Services/>}  />
          <Route path="AddServices" element={<AddServices/>}  />
          <Route path="DetailServices/:id" element={<ServicesDetail/>}  />
        </Route>
      </Route>

    </Routes>
  );
}

export default Routers;