import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Slidebar from '../Components/Slidebar/Slidebar.jsx';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Header />

            <main className="flex flex-1 w-full">
                <div className="flex-1 px-5 md:px-20 py-4">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PublicLayout;