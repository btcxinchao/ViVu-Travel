import { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";

/* ── Helpers ── */
const Field = ({ label, error, children }) => (
  <div>
    {label && <label className="block text-xs font-extrabold text-slate-600 mb-1.5">{label}</label>}
    {children}
    {error && <p className="text-xs text-red-500 mt-1 font-semibold">{error}</p>}
  </div>
);

const wrap = (err) =>
  `flex items-center border-2 rounded-xl bg-[#f8faff] px-3 transition-all focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] ${err ? "border-red-400" : "border-slate-200 focus-within:border-blue-500"}`;

const inputCls = "flex-1 py-2.5 text-sm outline-none bg-transparent text-slate-800 placeholder-slate-300";

const TInput = ({ error, icon, ...p }) => (
  <div className={wrap(error)}>
    {icon && <span className="text-slate-400 mr-2 text-base flex-shrink-0">{icon}</span>}
    <input className={inputCls} {...p} />
  </div>
);

const PInput = ({ error, show, onToggle, ...p }) => (
  <div className={wrap(error)}>
    <input className={inputCls} type={show ? "text" : "password"} {...p} />
    <button type="button" onClick={onToggle} className="text-slate-400 hover:text-blue-500 ml-2 text-lg flex-shrink-0">
      {show ? <HiEye /> : <HiEyeOff />}
    </button>
  </div>
);

const ROUTES = [["Hà Nội", true], ["Đà Nẵng", false], ["TP. Hồ Chí Minh", true]];

/* ── Component ── */
export default function Register() {
  const [tab, setTab] = useState("phone");
  const [form, setForm] = useState({ lastName: "", firstName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({ password: false, confirmPassword: false });
  const [py, setPy] = useState(0);

  useEffect(() => {
    let t = 0;
    const id = setInterval(() => { t += 0.05; setPy(Math.sin(t) * 10); }, 30);
    return () => clearInterval(id);
  }, []);

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.lastName.trim())  e.lastName  = "Vui lòng nhập họ";
    if (!form.firstName.trim()) e.firstName = "Vui lòng nhập tên";
    if (tab === "email") {
      if (!form.email.trim()) e.email = "Vui lòng nhập email";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email không hợp lệ";
    } else {
      if (!form.phone.trim()) e.phone = "Vui lòng nhập số điện thoại";
      else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "SĐT không hợp lệ";
    }
    if (!form.password) e.password = "Vui lòng nhập mật khẩu";
    else if (form.password.length < 6) e.password = "Tối thiểu 6 ký tự";
    if (!form.confirmPassword) e.confirmPassword = "Xác nhận mật khẩu";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Mật khẩu không khớp";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    console.log("Register:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef2fb]" style={{ fontFamily: "'Nunito',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Playfair+Display:wght@700&display=swap');`}</style>

      <div className="flex w-[860px] min-h-[560px] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(30,70,200,0.16)]">

        {/* LEFT */}
        <div className="w-72 flex-shrink-0 relative flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(155deg,#3b82f6 0%,#1d4ed8 55%,#1e3a8a 100%)" }}>
          {/* Circles */}
          <div className="absolute w-64 h-64 rounded-full border-[36px] border-white/10 -top-20 -left-20" />
          <div className="absolute w-44 h-44 rounded-full border-[28px] border-white/10 -bottom-14 -right-14" />
          {/* Clouds */}
          <div className="absolute top-12 right-4 opacity-60">
            <div className="relative w-24 h-8 bg-white/15 rounded-full">
              <div className="absolute w-12 h-12 bg-white/15 rounded-full -top-5 left-4" />
              <div className="absolute w-8 h-8 bg-white/15 rounded-full -top-3 left-12" />
            </div>
          </div>
          <div className="absolute bottom-28 left-3 opacity-40">
            <div className="relative w-16 h-5 bg-white/15 rounded-full">
              <div className="absolute w-8 h-8 bg-white/15 rounded-full -top-3 left-2" />
            </div>
          </div>
          {/* Plane */}
          <div className="relative z-10 flex flex-col items-center" style={{ transform: `translateY(${py}px)` }}>
            <FaPlane className="text-white drop-shadow-lg" style={{ fontSize: 52, transform: "rotate(-30deg)" }} />
            <div className="flex gap-1.5 mt-2">
              {[1, 0.45, 0.18].map((op, i) => <div key={i} className="bg-white rounded-sm" style={{ width: 6, height: 3, opacity: op }} />)}
            </div>
          </div>
          {/* Brand */}
          <div className="z-10 text-center mt-5">
            <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Playfair Display',serif" }}>
              Vi<span className="text-blue-200">Vu</span> Travel
            </p>
            <p className="text-white/70 text-xs font-semibold mt-2 leading-6">Khám phá thế giới<br />cùng chúng tôi</p>
          </div>
          {/* Route */}
          <div className="z-10 mt-7 flex flex-col items-start">
            {ROUTES.map(([label, accent], i, arr) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <HiMapPin style={{ color: accent ? "#fbbf24" : "#fff", fontSize: 14, flexShrink: 0 }} />
                  <span className="text-white/85 text-xs font-bold">{label}</span>
                </div>
                {i < arr.length - 1 && <div className="w-px h-4 bg-white/30 ml-[6px] my-0.5" />}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 bg-white flex items-center justify-center px-12 py-10">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-black text-slate-800 mb-1">Tạo tài khoản</h2>
            <p className="text-sm text-slate-400 font-semibold mb-6">Điền thông tin để bắt đầu hành trình ✈️</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Họ / Tên */}
              <div className="grid grid-cols-2 gap-3">
                {[["lastName","Họ","Nguyễn"], ["firstName","Tên","Văn A"]].map(([k, lbl, ph]) => (
                  <Field key={k} label={lbl} error={errors[k]}>
                    <TInput name={k} placeholder={ph} value={form[k]} error={errors[k]}
                      icon={<FiUser />} onChange={e => set(k, e.target.value)} />
                  </Field>
                ))}
              </div>

              {/* Tab + Contact */}
              <Field error={errors.email || errors.phone}>
                <div className="flex border-2 border-slate-200 rounded-xl bg-[#f8faff] p-1 gap-1 mb-3">
                  {[["email", <MdEmail />, "Email"], ["phone", <MdPhone />, "Số điện thoại"]].map(([val, ico, lbl]) => (
                    <button key={val} type="button"
                      onClick={() => { setTab(val); setErrors(e => ({ ...e, email: "", phone: "" })); }}
                      className={`flex-1 py-2 text-xs font-extrabold rounded-lg transition-all flex items-center justify-center gap-1.5
                        ${tab === val ? "bg-blue-600 text-white shadow-[0_3px_10px_rgba(59,130,246,0.3)]" : "text-slate-500 hover:text-slate-700"}`}>
                      {ico}{lbl}
                    </button>
                  ))}
                </div>
                {tab === "email"
                  ? <TInput name="email" type="email" placeholder="example@gmail.com" value={form.email}
                      icon={<MdEmail />} error={errors.email} onChange={e => set("email", e.target.value)} />
                  : <TInput name="phone" type="tel" placeholder="0901 234 567" value={form.phone}
                      icon={<MdPhone />} error={errors.phone} onChange={e => set("phone", e.target.value)} />
                }
              </Field>

              {/* Passwords */}
              {[["password","Mật khẩu","Tối thiểu 6 ký tự"], ["confirmPassword","Xác nhận mật khẩu","Nhập lại mật khẩu"]].map(([k, lbl, ph]) => (
                <Field key={k} label={lbl} error={errors[k]}>
                  <PInput name={k} placeholder={ph} value={form[k]} error={errors[k]}
                    show={show[k]} onToggle={() => setShow(s => ({ ...s, [k]: !s[k] }))}
                    onChange={e => set(k, e.target.value)} />
                </Field>
              ))}

              {/* Submit */}
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 text-white font-black text-sm py-3 rounded-2xl tracking-wide transition-all active:scale-95 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", boxShadow: "0 6px 20px rgba(59,130,246,0.38)" }}>
                <IoSend size={15} /> Đăng ký
              </button>
            </form>

            <p className="text-center text-xs text-slate-400 font-semibold mt-5">
              Đã có tài khoản?{" "}
              <a href="/login" className="text-blue-600 font-extrabold hover:underline">Đăng nhập</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}