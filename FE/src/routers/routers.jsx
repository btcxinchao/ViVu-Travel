import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout.jsx'
import HomePage from '../Pages/HomePage/HomePage.jsx'
// import AuthLayout from '../layout/AuthLayout.jsx';
import SignIn from '../Pages/Auth/SignIn/Signin.jsx';


function Routers() {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/SignIn" element={<SignIn />} />
            </Route>

            {/* Layout auth (ko header/footer)
            <Route element={<AuthLayout />}>
                <Route path="/SignIn" element={<SignIn />} />
            </Route> */}
        </Routes>
    );
}

export default Routers;