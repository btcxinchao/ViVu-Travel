function HomePage() {
    return (
        <main className="flex-1">
            <div>
                <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden text-left">

                    {/* Background */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1682502922918-fed575428e3c"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 via-[#1a1a2e]/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-2xl">

                            <span className="inline-block px-4 py-1.5 bg-[#f97316]/20 text-[#f97316] rounded-full mb-6 backdrop-blur-sm border border-[#f97316]/30">
                                Khám phá Việt Nam cùng VIVU
                            </span>

                            <h1 className="text-white mb-6 font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight">
                                Hành trình của bạn <br />
                                <span className="text-[#f97316]">Câu Chuyện</span> Của Chúng Tôi
                            </h1>

                            <p className="text-white/70 mb-10 max-w-lg text-lg leading-7 mt-[40px] mb-[40px]">
                                Trải nghiệm những chuyến du lịch đẳng cấp với dịch vụ tận tâm, khám phá vẻ đẹp tiềm ẩn của mỗi vùng đất.
                            </p>
                        </div>

                        {/* Search box */}
                        <div className="bg-white rounded-2xl p-4 md:p-2 shadow-2xl max-w-4xl flex flex-col md:flex-row gap-3 md:gap-0 md:items-center">

                            {/* Keyword */}
                            <div className="flex-1 px-4 py-2 md:border-r border-gray-100">
                                <p className="text-gray-400 text-sm">Địa điểm</p>
                                <input
                                    placeholder="Địa điểm, dịch vụ..."
                                    type="text"
                                    className="w-full outline-none bg-transparent text-[#1a1a2e]"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex-1 px-4 py-2 md:border-r border-gray-100">
                                <p className="text-gray-400 text-sm">Ngày đi</p>
                                <input
                                    type="date"
                                    className="w-full outline-none bg-transparent text-[#1a1a2e]"
                                />
                            </div>

                            {/* Guests */}
                            <div className="flex-1 px-4 py-2 md:border-r border-gray-100">
                                <p className="text-gray-400 text-sm">Số người</p>
                                <select className="w-full outline-none bg-transparent text-[#1a1a2e]">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <option key={item} value={item}>
                                            {item} người
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Button */}
                            <button className="bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all">
                                Tìm Kiếm
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 mt-10">
                            <div className="text-white/90">
                                <p className="text-2xl font-bold">100+</p>
                                <p className="text-white/50">Dịch vụ</p>
                            </div>

                            <div className="text-white/90">
                                <p className="text-2xl font-bold">50k+</p>
                                <p className="text-white/50">Khách Hàng</p>
                            </div>

                            <div className="text-white/90">
                                <p className="text-2xl font-bold">4.9</p>
                                <p className="text-white/50">Đánh Giá</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-[#f8fafc]">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors">

                            </div>
                            <h3 className="font-size: 16px; font-weight: 600;">An toàn & Bảo đảm</h3>
                            <p className="text-muted-foreground mt-2">Cam kết an toàn tuyệt đối trong mọi chuyến đi </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors">

                            </div>
                            <h3 className="font-size: 16px; font-weight: 600;">Hỗ trợ 24/7</h3>
                            <p className="text-muted-foreground mt-2">Đội ngũ tư vấn luôn sẵn sàng hỗ trợ bạn </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors">

                            </div>
                            <h3 className="font-size: 16px; font-weight: 600;">Trải nghiệm độc đáo</h3>
                            <p className="text-muted-foreground mt-2">Khám phá những điều đặc biệt nhất mỗi vùng đất</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors">

                            </div>
                            <h3 className="font-size: 16px; font-weight: 600;">Linh hoạt</h3>
                            <p className="text-muted-foreground mt-2">Tùy chỉnh lịch trình theo nhu cầu riêng</p>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <span className="text-[#f97316] mb-2 block font-size: 14px; font-weight: 600; letter-spacing: 2px;">
                                Khám Phá
                            </span>
                            <h2 className="font-family: &quot;Playfair Display&quot;, serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: rgb(26, 26, 46);">
                                Dịch Vụ
                                <span className="text-[#f97316]">Nổi Bật</span>
                                <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                                    Được đăng tải bởi các đối tác uy tín trên hệ thống
                                </p>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="opacity: 1; transform: none;">
                                <a href="">
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img src="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                            <span>

                                            </span>
                                            <span className="font-size: 13px; font-weight: 600;">
                                                4.9
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <h3>Du thuyền Hạ Long 5 sao</h3>
                                            <p className="text-white/70 flex items-center gap-1 mt-1"><span>iCON</span>
                                                Quảng Ninh</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[#f97316]">4.990.000 đ</p>
                                            <p className="text-muted-foreground"> Bởi Công ty Du lịch Hạ Long Star</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-white text-[#f97316] transition-colors">

                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <a href="" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#f97316] text-[#f97316] rounded-full hover:bg-[#f97316] hover:text-white transition-all">Xem tất cả dịch vụ </a>
                        </div>

                    </div>
                </section>
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzQyODk3NjR8MA" alt="" />
                        <div className="absolute inset-0 bg-[#1a1a2e]/80">
                        </div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                        <h2 className="text-white mb-4">
                            Bạn là nhà cung cấp dịch vụ du lịch?
                        </h2>
                        <p className="text-white/60 mb-8">
                            Đăng ký làm đối tác VIVU Travel để đăng tải dịch vụ và tiếp cận hàng nghìn khách hàng tiềm năng
                        </p>
                        <a href="" className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white rounded-full hover:shadow-lg transition-all">
                            Đăng ký đối tác ngay
                        </a>
                    </div>
                </section>
                <section className="py-20 bg-[#f8fafc]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <span className="text-[#f97316] mb-2 block">
                                ĐÁNH GIÁ
                            </span>
                            <h2 className="font-family: &quot;Playfair Display&quot;, serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: rgb(26, 26, 46);">
                                Khách hàng
                                <span className="text-[#f97316]">
                                    nói gì
                                </span>
                            </h2>
                        </div>
                        <div className="max-w-2xl mx-auto"></div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomePage;