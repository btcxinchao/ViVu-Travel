import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout.jsx'
import HomePage from '../Pages/HomePage.jsx'
import SignIn from '../Pages/Auth/SignIn.jsx';
import Register from '../Pages/Auth/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import LayoutAdmin from '../layout/LayoutAdmin.jsx';
import DashboardProvider from '../Pages/DashboardProvider.jsx';
import { useEffect } from 'react';
function Routers() {

    const token = localStorage.getItem("accessToken");


    return (
        <Routes>

            {/* Public */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />

                <Route
                    path="signin"
                    element={token ? <Navigate to="/" /> : <SignIn />}
                />

                <Route
                    path="register"
                    element={token ? <Navigate to="/" /> : <Register />}
                />
            </Route>

            {/* USER */}
            <Route element={<ProtectedRoute roles={["user"]} />}>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="user/dashboard" element={<div>User Dashboard</div>} />
                </Route>
            </Route>

            {/* ADMIN */}
            <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
                <Route path="/" element={<LayoutAdmin />}>
                    <Route path="admin/dashboard" element={<div>Admin Dashboard</div>} />
                </Route>
            </Route>
            <Route element={<ProtectedRoute roles={["provider"]} />}>
                <Route path="/" element={<LayoutAdmin />}>
                    <Route path="provider/dashboard" element={<DashboardProvider />} />
                </Route>
            </Route>

        </Routes>
    );
}

export default Routers;