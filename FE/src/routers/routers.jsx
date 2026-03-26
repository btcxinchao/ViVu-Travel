import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AuthLayout from '../layout/AuthLayout.jsx';
import Register from '../Pages/Register/Register.jsx';

function Routers() {
    return (
        <Routes>
            {/* Layout chính */}
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>

            {/* Layout auth */}
            <Route element={<AuthLayout />}>
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default Routers;