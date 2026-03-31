import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const services  = ["Tour du lịch", "Khách sạn & Resort", "Vé tham quan", "Gợi ý theo mùa"];
const supports  = ["Trung tâm trợ giúp", "Chính sách hoàn tiền", "Điều khoản dịch vụ", "Chính sách bảo mật", "Đăng ký làm đối tác"];
const contacts  = [{ icon: <HiMapPin />, text: "Đại Học Duy Tân" }, { icon: <HiPhone />, text: "1800 1234 (Miễn phí)" }, { icon: <HiEnvelope />, text: "support@vivu.vn" }];
const socials   = [{ icon: <FaFacebookF />, label: "Facebook" }, { icon: <FaInstagram />, label: "Instagram" }, { icon: <FaYoutube />, label: "YouTube" }];

function LinkGroup({ title, items }) {
  return (
    <div>
      <p className="col-title">{title}</p>
      {items.map((item) => <a key={item} href="#" className="col-link">{item}</a>)}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer     { background:#0f172a; color:#94a3b8; font-family:sans-serif; }
        .grid       { max-width:1200px; margin:0 auto; padding:48px 32px; display:grid; grid-template-columns:280px 1fr 1fr 1fr; gap:40px; }
        .col-title  { font-size:15px; font-weight:700; color:#f1f5f9; margin-bottom:8px; }
        .col-link   { display:block; font-size:14px; color:#94a3b8; text-decoration:none; line-height:2.1; }
        .col-link:hover { color:#38bdf8; }
        .bottom     { border-top:1px solid #1e293b; max-width:1200px; margin:0 auto; padding:14px 32px; display:flex; justify-content:space-between; font-size:13px; }
      `}</style>

      <div className="grid">
        {/* Brand */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12, fontSize:18, fontWeight:700, color:"#f1f5f9" }}>
            <HiMapPin style={{ background:"#0ea5e9", borderRadius:"50%", padding:6, width:34, height:34, color:"#fff" }} />
            ViVu Travel
          </div>
          <p style={{ fontSize:13, lineHeight:1.75, marginBottom:16 }}>
            Nền tảng đặt dịch vụ du lịch trực tuyến hàng đầu Việt Nam. Kết nối khách hàng với nhà cung cấp uy tín trên toàn quốc.
          </p>
          <div style={{ display:"flex", gap:8 }}>
            {socials.map(({ icon, label }) => (
              <button key={label} title={label} style={{ width:34, height:34, borderRadius:8, background:"#1e293b", border:"none", cursor:"pointer", color:"#94a3b8", display:"flex", alignItems:"center", justifyContent:"center" }}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        <LinkGroup title="Dịch vụ" items={services} />
        <LinkGroup title="Hỗ trợ"  items={supports} />

        {/* Liên hệ */}
        <div>
          <p className="col-title">Liên hệ</p>
          {contacts.map(({ icon, text }) => (
            <div key={text} style={{ display:"flex", gap:8, marginBottom:10, fontSize:13, alignItems:"flex-start" }}>
              <span style={{ color:"#38bdf8", marginTop:2 }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="bottom">
        <span>© 2026 ViVu Travel. Được phát triển bởi Nhóm 116 – Trường KHMT.</span>
        <span>Hỗ trợ thanh toán VNPAY</span>
      </div>
    </footer>
  );
}