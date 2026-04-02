import { useState } from "react";
import { Link } from "react-router-dom";
import CustomApi from "../../Server";
import { FaLocationDot, FaRegEye, FaRegEyeSlash } from "../../assets/Icons/Icons";

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
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold">
              <span><FaLocationDot /></span>
            </div>
            <h1 className="text-gray-900 font-semibold text-l">Tao tai khoan</h1>
            <p className="text-gray-500 text-sm">Tham gia ViVu Travel ngay hom nay</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
                Ho va ten
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Nguyen Van A"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
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

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
                So dien thoai
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="09xxxxxxxx"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
                Mat khau
              </label>
              <div className="relative">
                <input
                  type={show.password ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Toi thieu 6 ky tu"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
                />
                <button
                  type="button"
                  onClick={() => setShow((prev) => ({ ...prev, password: !prev.password }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {show.password ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
                Xac nhan mat khau
              </label>
              <div className="relative">
                <input
                  type={show.confirmPassword ? "text" : "password"}
                  value={form.confirmPass}
                  onChange={(e) => handleChange("confirmPass", e.target.value)}
                  placeholder="Nhap lai mat khau"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShow((prev) => ({
                      ...prev,
                      confirmPassword: !prev.confirmPassword,
                    }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {show.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {message ? <p className="text-sm text-emerald-600 text-left">{message}</p> : null}
            {error ? <p className="text-sm text-red-500 text-left">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-teal-600 transition-all shadow-md mt-2 disabled:opacity-70"
            >
              {loading ? "Dang xu ly..." : "Tao tai khoan"}
            </button>
          </form>

          <p className="text-center py-5 text-sm text-gray-500">
            Da co tai khoan?
            <Link to="/signin" className="text-sky-600 font-medium hover:text-sky-700 ml-1">
              Dang nhap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
