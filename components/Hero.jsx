"use client";

import { TRUSTED_LOGOS } from "../lib/data";

export default function Hero({ onCTAClick }) {
  const scrollToPrograms = () =>
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0f1e 0%, #1e1b4b 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(79,70,229,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,70,229,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)",
        top: -100, right: -100, pointerEvents: "none",
      }} />

      {/* Blob 2 */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
        bottom: -50, left: 100, pointerEvents: "none",
      }} />

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 48px",
        }}>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 100,
            background: "rgba(79,70,229,0.2)",
            border: "1px solid rgba(129,140,248,0.3)",
            color: "var(--accent-light)",
            fontSize: 13, fontWeight: 500, marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#34d399", flexShrink: 0,
              animation: "heroPulse 2s infinite",
              display: "inline-block",
            }} />
            Trusted by 500+ Enterprise Companies
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.1, marginBottom: 20, maxWidth: 700,
          }}>
            Future-Ready Talent,<br />
            <span style={{ color: "var(--accent-light)" }}>Engineered for Scale</span>
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 540, lineHeight: 1.7,
            marginBottom: 36, fontWeight: 300,
          }}>
            Accredian Enterprise delivers outcome-driven upskilling programs designed for your
            workforce. From Data Science to Gen AI — we build skills that move the needle.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={onCTAClick}>
              Schedule a Demo
            </button>
            <button className="btn-outline" onClick={scrollToPrograms}>
              Explore Programs →
            </button>
          </div>

          <div style={{ marginTop: 64 }}>
            <p style={{
              color: "rgba(255,255,255,0.4)", fontSize: 12,
              textTransform: "uppercase", letterSpacing: 2, marginBottom: 20,
            }}>
              Teams from leading companies train with us
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
              {TRUSTED_LOGOS.slice(0, 6).map(name => (
                <div key={name} style={{
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13, fontWeight: 600,
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.5px",
                }}>
                  {name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}