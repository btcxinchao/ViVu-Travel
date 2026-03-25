import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout.jsx'
import HomePage from '../Pages/HomePage/HomePage.jsx'
function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<HomePage />} />
            </Route>

        </Routes>
    );
}

export default Routers;