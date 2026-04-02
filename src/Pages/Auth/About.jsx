import { Link } from "react-router-dom";
import { FaLocationDot } from "../../assets/Icons/Icons";

function About() {
  return (
    <div>
      {/* HEADER */}
   <section className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h1 className="text-white/100 text-4xl md:text-5xl font-bold">
      Về <span className="text-orange-500">chúng tôi</span>
    </h1>

    <p className="text-white/100 mt-4">
      Câu chuyện và sứ mệnh của VIVU Travel
    </p>

  </div>
</section>

      {/* GIỚI THIỆU */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        <img
          src="https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?q=80&w=1200&auto=format&fit=crop"
          alt="about"
          className="w-full h-80 md:h-[420px] object-cover rounded-3xl"
        />

        <div>
          <span className="text-orange-500 font-semibold text-sm tracking-widest">
            CÂU CHUYỆN CỦA CHÚNG TÔI
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 font-serif">
            10 năm đồng hành cùng{" "}
            <span className="text-orange-500">hành trình</span> của bạn
          </h2>

          <p className="text-gray-500 mb-4 leading-relaxed">
            VIVU Travel được thành lập năm 2016 với niềm đam mê mang đến
            những trải nghiệm du lịch chất lượng cao cho người Việt.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Mỗi chuyến đi là một câu chuyện, mỗi điểm đến là một khám phá.
          </p>
        </div>
      </section>

      {/* SỨ MỆNH + TẦM NHÌN */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#f97316" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="#f97316" strokeWidth="2" />
                <circle cx="12" cy="12" r="1.5" fill="#f97316" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
            <p className="text-gray-500 leading-relaxed">
              Mang đến trải nghiệm du lịch tuyệt vời nhất với dịch vụ chuyên nghiệp, an toàn và tận tâm.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  stroke="#f97316"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" stroke="#f97316" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tầm nhìn</h3>
            <p className="text-gray-500 leading-relaxed">
              Trở thành thương hiệu du lịch hàng đầu Việt Nam, kết nối con người với thiên nhiên.
            </p>
          </div>

        </div>
      </section>

      {/* THỐNG KÊ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-orange-500 text-4xl font-bold">10+</p>
            <p className="text-gray-500 mt-1">Năm kinh nghiệm</p>
          </div>

          <div>
            <p className="text-orange-500 text-4xl font-bold">500+</p>
            <p className="text-gray-500 mt-1">Tour du lịch</p>
          </div>

          <div>
            <p className="text-orange-500 text-4xl font-bold">50K+</p>
            <p className="text-gray-500 mt-1">Khách hàng</p>
          </div>

          <div>
            <p className="text-orange-500 text-4xl font-bold">100+</p>
            <p className="text-gray-500 mt-1">Điểm đến</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-semibold text-sm tracking-widest">
            ĐỘI NGŨ
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12 font-serif">
            Gặp gỡ <span className="text-orange-500">đội ngũ</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Nguyễn Văn An", role: "CEO" },
              { name: "Trần Thị Bích", role: "COO" },
              { name: "Lê Minh Tuấn", role: "Tour Manager" },
              { name: "Phạm Thị Lan", role: "Marketing" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl mb-3">
                  {item.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(-2)
                    .join("")}
                </div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;