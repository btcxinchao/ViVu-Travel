import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Slidebar from "../Components/Slidebar.jsx"
import { Outlet } from 'react-router-dom';
function LayoutAdmin() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default LayoutAdmin;