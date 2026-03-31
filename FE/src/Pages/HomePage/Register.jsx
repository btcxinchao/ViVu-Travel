import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";

const FIELDS = [
  { k: "name", l: "Họ và tên", i: <FiUser/>, p: "Nguyễn Văn A" },
  { k: "email", l: "Email", i: <MdEmail/>, p: "email@example.com", r: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { k: "phone", l: "SĐT", i: <BsTelephoneFill/>, p: "09xxxxxxxx", r: /^[0-9]{9,11}$/ },
  { k: "pass", l: "Mật khẩu", i: <MdLock/>, p: "Tối thiểu 6 ký tự", pw: 1 },
  { k: "conf", l: "Xác nhận", i: <MdLock/>, p: "Nhập lại mật khẩu", pw: 1 }
];

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", pass:"", conf:"" });
  const [err, setErr] = useState({});
  const [show, setShow] = useState({});

  const set = (k,v) => setForm({ ...form, [k]: v });

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Nhập họ tên";
    if (!FIELDS[1].r.test(form.email)) e.email = "Email lỗi";
    if (!FIELDS[2].r.test(form.phone)) e.phone = "SĐT lỗi";
    if (form.pass.length < 6) e.pass = ">=6 ký tự";
    if (form.pass !== form.conf) e.conf = "Không khớp";
    return e;
  };

  const submit = e => {
    e.preventDefault();
    const e2 = validate();
    setErr(e2);
    if (!Object.keys(e2).length) console.log(form);
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#e8f6fb] to-[#e0f5f0] flex items-center justify-center font-sans px-4 py-10">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md px-8 py-10">

        <h2 className="text-center text-3xl font-black text-slate-800 mb-8">
          Tạo tài khoản
        </h2>

        <form onSubmit={submit} className="flex flex-col gap-5">

          {FIELDS.map(f => {
            const isPw = f.pw;
            const isShow = show[f.k];

            return (
              <div key={f.k}>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                  {f.i} {f.l} *
                </label>

                <div className="flex items-center border border-slate-200 rounded-xl px-4 focus-within:border-cyan-400 focus-within:ring-2 ring-cyan-100">
                  <input
                    type={isPw && !isShow ? "password" : "text"}
                    placeholder={f.p}
                    className="flex-1 py-3.5 outline-none text-sm"
                    value={form[f.k]}
                    onChange={e => set(f.k, e.target.value)}
                  />

                  {isPw && (
                    <button type="button"
                      onClick={() => setShow({ ...show, [f.k]: !isShow })}
                    >
                      {isShow ? <HiEye size={20}/> : <HiEyeOff size={20}/>}
                    </button>
                  )}
                </div>

                {err[f.k] && (
                  <p className="text-xs text-red-500 mt-1">{err[f.k]}</p>
                )}
              </div>
            );
          })}

          <button className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-bold py-4 rounded-xl shadow-lg text-lg hover:scale-[1.02] transition">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}