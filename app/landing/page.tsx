"use client";

import { useMemo, useState } from "react";

type Broker = {
  name: string;
  short: string;
  tone: string;
};

const brokers: Broker[] = [
  { name: "الراجحي المالية", short: "راجحي", tone: "#57e5c0" },
  { name: "الأهلي المالية", short: "أهلي", tone: "#62b7ff" },
  { name: "دراية المالية", short: "دراية", tone: "#c6a8ff" },
  { name: "الجزيرة كابيتال", short: "الجزيرة", tone: "#f4c96b" },
  { name: "الإنماء للاستثمار", short: "الإنماء", tone: "#ff8c9f" },
  { name: "الرياض المالية", short: "الرياض", tone: "#77e7d0" },
  { name: "سدرة المالية", short: "سدرة", tone: "#8db6ff" },
  { name: "ثروات للأوراق المالية", short: "ثروات", tone: "#f7a96b" },
  { name: "إثمار السعودية", short: "إثمار", tone: "#d69cff" },
  { name: "إتقان كابيتال", short: "إتقان", tone: "#72d6f5" },
];

const menu = ["نظرة عامة", "الأسواق", "التداول", "المحفظة", "الوسطاء", "الإعدادات"];

export default function LandingPage() {
  const [activeMenu, setActiveMenu] = useState("الوسطاء");
  const [selectedBroker, setSelectedBroker] = useState("الرياض المالية");
  const [connectionState, setConnectionState] = useState<"idle" | "opening">("idle");
  const [notice, setNotice] = useState("");

  const selected = useMemo(
    () => brokers.find((broker) => broker.name === selectedBroker) ?? brokers[5],
    [selectedBroker],
  );

  function selectBroker(name: string) {
    setSelectedBroker(name);
    setConnectionState("idle");
    setNotice("");
  }

  function connectBroker() {
    setConnectionState("opening");
    setNotice(
      `سيتم فتح صفحة المصادقة الرسمية لـ ${selected.name}. لا تدخل بيانات الدخول داخل HAWA ولا يتم تخزينها.`,
    );
    // ضع هنا رابط OAuth/API الرسمي بعد اعتماده من الوسيط.
    // window.location.href = OFFICIAL_BROKER_AUTH_URL;
  }

  return (
    <main className="app-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">H</div>
          <div>
            <strong>HAWA</strong>
            <span>SAUDI ULTRA</span>
          </div>
        </div>
        <div className="market-status"><i /> السوق مفتوح <b>●</b> مباشر</div>
        <button className="profile-button" type="button" aria-label="حساب المستخدم">م</button>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label="القائمة الرئيسية">
          <div className="sidebar-title">مساحة العمل</div>
          {menu.map((item) => (
            <button
              className={`menu-item ${activeMenu === item ? "active" : ""}`}
              key={item}
              type="button"
              onClick={() => setActiveMenu(item)}
            >
              <span className="menu-icon">{item === "الوسطاء" ? "⌁" : item === "المحفظة" ? "▣" : item === "التداول" ? "↗" : "◈"}</span>
              {item}
              {item === "الوسطاء" && <em>10</em>}
            </button>
          ))}
          <div className="sidebar-footer">
            <div className="security-icon">✓</div>
            <div><strong>بياناتك آمنة</strong><small>تسجيل الدخول يتم لدى الوسيط</small></div>
          </div>
        </aside>

        <section className="content-area">
          <div className="page-heading">
            <div>
              <div className="eyebrow">التداول / الوسطاء</div>
              <h1>الوسطاء في المملكة العربية السعودية</h1>
              <p>اختر وسيطك لربط المحفظة ومتابعة بياناتك في مكان واحد.</p>
            </div>
            <div className="live-card"><span>مؤشر السوق</span><strong>11,842.17</strong><b>+0.84%</b></div>
          </div>

          <div className="dashboard-grid">
            <section className="brokers-panel panel-card">
              <div className="panel-heading">
                <div><h2>الوسطاء</h2><span>الربط متاح عبر التكامل الرسمي فقط</span></div>
                <label className="search-box"><span>⌕</span><input aria-label="البحث عن وسيط" placeholder="ابحث عن وسيط" /></label>
              </div>
              <div className="broker-grid">
                {brokers.map((broker) => (
                  <button
                    className={`broker-card ${selectedBroker === broker.name ? "selected" : ""}`}
                    key={broker.name}
                    type="button"
                    onClick={() => selectBroker(broker.name)}
                  >
                    <span className="broker-logo" style={{ background: `${broker.tone}18`, color: broker.tone }}>{broker.short.slice(0, 1)}</span>
                    <span className="broker-copy"><strong>{broker.name}</strong><small>وساطة مالية سعودية</small></span>
                    <span className="broker-arrow">‹</span>
                  </button>
                ))}
              </div>
            </section>

            <aside className="connect-panel panel-card">
              <div className="selected-header"><span className="selected-label">الوسيط المختار</span><span className="offline"><i /> غير متصل</span></div>
              <div className="selected-brand"><span className="large-logo" style={{ color: selected.tone, background: `${selected.tone}18` }}>{selected.short.slice(0, 1)}</span><div><h2>{selected.name}</h2><p>حساب تداول ومحفظة استثمارية</p></div></div>
              <div className="connect-divider" />
              <div className="connect-message"><div className="lock">⌁</div><strong>اربط محفظتك بأمان</strong><p>سيتم تحويلك إلى صفحة تسجيل الدخول الرسمية للوسيط. لن تستلم HAWA كلمة المرور أو رمز التحقق.</p></div>
              <button className="connect-button" type="button" onClick={connectBroker} disabled={connectionState === "opening"}>{connectionState === "opening" ? "جاري تجهيز الربط..." : `ربط محفظة ${selected.name}`}</button>
              {notice && <div className="notice" role="status">{notice}</div>}
              <div className="security-note"><span>✓</span><div><strong>بدون تخزين</strong><small>يتم استخدام تفويض مؤقت من الوسيط فقط، ولا تُحفظ بيانات الدخول.</small></div></div>
            </aside>
          </div>

          <section className="portfolio-preview panel-card">
            <div className="panel-heading"><div><h2>معاينة المحفظة</h2><span>تظهر البيانات بعد إتمام الربط بنجاح</span></div><span className="preview-status">غير مرتبطة</span></div>
            <div className="metrics"><div><span>قيمة المحفظة</span><strong>—</strong></div><div><span>الرصيد النقدي</span><strong>—</strong></div><div><span>الربح والخسارة</span><strong>—</strong></div><div><span>الأوامر المفتوحة</span><strong>—</strong></div></div>
          </section>
        </section>
      </div>

      <style>{`
        *{box-sizing:border-box}html,body{margin:0;min-height:100%;background:#071017}body{font-family:Tahoma,Arial,sans-serif;color:#eefaff}.app-shell{min-height:100vh;position:relative;overflow:hidden;background:radial-gradient(circle at 75% 10%,#12302f 0,transparent 32%),linear-gradient(135deg,#061017,#08141b 55%,#071018)}.background-glow{position:absolute;width:420px;height:420px;border-radius:50%;filter:blur(80px);opacity:.15;pointer-events:none}.glow-one{background:#5df4d0;top:24%;right:-180px}.glow-two{background:#347cff;bottom:-250px;left:-120px}.topbar{height:76px;display:flex;align-items:center;gap:28px;padding:0 4vw;border-bottom:1px solid #ffffff10;position:relative;z-index:1;background:#071017cc;backdrop-filter:blur(16px)}.brand{display:flex;align-items:center;gap:11px;min-width:190px}.brand-mark{display:grid;place-items:center;width:38px;height:38px;border:1px solid #76f1d0;border-radius:12px;color:#76f1d0;font-weight:900;font-size:22px;box-shadow:0 0 25px #76f1d022}.brand strong{display:block;font-size:20px;letter-spacing:2px}.brand span{display:block;color:#76f1d0;font-size:9px;letter-spacing:2px}.market-status{margin:auto;color:#a9c0cc;font-size:12px}.market-status i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#62e7bf;box-shadow:0 0 10px #62e7bf;margin-left:7px}.market-status b{color:#65e8be;margin:0 5px}.profile-button{width:36px;height:36px;border:1px solid #ffffff1c;border-radius:50%;background:#112630;color:#fff}.workspace{width:min(1480px,94vw);margin:auto;display:grid;grid-template-columns:220px 1fr;gap:28px;padding:34px 0}.sidebar{border-left:1px solid #ffffff0b;padding:8px 18px 8px 0;display:flex;flex-direction:column;gap:7px}.sidebar-title,.eyebrow,.selected-label{color:#80a3b5;font-size:11px}.sidebar-title{padding:10px 15px 16px}.menu-item{border:0;background:transparent;color:#a8bdc8;text-align:right;border-radius:12px;padding:13px 14px;display:flex;gap:11px;align-items:center;font:inherit;font-size:13px;cursor:pointer}.menu-item:hover,.menu-item.active{color:#81f2d3;background:#79efd611}.menu-item.active{border-right:2px solid #79efd3}.menu-icon{font-size:18px;width:20px;color:#7ddfc8}.menu-item em{font-style:normal;font-size:10px;border-radius:12px;background:#79efd61c;color:#7df0d2;padding:3px 7px;margin-right:auto}.sidebar-footer{margin-top:auto;display:flex;gap:9px;align-items:center;border-top:1px solid #ffffff0c;padding:22px 4px 5px;color:#87a8b5}.security-icon{display:grid;place-items:center;border:1px solid #5be3bc66;color:#5be3bc;border-radius:8px;width:29px;height:29px}.sidebar-footer strong,.sidebar-footer small{display:block}.sidebar-footer strong{font-size:11px;color:#c9e4eb}.sidebar-footer small{font-size:9px;margin-top:4px}.content-area{min-width:0}.page-heading{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:26px}.page-heading h1{font-size:28px;margin:9px 0 7px;font-weight:700}.page-heading p{color:#8fa9b5;font-size:13px;margin:0}.live-card{min-width:160px;background:#ffffff08;border:1px solid #ffffff12;border-radius:14px;padding:12px 16px}.live-card span,.live-card strong,.live-card b{display:block}.live-card span{font-size:10px;color:#86a6b1}.live-card strong{font-size:18px;margin:4px 0}.live-card b{font-size:11px;color:#6ce5bd}.dashboard-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(300px,.7fr);gap:18px}.panel-card{border:1px solid #ffffff12;background:linear-gradient(145deg,#10222aee,#0b171ee8);border-radius:18px;box-shadow:0 20px 50px #00000025}.panel-heading{display:flex;align-items:center;justify-content:space-between;padding:20px 22px;border-bottom:1px solid #ffffff0c}.panel-heading h2{font-size:17px;margin:0 0 6px}.panel-heading span{font-size:10px;color:#819eab}.search-box{display:flex;align-items:center;gap:7px;border:1px solid #ffffff12;background:#ffffff07;padding:8px 10px;border-radius:9px;color:#7c9da9}.search-box input{width:110px;background:none;border:0;outline:0;color:white;font:inherit;font-size:11px}.broker-grid{padding:18px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.broker-card{display:flex;align-items:center;gap:11px;background:#ffffff04;border:1px solid #ffffff0c;border-radius:13px;padding:13px;text-align:right;color:#effcff;cursor:pointer;transition:.2s}.broker-card:hover,.broker-card.selected{border-color:#75eed055;background:#76efd30c;transform:translateY(-1px)}.broker-logo,.large-logo{display:grid;place-items:center;border-radius:10px;font-weight:800}.broker-logo{width:37px;height:37px;font-size:14px}.broker-copy{min-width:0;flex:1}.broker-copy strong,.broker-copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.broker-copy strong{font-size:12px}.broker-copy small{font-size:9px;color:#7996a2;margin-top:5px}.broker-arrow{color:#6f929d;font-size:20px}.connect-panel{padding:22px}.selected-header{display:flex;justify-content:space-between;align-items:center}.offline{color:#ff9aab;font-size:10px}.offline i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#ff718a;margin-left:5px}.selected-brand{display:flex;align-items:center;gap:13px;margin:22px 0}.large-logo{width:52px;height:52px;font-size:21px}.selected-brand h2{font-size:18px;margin:0 0 6px}.selected-brand p{font-size:10px;color:#809eaa;margin:0}.connect-divider{height:1px;background:#ffffff0d}.connect-message{text-align:center;padding:24px 8px 16px}.lock{color:#74efd1;font-size:31px;margin-bottom:10px}.connect-message strong{display:block;font-size:14px}.connect-message p{font-size:11px;color:#8da7b1;line-height:1.8;margin:9px 0}.connect-button{width:100%;border:0;border-radius:10px;padding:13px;background:linear-gradient(90deg,#57d9b7,#84f0d3);color:#062018;font:inherit;font-size:12px;font-weight:bold;cursor:pointer}.connect-button:disabled{opacity:.7;cursor:wait}.notice{margin-top:12px;border:1px solid #f4c96b40;background:#f4c96b0c;color:#f6d889;border-radius:9px;padding:10px;font-size:10px;line-height:1.7}.security-note{display:flex;gap:9px;margin-top:15px;padding-top:14px;border-top:1px solid #ffffff0c}.security-note>span{color:#67e6bd}.security-note strong,.security-note small{display:block}.security-note strong{font-size:10px;color:#a9ddd0}.security-note small{font-size:9px;color:#7794a0;line-height:1.7;margin-top:3px}.portfolio-preview{margin-top:18px}.preview-status{border:1px solid #ff718a35!important;color:#ff9aaa!important;border-radius:20px;padding:6px 10px}.metrics{display:grid;grid-template-columns:repeat(4,1fr);padding:20px 22px;gap:12px}.metrics div{background:#ffffff04;border:1px solid #ffffff09;border-radius:11px;padding:13px}.metrics span,.metrics strong{display:block}.metrics span{color:#819daa;font-size:10px}.metrics strong{font-size:22px;margin-top:9px;color:#b8cdd3}@media(max-width:1050px){.workspace{grid-template-columns:1fr}.sidebar{order:2;flex-direction:row;overflow:auto;border:0;padding:0}.sidebar-title,.sidebar-footer{display:none}.menu-item{white-space:nowrap}.dashboard-grid{grid-template-columns:1fr}}@media(max-width:650px){.topbar{padding:0 18px}.market-status{display:none}.brand{margin-left:auto}.workspace{width:calc(100% - 28px);padding:22px 0}.page-heading{align-items:flex-start;gap:16px;flex-direction:column}.page-heading h1{font-size:22px}.live-card{width:100%}.broker-grid{grid-template-columns:1fr}.panel-heading{align-items:flex-start;gap:13px;flex-direction:column}.search-box{width:100%}.search-box input{width:100%}.metrics{grid-template-columns:repeat(2,1fr)}}
      `}</style>
    </main>
  );
}
