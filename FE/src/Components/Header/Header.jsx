import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 w-full">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <FaLocationDot size={18} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
              ViVu Travel
            </span>
          </Link>
        </div>

        {/* Menu Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Dịch Vụ</Link>
          <Link to="/seasonal" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Gợi ý theo mùa</Link>
          <Link to="/tours" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Tour</Link>
          <Link to="/hotels" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Khách sạn</Link>
          <Link to="/tickets" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">Vé</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/SignIn" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
          >
            Đăng Nhập
          </Link>
          <Link 
            to="/Register" 
            className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-all shadow-md shadow-sky-100"
          >
            Đăng Ký
          </Link>
        </div>

      </header>
    </nav>
  );
}

export default Header;