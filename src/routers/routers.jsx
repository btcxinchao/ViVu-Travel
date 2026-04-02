import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout.jsx'
import HomePage from '../Pages/HomePage.jsx'

import SignIn from '../Pages/Auth/SignIn.jsx';
import Register from '../Pages/Auth/Register.jsx';
import Destination from '../Pages/Auth/Destination.jsx';
import About from '../Pages/Auth/About.jsx';


function Routers() {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Register" element={<Register />} />
                  <Route path="/Destination" element={<Destination />} />
                   <Route path="/About" element={<About/>} />

            </Route>

            {/* Layout auth (ko header/footer)
            <Route element={<AuthLayout />}>
                <Route path="/SignIn" element={<SignIn />} />
            </Route> */}
        </Routes>
    );
}

export default Routers;