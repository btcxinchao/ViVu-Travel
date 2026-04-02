import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaRegEye, FaRegEyeSlash } from "../../assets/Icons/Icons";
import CustomApi from "../../../Server";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
  });
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await CustomApi({
        Url: "/api/auth/register",
        method: "POST",
        data: form,
      });

      setMessage(res.message || "Dang ky thanh cong");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPass: "",
      });
    } catch (apiError) {
      setError(apiError.message || "Dang ky that bai");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-teal-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-5">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
              <span><FaLocationDot /></span>
            </div>
            <h1 className="text-gray-900 font-semibold text-l">
              Tạo tài khoản
            </h1>
            <p className="text-gray-500 text-sm">
              Tham gia ViVu Travel ngay hôm nay
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
                Họ và tên
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Nguyễn Văn A"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block  text-left">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="email@gmail.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block  text-left">
                Số điện thoại
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="09xxxxxxxx"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block  text-left">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={show.password ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Tối thiểu 6 ký tự"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShow(prev => ({ ...prev, password: !prev.password }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {show.password ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block  text-left">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <input
                  type={show.confirmPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  placeholder="Nhập lại mật khẩu"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShow(prev => ({
                      ...prev,
                      confirmPassword: !prev.confirmPassword
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {show.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full my- py-3.5 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-teal-600 transition-all shadow-md mt-2"
            >
              Tạo tài khoản
            </button>
          </form>

          {/* Footer */}
          <p className="text-center py-5 text-sm text-gray-500 ">
            Đã có tài khoản?
            <Link
              to="/signin"
              className="text-sky-600 font-medium hover:text-sky-700 ml-1"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
