import Header from './Header/Header';
import Footer from './Footer/Footer';
import Slidebar from './Slidebar/Slidebar.jsx';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Header />

            <main className="flex flex-1 w-full">
                <div className="flex-1 px-5 md:px-20 py-4 px-0 md:px-0 py-0">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;