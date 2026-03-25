import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout.jsx'
import HomePage from '../Pages/HomePage/HomePage.jsx'
import AuthLayout from '../layout/AuthLayout.jsx';

function Routers() {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>

            {/* Layout auth (ko header/footer) */}
            <Route element={<AuthLayout />}>

            </Route>
        </Routes>
    );
}

export default Routers;