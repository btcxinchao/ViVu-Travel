import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout.jsx'
import HomePage from '../Pages/HomePage.jsx'

import SignIn from '../Pages/Auth/SignIn.jsx';
import Register from '../Pages/Auth/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';


function Routers() {
    return (
        <Routes>
            {/* Layout chính Pulibc */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Register" element={<Register />} />
            </Route>

            {/* User */}
            <Routes element={<ProtectedRoute roles={["user"]} />}>
                <Route element={PublicLayout}>
                    <Route path='?' />
                </Route>
            </Routes>
            {/* ADMIN */}
            <Routes element={<ProtectedRoute roles={["ADMIN"]} />}>
                <Route element={PublicLayout}>
                    <Route path='?' />
                </Route>
            </Routes>
            {/* Doi TAC */}

            <Routes element={<ProtectedRoute roles={["Doi TAC"]} />}>
                <Route element={PublicLayout}>
                    <Route path='?' />
                </Route>
            </Routes>

        </Routes>
    );
}

export default Routers;