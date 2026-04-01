import { FaLocationDot, FaRegStar } from "../../assets/Icons/Icons";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <header className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">

                {/* Logo */}
                <div className="flex h-16 items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                            <FaLocationDot />
                        </div>

                        <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                            ViVu Travel
                        </span>
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Dịch Vụ</Link>
                    <Link href="#" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">
                        <FaRegStar />
                        Gợi ý theo mùa
                    </Link>                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Tour</Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Khách sạn</Link>
                    <Link href="#" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Vé</Link>
                </div>

                {/* Auth */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        className="text-sm font-medium text-gray-600 hover:text-sky-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                        to="/SignIn"
                    >
                        Đăng nhập
                    </Link>

                    <Link
                        className="text-sm font-medium text-white px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 transition-all shadow-sm"
                        to="/Register"
                    >
                        Đăng ký
                    </Link>
                </div>

            </header>
        </nav>
    );
}

export default Header;