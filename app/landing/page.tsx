"use client";

import { useEffect, useMemo, useState } from "react";

const features = [
  { title: "سرعة فائقة", text: "تجربة انسيابية وسريعة على كل الأجهزة", icon: "⚡" },
  { title: "تصميم مستقبلي", text: "واجهة نيون 3D متكاملة وعصرية", icon: "✦" },
  { title: "متجاوبة بالكامل", text: "تعمل بسلاسة على الهاتف والكمبيوتر", icon: "◈" },
];

const stats = [
  { label: "ثواني", value: "24" },
  { label: "مستخدمين", value: "12K" },
  { label: "إصدارات", value: "99" },
];

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function LandingPage() {
  const targetDate = useMemo(
    () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 12 + 1000 * 60 * 60 * 5 + 1000 * 60 * 37),
    []
  );
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <main className="ultra-container">
      <div className="hud" aria-hidden="true" />
      <div className="ripple-layer" aria-hidden="true" />
      <div className="laser" aria-hidden="true" />
      <div className="warp-core" aria-hidden="true" />

      <section className="hero">
        <div className="badge">✦ HAWA ULTRA · تجارب مستقبلية</div>
        <h1>
          HAWA <span>ULTRA</span>
        </h1>
        <p>
          تجربة نيون 3D متكاملة، تصميم سريع، وواجهة مرنة تناسب كل الأجهزة.
        </p>

        <div className="countdown" aria-label="العد التنازلي">
          {[
            { label: "أيام", value: timeLeft.days },
            { label: "ساعات", value: timeLeft.hours },
            { label: "دقائق", value: timeLeft.minutes },
            { label: "ثواني", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="time-box">
              <span>{String(item.value).padStart(2, "0")}</span>
              <small>{item.label}</small>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a className="cta" href="#features">اكتشف التجربة <span aria-hidden="true">↗</span></a>
          <button className="ghost-btn" type="button">تجربة فورية</button>
        </div>
      </section>

      <section id="features" className="features" aria-label="مميزات الصفحة">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="stats" aria-label="إحصائيات">
        {stats.map((item) => (
          <div key={item.label} className="stat-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .ultra-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          padding: 48px 24px 56px;
          background: radial-gradient(circle at 50% 35%, #123b4a 0%, #06141f 42%, #02060d 100%);
          color: #e9ffff;
          font-family: Arial, sans-serif;
          text-align: center;
          perspective: 1500px;
          isolation: isolate;
        }

        .ultra-container::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image: linear-gradient(rgba(0,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,.08) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom, transparent, #000 25%, #000 75%, transparent);
          opacity: 0.5;
        }

        .hud,
        .ripple-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hud {
          z-index: -1;
          background: radial-gradient(circle at center, rgba(0,255,255,.18), transparent 62%);
        }

        .ripple-layer {
          z-index: 0;
          background: radial-gradient(circle at center, rgba(0,255,255,.12), transparent 34%);
          animation: ripplePulse 4s ease-in-out infinite alternate;
        }

        .laser {
          position: absolute;
          z-index: -2;
          width: min(72vw, 720px);
          aspect-ratio: 1;
          border: 2px solid rgba(0,255,255,.3);
          border-radius: 50%;
          box-shadow: 0 0 80px #00ffff;
          animation: spin 18s linear infinite;
        }

        .warp-core {
          position: absolute;
          z-index: -2;
          top: 50%;
          left: 50%;
          width: min(42vw, 420px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,255,.52), rgba(0,15,25,.06) 65%, transparent 70%);
          box-shadow: 0 0 100px rgba(0,255,255,.55), inset 0 0 80px #00ffff;
          transform: translate(-50%, -50%);
          animation: pulse 2.5s ease-in-out infinite;
        }

        .hero {
          position: relative;
          z-index: 1;
          max-width: 1000px;
        }

        .badge {
          display: inline-block;
          padding: 10px 18px;
          border: 1px solid rgba(0,255,255,.5);
          border-radius: 999px;
          background: rgba(0,30,45,.45);
          color: #7fffff;
          letter-spacing: 1px;
          font-size: 14px;
        }

        h1 {
          margin: 22px 0 14px;
          font-size: clamp(50px, 11vw, 120px);
          line-height: 0.95;
          letter-spacing: 0.06em;
          text-shadow: 0 0 25px #00ffff, 0 0 70px rgba(0,255,255,.7);
          animation: titlePulse 2.5s ease-in-out infinite;
        }

        h1 span {
          color: #00ffff;
        }

        .hero > p {
          max-width: 700px;
          margin: 0 auto;
          font-size: clamp(18px, 2.5vw, 28px);
          line-height: 1.7;
          color: #c5f4f7;
        }

        .countdown {
          display: grid;
          grid-template-columns: repeat(4, minmax(90px, 1fr));
          gap: 18px;
          width: min(100%, 580px);
          margin: 32px auto 0;
        }

        .time-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px 8px 12px;
          border: 1px solid rgba(0,255,255,.45);
          border-radius: 16px;
          background: rgba(2,22,32,.7);
          box-shadow: 0 0 25px rgba(0,255,255,.2);
          backdrop-filter: blur(10px);
        }

        .time-box span {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          color: #fff;
        }

        .time-box small {
          margin-top: 6px;
          color: #8ee8ef;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .cta-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .cta,
        .ghost-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 26px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .cta {
          background: #00ffff;
          color: #00151b;
          border: 2px solid #00ffff;
          box-shadow: 0 0 28px rgba(0,255,255,.7);
        }

        .ghost-btn {
          background: transparent;
          color: #dffcff;
          border: 2px solid rgba(0,255,255,.6);
          cursor: pointer;
        }

        .cta:hover,
        .ghost-btn:hover,
        .cta:focus-visible,
        .ghost-btn:focus-visible {
          transform: translateY(-3px);
        }

        .features {
          position: relative;
          z-index: 1;
          display: grid;
          width: min(100%, 980px);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          text-align: right;
        }

        .feature {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px;
          border: 1px solid rgba(0,255,255,.22);
          border-radius: 16px;
          background: rgba(2,22,32,.65);
          backdrop-filter: blur(10px);
        }

        .feature-icon {
          flex: 0 0 46px;
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          border: 1px solid #00ffff;
          box-shadow: 0 0 18px rgba(0,255,255,.45);
          color: #00ffff;
          font-size: 24px;
        }

        .feature h2 {
          margin: 4px 0 8px;
          font-size: 17px;
          color: #fff;
        }

        .feature p {
          margin: 0;
          color: #9bc7cc;
          font-size: 13px;
          line-height: 1.6;
        }

        .stats {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(80px, 1fr));
          gap: 18px;
          width: min(100%, 560px);
          margin-top: 10px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 8px;
          border: 1px solid rgba(0,255,255,.22);
          border-radius: 14px;
          background: rgba(0, 20, 30, 0.5);
        }

        .stat-item strong {
          font-size: clamp(24px, 4vw, 32px);
          color: #fff;
        }

        .stat-item span {
          font-size: 12px;
          color: #8ee8ef;
          letter-spacing: 0.08em;
        }

        @keyframes pulse {
          50% {
            box-shadow: 0 0 150px rgba(0,255,255,.8), inset 0 0 120px #00ffff;
          }
        }

        @keyframes titlePulse {
          50% {
            text-shadow: 0 0 45px #00ffff, 0 0 110px rgba(0,255,255,.85);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes ripplePulse {
          from { opacity: 0.5; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1.02); }
        }

        @media (max-width: 720px) {
          .ultra-container {
            padding: 32px 16px 48px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .countdown {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
          }

          .stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
