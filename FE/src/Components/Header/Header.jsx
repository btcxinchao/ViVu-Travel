import { FaLocationDot } from "../../assets/Icons/Icons"
function Header() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <FaLocationDot />
                        </div>
                        <span className="font-size: 1.25rem; font-weight: 700; background: linear-gradient(135deg, rgb(14, 165, 233), rgb(20, 184, 166)) text; -webkit-text-fill-color: transparent;">
                            ViVu Travel
                        </span>
                    </a>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <a href="" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Dịch Vụ</a>
                    <a href="" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Gợi ý theo mùa</a>
                    <a href="" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Tour</a>
                    <a href="" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Khách sạn</a>
                    <a href="" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Vé</a>
                </div>
                <div className="hidden md:flex items-center gap-3"></div>
            </header>
        </nav>
    );
}

export default Header;