"use client";

import { useEffect, useMemo, useState } from "react";

const cards = [
  ["TASI", "7,898.68", "▣"],
  ["VOLUME", "178M", "◫"],
  ["VALUE", "4.32B", "$"],
];
const tabs = ["Quick Trade", "AutoPilot", "Settings"];

export default function LandingPage() {
  const target = useMemo(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), []);
  const [active, setActive] = useState(1);
  const [seconds, setSeconds] = useState(Math.floor((target.getTime() - Date.now()) / 1000));

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds(Math.max(0, Math.floor((target.getTime() - Date.now()) / 1000))), 1000);
    const keyboard = (event: KeyboardEvent) => {
      if (["1", "2", "3"].includes(event.key)) setActive(Number(event.key) - 1);
    };
    window.addEventListener("keydown", keyboard);
    return () => { window.clearInterval(timer); window.removeEventListener("keydown", keyboard); };
  }, [target]);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <main className="landing-shell">
      <div className="romantic-waves" aria-hidden="true"><i /><i /><i /></div>
      <div className="top-badge">Made with AI</div>
      <section className="brand-panel">
        <header className="panel-header"><b>DASHBOARD</b><span>● ● ●</span></header>
        <div className="dashboard-grid">
          <div className="side-column">{cards.map(([name, value, icon]) => <article className="mini-card" key={name}><div className="card-icon">{icon}</div><div><small>{name}</small><strong>{value}</strong></div></article>)}</div>
          <div className="center-panel">
            <div className="ai-panel"><div className="robot-head">◉</div><span className="ai-letter">Ai</span><div className="arrow" /></div>
            <div className="logo-block"><b>HAWA</b><small>SAUDI ULTRA</small></div>
          </div>
          <div className="side-column"><article className="mini-card"><div className="card-icon">AI</div><div><small>AI FORECAST</small><strong>BULLISH</strong></div></article><article className="mini-card"><div className="card-icon">✓</div><div><small>RISK LEVEL</small><strong>MEDIUM</strong></div></article><article className="mini-card"><div className="card-icon">◌</div><div><small>LIQUIDITY</small><strong>62.4%</strong></div></article></div>
        </div>
        <div className="countdown"><span>{String(days).padStart(2, "0")}<small>Days</small></span><span>{String(hours).padStart(2, "0")}<small>Hours</small></span><span>{String(minutes).padStart(2, "0")}<small>Minutes</small></span><span>{String(secs).padStart(2, "0")}<small>Seconds</small></span></div>
        <div className="bottom-strip"><b>◔ 10:24</b><b className="green">↑ 112</b><b>= 34</b><b className="red">↓ 69</b><b>سيولة <em>62.4%</em></b></div>
        <div className="status-line">REAL-TIME • AI POWERED • ULTRA PERFORMANCE</div>
        <nav className="gold-tabs" aria-label="Dashboard controls">{tabs.map((tab, index) => <button key={tab} className={active === index ? "active" : ""} onClick={() => setActive(index)}>{tab}<small>{index + 1}</small></button>)}</nav>
      </section>
      <style>{`
        *{box-sizing:border-box}html,body{margin:0}body{font-family:Arial,sans-serif;background:#020305}.landing-shell{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden;padding:34px;background:radial-gradient(ellipse at 50% 20%,#49320b 0,transparent 34%),radial-gradient(ellipse at 20% 85%,#15351e 0,transparent 28%),#020305}.romantic-waves{position:absolute;inset:-20%;overflow:hidden;pointer-events:none;opacity:.55}.romantic-waves i{position:absolute;left:-10%;width:120%;height:45%;border:2px solid rgba(255,195,78,.42);border-radius:50%;filter:blur(1px);transform:rotate(-8deg);animation:wave 12s ease-in-out infinite}.romantic-waves i:nth-child(1){top:4%;box-shadow:0 0 35px #e3a92f}.romantic-waves i:nth-child(2){top:28%;animation-delay:-4s;border-color:rgba(255,111,177,.24)}.romantic-waves i:nth-child(3){top:57%;animation-delay:-8s;border-color:rgba(104,255,191,.22)}.top-badge{position:absolute;right:32px;top:24px;padding:11px 20px;border-radius:999px;background:#fff;color:#20170d;font-weight:bold;box-shadow:0 0 26px #fff7}.brand-panel{position:relative;width:min(100%,1200px);padding:20px 20px 24px;border:3px solid #f7cf69;border-radius:28px;background:linear-gradient(145deg,rgba(15,15,12,.94),rgba(1,5,4,.9));box-shadow:0 0 0 4px #f7cf6933,0 0 48px #e0a92b99,inset 0 0 42px #d89c2438;animation:panelFloat 7s ease-in-out infinite}.brand-panel:after{content:"";position:absolute;inset:8px;border:1px solid #fff2a055;border-radius:20px;pointer-events:none}.panel-header{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;color:#ffda79;font-size:clamp(22px,3vw,42px);letter-spacing:.08em;text-shadow:0 0 20px #ffc43d}.panel-header span{font-size:12px;color:#9bff52;letter-spacing:7px}.dashboard-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1.5fr 1fr;gap:20px;align-items:center;padding:62px 0 18px}.side-column{display:flex;flex-direction:column;gap:18px}.mini-card{display:flex;align-items:center;gap:14px;min-height:120px;padding:16px;border:2px solid #e8bd54aa;border-radius:18px;background:#07110dcc;box-shadow:0 0 20px #d99d3226,inset 0 0 22px #ffe18a18;animation:cardFloat 5s ease-in-out infinite}.mini-card:nth-child(2){animation-delay:-1.6s}.mini-card:nth-child(3){animation-delay:-3.2s}.card-icon{display:grid;place-items:center;flex:0 0 54px;width:54px;height:54px;border:1px solid #a6ff66;border-radius:13px;color:#b7ff65;font-size:21px;font-weight:bold;box-shadow:0 0 18px #8cff4c77}.mini-card small{display:block;color:#dfffe8;font-size:14px;font-weight:bold;letter-spacing:.04em}.mini-card strong{display:block;margin-top:8px;color:#d8ff90;font-size:clamp(21px,2.5vw,36px)}.center-panel{text-align:center}.ai-panel{position:relative;display:grid;place-items:center;width:min(100%,480px);aspect-ratio:1;border:5px solid #f6d268;border-radius:50%;background:radial-gradient(circle,#314a20 0,#0a100b 45%,#020302 72%);box-shadow:0 0 35px #ffd45b99,inset 0 0 45px #c8a23a55;animation:goldPulse 3s ease-in-out infinite;overflow:hidden}.robot-head{position:absolute;top:15%;color:#ffdf7a;font-size:54px;text-shadow:0 0 18px #fff}.ai-letter{font-size:clamp(120px,18vw,245px);font-weight:900;letter-spacing:-.14em;color:#d9ff82;text-shadow:0 0 22px #bcff46,0 0 70px #66ff5699}.arrow{position:absolute;width:220px;height:110px;right:8%;bottom:21%;border-top:10px solid #a9ff4a;border-right:10px solid #a9ff4a;transform:rotate(-35deg);filter:drop-shadow(0 0 14px #7dff55)}.logo-block b{display:block;margin-top:12px;color:#f7d36b;font-size:clamp(50px,6vw,92px);line-height:.9;text-shadow:0 0 25px #ffc83d}.logo-block small{color:#f5d46e;font-size:clamp(16px,2vw,30px);font-weight:bold;letter-spacing:.1em}.countdown,.bottom-strip{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px;padding:12px;border:2px solid #edc258aa;border-radius:16px;background:#07120ec9}.countdown span{font-size:clamp(24px,3vw,40px);font-weight:bold;color:#fff1ad}.countdown small{display:block;color:#9cff7b;font-size:11px}.bottom-strip{grid-template-columns:repeat(5,1fr);color:#ffdc74;font-size:clamp(14px,1.8vw,23px);text-align:center}.bottom-strip .green,em{color:#8eff81;font-style:normal}.bottom-strip .red{color:#ff6f65}.status-line{position:relative;z-index:1;margin-top:22px;text-align:center;color:#9cff84;font-size:clamp(15px,2vw,29px);font-weight:bold;letter-spacing:.1em;text-shadow:0 0 18px #75ff67}.gold-tabs{position:relative;z-index:1;display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:20px}.gold-tabs button{position:relative;border:2px solid #ffe18a;border-radius:14px;padding:14px 23px;background:linear-gradient(#ffe797,#d99619 52%,#715000);color:#211300;font-weight:900;cursor:pointer;box-shadow:0 0 16px #f7c94c66,inset 0 0 14px #fff8;transition:.25s}.gold-tabs button small{margin-left:9px;opacity:.65}.gold-tabs button:hover,.gold-tabs button.active{transform:translateY(-4px) scale(1.04);box-shadow:0 0 26px #ffd45bcc,0 0 50px #e7a52b55,inset 0 0 18px #fff9}.gold-tabs button.active{outline:2px solid #fff0a0;outline-offset:3px}@keyframes panelFloat{50%{transform:translateY(-5px)}}@keyframes cardFloat{50%{transform:translateY(-5px)}}@keyframes goldPulse{50%{box-shadow:0 0 60px #ffd45bcc,inset 0 0 65px #d8b04477}}@keyframes wave{0%,100%{transform:translateX(-3%) rotate(-8deg)}50%{transform:translateX(3%) rotate(-5deg)}}@media(max-width:900px){.dashboard-grid{grid-template-columns:1fr}.side-column{display:grid;grid-template-columns:repeat(3,1fr)}.bottom-strip{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.landing-shell{padding:18px 10px}.top-badge{right:15px;top:14px;font-size:13px}.side-column{display:flex}.brand-panel{padding:16px 12px}.bottom-strip{grid-template-columns:1fr 1fr}.panel-header{font-size:22px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
      `}</style>
    </main>
  );
}
