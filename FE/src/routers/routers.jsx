import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout.jsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import AuthLayout from '../layout/AuthLayout.jsx';
import SignIn from '../Pages/Auth/SignIn/Signin.jsx';
// Kiểm tra lại đường dẫn này trong máy bạn xem Register nằm ở đâu nhé
import Register from '../Pages/HomePage/Register.jsx';

function Routers() {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Register" element={<Register />} />
            </Route>

            {/* Layout auth (Dành cho sau này nếu bạn muốn tách riêng form đăng nhập/đăng ký) */}
            {/* <Route element={<AuthLayout />}>
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Register" element={<Register />} />
            </Route> 
            */}
        </Routes>
    );
}

export default Routers;