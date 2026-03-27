import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";

const FDS = [
  { k: "name", i: <FiUser/>, l: "Họ và tên", p: "Nguyễn Văn A" },
  { k: "email", i: <MdEmail/>, l: "Email", p: "email@example.com", reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { k: "phone", i: <BsTelephoneFill/>, l: "Số điện thoại", p: "09xxxxxxxx", reg: /^[0-9]{9,11}$/ },
  { k: "pass", i: <MdLock/>, l: "Mật khẩu", p: "Tối thiểu 6 ký tự", isP: 1 },
  { k: "conf", i: <MdLock/>, l: "Xác nhận mật khẩu", p: "Nhập lại mật khẩu", isP: 1 }
];

export default function Register() {
  const [f, setF] = useState({ name:"", email:"", phone:"", pass:"", conf:"" }), [err, setErr] = useState({}), [sh, setSh] = useState({});
  const submit = e => {
    e.preventDefault(); let eR = {};
    if (!f.name) eR.name = "Nhập họ tên";
    if (!FDS[1].reg.test(f.email)) eR.email = "Email lỗi";
    if (!FDS[2].reg.test(f.phone)) eR.phone = "SĐT lỗi";
    if (f.pass.length < 6) eR.pass = "Mật khẩu >= 6 ký tự";
    if (f.pass !== f.conf) eR.conf = "Mật khẩu không khớp";
    setErr(eR); if (!Object.keys(eR).length) console.log(f);
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#e8f6fb] to-[#e0f5f0] flex items-center justify-center font-sans px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md px-8 py-10">
        <div className="w-20 h-20 rounded-3xl mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 384 512" className="w-10 h-10 fill-white">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
        </div>
        <h2 className="text-center text-3xl font-black text-slate-800 mb-8">Tạo tài khoản</h2>
        <form onSubmit={submit} className="flex flex-col gap-5">
          {FDS.map(x => (
            <div key={x.k}>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold mb-2">{x.i} {x.l} *</div>
              <div className="flex items-center border border-slate-200 rounded-xl px-4 focus-within:border-cyan-400 focus-within:ring-2 ring-cyan-100">
                <input className="flex-1 py-3.5 outline-none text-sm" type={x.isP && !sh[x.k] ? "password" : "text"} placeholder={x.p} onChange={e => setF({...f, [x.k]: e.target.value})} />
                {x.isP && <button type="button" onClick={() => setSh({...sh, [x.k]: !sh[x.k]})}>{sh[x.k] ? <HiEye size={20}/> : <HiEyeOff size={20}/>}</button>}
              </div>
              {err[x.k] && <p className="text-xs text-red-500 mt-1">{err[x.k]}</p>}
            </div>
          ))}
          <button className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-bold py-4 rounded-xl shadow-lg text-lg hover:from-cyan-500 hover:to-teal-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">Đăng ký</button>
        </form>
        <p className="text-center text-sm text-slate-400 mt-6">Đã có tài khoản? <a href="/login" className="text-cyan-500 font-bold hover:underline">Đăng nhập</a></p>
      </div>
    </div>
  );
}