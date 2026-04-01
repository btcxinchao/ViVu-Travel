import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default PublicLayout;