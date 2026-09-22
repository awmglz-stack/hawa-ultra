"use client";

import { useMemo, useState, useEffect } from "react";

const features = [
  { title: "TASI", value: "7,898.68", state: "down", icon: "▣" },
  { title: "VOLUME", value: "178M", state: "neutral", icon: "◫" },
  { title: "VALUE", value: "4.32B", state: "neutral", icon: "$" },
];

const catalog = [
  "Quick Trade",
  "AutoPilot",
  "Settings",
];

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function LandingPage() {
  const targetDate = useMemo(
    () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 + 1000 * 60 * 60 * 3 + 1000 * 60 * 14),
    []
  );

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <main className="landing-shell">
      <div className="scan-glow" aria-hidden="true" />
      <div className="top-badge">Made with AI</div>

      <div className="brand-panel">
        <div className="panel-header">
          <div className="panel-title">DASHBOARD</div>
        </div>

        <div className="dashboard-grid">
          <div className="left-column">
            {features.map((item) => (
              <div key={item.title} className={`mini-card ${item.state}`}>
                <div className="card-icon">{item.icon}</div>
                <div className="card-text">
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="center-panel">
            <div className="ai-panel">
              <div className="robot-head" aria-hidden="true">
                <div className="eye eye-left" />
                <div className="eye eye-right" />
                <div className="head-antenna" />
              </div>

              <div className="ai-word">
                <span className="ai-letter">Ai</span>
              </div>

              <div className="arrow-arc" aria-hidden="true" />
              <div className="arrow-up" aria-hidden="true" />
            </div>

            <div className="logo-block">
              <div className="big-word">HAWA</div>
              <div className="sub-word">SAUDI ULTRA</div>
            </div>
          </div>

          <div className="right-column">
            <div className="mini-card forecast">
              <div className="card-icon ai-icon">AI</div>
              <div className="card-text">
                <span>AI FORECAST</span>
                <strong>BULLISH</strong>
              </div>
            </div>

            <div className="mini-card risk">
              <div className="card-icon shield">✓</div>
              <div className="card-text">
                <span>RISK LEVEL</span>
                <strong>MEDIUM</strong>
              </div>
            </div>

            <div className="mini-card liquidity">
              <div className="card-icon ring">◌</div>
              <div className="card-text">
                <span>LIQUIDITY</span>
                <strong>62.4%</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-strip">
          <div className="metric"><span className="clock">◔</span><strong>10:24</strong></div>
          <div className="metric green"><strong>↑ 112</strong></div>
          <div className="metric neutral"><strong>= 34</strong></div>
          <div className="metric red"><strong>↓ 69</strong></div>
          <div className="metric volume"><strong>سيولة</strong><span>62.4%</span></div>
        </div>

        <div className="status-line">REAL-TIME • AI POWERED • ULTRA PERFORMANCE</div>

        <div className="gold-tabs">
          {catalog.map((item, index) => (
            <button
              key={item}
              type="button"
              className={`gold-tab ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; }
        body {
          background: #020405;
          font-family: Arial, sans-serif;
        }

        .landing-shell {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 50% 30%, rgba(255, 196, 0, 0.15), transparent 22%),
            radial-gradient(circle at 20% 10%, rgba(74, 145, 255, 0.12), transparent 20%),
            radial-gradient(circle at 80% 12%, rgba(95, 255, 180, 0.12), transparent 18%),
            #020305;
          overflow: hidden;
          padding: 28px;
        }

        .scan-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 35%, rgba(255,255,255,0.02));
          pointer-events: none;
        }

        .top-badge {
          position: absolute;
          top: 28px;
          right: 32px;
          background: rgba(255,255,255,0.88);
          color: #111;
          font-weight: 700;
          font-size: 18px;
          border-radius: 999px;
          padding: 12px 22px;
          box-shadow: 0 0 20px rgba(255,255,255,0.25);
        }

        .brand-panel {
          position: relative;
          width: min(100%, 1160px);
          min-height: 820px;
          padding: 18px 16px 18px;
          background: rgba(0, 0, 0, 0.72);
          border: 3px solid #f2c95d;
          border-radius: 28px;
          box-shadow:
            0 0 0 4px rgba(242, 201, 93, 0.25),
            0 0 26px rgba(242, 201, 93, 0.4),
            inset 0 0 20px rgba(250, 191, 52, 0.2);
        }

        .panel-header {
          position: absolute;
          top: 12px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-height: 60px;
        }

        .panel-title {
          font-size: clamp(22px, 2vw, 44px);
          letter-spacing: .08em;
          font-weight: 900;
          color: #f0c66d;
          text-shadow: 0 0 18px rgba(255, 196, 0, 0.8);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 18px;
          align-items: center;
          padding-top: 72px;
        }

        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .mini-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 124px;
          padding: 18px 16px;
          border-radius: 18px;
          background: rgba(7, 18, 16, 0.84);
          border: 2px solid rgba(242, 201, 93, 0.9);
          box-shadow: 0 0 20px rgba(242, 201, 93, 0.16), inset 0 0 20px rgba(242, 201, 93, 0.12);
        }

        .mini-card.down .card-text strong,
        .mini-card.down .card-text span { color: #ff5b5b; }
        .mini-card.neutral .card-text strong,
        .mini-card.neutral .card-text span { color: #d4f0ff; }

        .card-icon {
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(14, 30, 18, 0.94);
          border: 1px solid rgba(157, 255, 120, 0.7);
          color: #7afee0;
          font-weight: 800;
          font-size: 22px;
          box-shadow: 0 0 12px rgba(120, 255, 170, 0.4);
        }

        .forecast .card-icon,
        .risk .card-icon,
        .liquidity .card-icon {
          border-color: rgba(242, 201, 93, 0.8);
          color: #f3d46e;
        }

        .card-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
          text-align: left;
        }

        .card-text span {
          font-size: 15px;
          font-weight: 900;
          letter-spacing: .04em;
          color: #bff8e5;
          text-transform: uppercase;
        }

        .card-text strong {
          font-size: clamp(20px, 2.2vw, 38px);
          line-height: 1;
          color: #d8ffe9;
        }

        .center-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .ai-panel {
          position: relative;
          width: min(100%, 480px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 38%, rgba(246, 204, 91, 0.18), rgba(0,0,0,0.85) 55%);
          border: 4px solid rgba(242, 201, 93, 0.95);
          box-shadow:
            0 0 28px rgba(242, 201, 93, 0.26),
            inset 0 0 25px rgba(242, 201, 93, 0.22),
            0 0 80px rgba(139, 255, 110, 0.12);
          overflow: hidden;
          display: grid;
          place-items: center;
        }

        .robot-head {
          position: absolute;
          top: 18%;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 120px;
          border-radius: 20px 20px 28px 28px;
          background: linear-gradient(180deg, rgba(232, 201, 92, 0.9), rgba(178, 126, 14, 0.9));
          border: 4px solid rgba(255, 220, 120, 0.9);
          box-shadow: inset 0 0 26px rgba(255,255,255,0.2);
        }

        .robot-head::before {
          content: "";
          position: absolute;
          inset: 12px 16px 22px;
          background: linear-gradient(180deg, rgba(245, 246, 235, 0.95), rgba(153, 188, 181, 0.6));
          border-radius: 50% 50% 38% 38%;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
        }

        .robot-head::after {
          content: "";
          position: absolute;
          width: 62px;
          height: 12px;
          left: 50%;
          top: 16px;
          transform: translateX(-50%);
          border-radius: 20px;
          background: rgba(18, 24, 20, 0.75);
        }

        .eye {
          position: absolute;
          top: 52px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0f0f0f;
          box-shadow: 0 0 10px rgba(0,0,0,0.6);
        }

        .eye-left { left: 28px; }
        .eye-right { right: 28px; }

        .head-antenna {
          position: absolute;
          left: 50%;
          top: -22px;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #d8b15a;
          box-shadow: 0 0 18px rgba(255, 206, 66, 0.8);
        }

        .head-antenna::before {
          content: "";
          position: absolute;
          width: 6px;
          height: 22px;
          left: 50%;
          transform: translateX(-50%);
          top: 10px;
          background: #d8b15a;
          border-radius: 10px;
        }

        .ai-word {
          position: relative;
          width: 78%;
          height: 78%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, rgba(81, 255, 129, 0.15), rgba(0,0,0,0.8) 60%);
          display: grid;
          place-items: center;
        }

        .ai-letter {
          position: relative;
          font-size: clamp(120px, 18vw, 240px);
          font-weight: 900;
          letter-spacing: -0.12em;
          color: #f6d163;
          text-shadow: 0 0 30px rgba(221, 196, 81, 0.9), 0 0 70px rgba(255, 207, 60, 0.7);
          transform: translateY(12px);
        }

        .arrow-arc {
          position: absolute;
          width: 230px;
          height: 175px;
          border: 8px solid rgba(255, 206, 93, 0.9);
          border-left-color: transparent;
          border-bottom-color: transparent;
          border-radius: 50%;
          transform: rotate(-24deg);
          right: 20px;
          bottom: 32px;
          box-shadow: 0 0 18px rgba(255,206,93,0.8);
        }

        .arrow-up {
          position: absolute;
          width: 100px;
          height: 100px;
          right: 55px;
          bottom: 72px;
          background: linear-gradient(135deg, rgba(68,255,124,0.9), rgba(57, 192, 106, 0.9));
          clip-path: polygon(48% 0%, 100% 0%, 100% 52%, 88% 52%, 88% 100%, 0% 100%, 0% 88%, 48% 88%);
          transform: rotate(45deg) skew(-12deg, -12deg);
          box-shadow: 0 0 28px rgba(101, 255, 130, 0.9);
        }

        .logo-block {
          text-align: center;
          margin-top: 8px;
        }

        .big-word {
          font-size: clamp(52px, 5vw, 110px);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: .05em;
          color: #f0c95f;
          text-shadow: 0 0 22px rgba(255, 190, 60, 0.9), 0 0 50px rgba(255, 190, 60, 0.7);
        }

        .sub-word {
          font-size: clamp(16px, 2vw, 46px);
          font-weight: 900;
          letter-spacing: .08em;
          color: #f0c95f;
          text-shadow: 0 0 20px rgba(255, 190, 60, 0.75);
        }

        .bottom-strip {
          display: grid;
          grid-template-columns: repeat(5, minmax(120px, 1fr));
          gap: 16px;
          margin-top: 18px;
          padding: 12px 18px;
          border-radius: 16px;
          border: 2px solid rgba(242, 201, 93, 0.82);
          background: rgba(10, 20, 15, 0.8);
          box-shadow: inset 0 0 20px rgba(242, 201, 93, 0.14);
        }

        .metric {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          color: #f5d477;
          font-size: 22px;
        }

        .metric strong { font-weight: 800; }
        .metric span { color: #7df9c1; }
        .clock { font-size: 28px; }
        .metric.green { color: #82ff8a; }
        .metric.red { color: #ff6b6b; }
        .metric.neutral { color: #d5fdf0; }
        .metric.volume { font-size: 20px; }

        .status-line {
          width: 100%;
          color: #90f5b4;
          font-size: clamp(18px, 2vw, 36px);
          text-align: center;
          letter-spacing: .12em;
          font-weight: 900;
          margin-top: 22px;
          text-transform: uppercase;
          text-shadow: 0 0 18px rgba(93, 255, 123, 0.6);
        }

        .gold-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .gold-tab {
          border: 2px solid rgba(242, 201, 93, 0.9);
          background: linear-gradient(180deg, #f9db7a 0%, #d4971c 50%, #825d00 100%);
          color: #170d00;
          font-weight: 900;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 15px rgba(242, 201, 93, 0.35);
        }

        .gold-tab.active {
          box-shadow: 0 0 20px rgba(255, 204, 80, 0.7), inset 0 0 18px rgba(255,255,255,0.3);
        }

        .gold-tab:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 980px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .left-column,
          .right-column {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .brand-panel {
            min-height: auto;
          }

          .bottom-strip {
            grid-template-columns: repeat(2, minmax(100px, 1fr));
          }
        }

        @media (max-width: 640px) {
          .landing-shell { padding: 20px 12px; }
          .top-badge { right: 16px; top: 18px; font-size: 14px; padding: 9px 14px; }
          .left-column,
          .right-column {
            grid-template-columns: 1fr;
          }
          .bottom-strip {
            grid-template-columns: 1fr 1fr;
          }
          .status-line { letter-spacing: .06em; }
          .panel-title { font-size: 22px; }
        }
      `}</style>
    </main>
  );
}
