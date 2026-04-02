import { Link } from "react-router-dom";
import { FaLocationDot } from "../../assets/Icons/Icons";

function Destination() {
  const data = [
    {
      id: 1,
      title: "Du thuyền Hạ Long 5 sao",
      location: "Quảng Ninh",
      price: "4.990.000đ",
      rating: 4.9,
      category: "Biển đảo",
      img: "https://images.unsplash.com/photo-1546282512-1a6387260c5f",
    },
    {
      id: 2,
      title: "Hội An - Đà Nẵng",
      location: "Quảng Nam - Đà Nẵng",
      price: "5.490.000đ",
      rating: 4.8,
      category: "Văn hóa",
      img: "https://images.unsplash.com/photo-1679033932050-831ace7a226f",
    },
    {
      id: 3,
      title: "Sapa - Fansipan",
      location: "Lào Cai",
      price: "3.990.000đ",
      rating: 4.7,
      category: "Núi",
      img: "https://images.unsplash.com/photo-1694152362587-99d77d21793b",
    },
    {
      id: 4,
      title: "Phú Quốc",
      location: "Kiên Giang",
      price: "6.990.000đ",
      rating: 4.9,
      category: "Biển đảo",
      img: "https://images.unsplash.com/photo-1680096025643-d41f6aeff989",
    },
  ];

  return (
    <div>
{/* HERO */}
<section className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 flex flex-col items-center justify-center text-center">

  <h1
    className="text-white font-bold leading-tight"
    style={{
      fontFamily: '"Playfair Display", serif',
      fontSize: "clamp(40px, 6vw, 64px)",
    }}
  >
    Dịch vụ <span className="text-orange-500">du lịch</span>
  </h1>

  <p className="text-white/80 mt-5 max-w-xl text-lg">
    Tìm kiếm và đặt dịch vụ du lịch phù hợp nhất
  </p>

  {/* SEARCH */}
  <div className="w-full max-w-2xl mt-10 px-6">
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
      <input
        placeholder="Tìm kiếm..."
        className="w-full px-5 py-4 outline-none text-gray-700"
      />
    </div>
  </div>

</section>

      {/* FILTER */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-3 flex-wrap">
        <button className="px-5 py-2 rounded-full bg-[#f97316] text-white text-sm font-medium">
          Tất cả
        </button>
        <button className="px-5 py-2 rounded-full bg-[#f0f4f8] hover:bg-orange-100 text-sm">
          Biển đảo
        </button>
        <button className="px-5 py-2 rounded-full bg-[#f0f4f8] hover:bg-orange-100 text-sm">
          Núi
        </button>
        <button className="px-5 py-2 rounded-full bg-[#f0f4f8] hover:bg-orange-100 text-sm">
          Văn hóa
        </button>
        <button className="px-5 py-2 rounded-full bg-[#f0f4f8] hover:bg-orange-100 text-sm">
          Ẩm thực
        </button>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {data.map((item) => (
          <Link to={`/destination/${item.id}`} key={item.id}>
            <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <span className="text-yellow-500 text-sm font-semibold">
                    ⭐ {item.rating}
                  </span>
                </div>

                <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                  <FaLocationDot /> {item.location}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-bold text-xl">
                    {item.price}
                  </span>
                  <span className="text-gray-400 text-xs">
                    bởi VIVU Travel
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Destination;