import { SOLUTIONS } from "../lib/data";

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">Our Solutions</div>
          <h2 className="section-title">Everything your L&amp;D team needs</h2>
          <p className="section-sub">
            A complete enterprise learning ecosystem — from curriculum design to impact measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px 32px",
                border: "1px solid #ede9fe",
                boxShadow: "0 2px 12px rgba(79,70,229,0.06)",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(79,70,229,0.15)";
                e.currentTarget.style.borderColor = "#c4b5fd";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(79,70,229,0.06)";
                e.currentTarget.style.borderColor = "#ede9fe";
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, #6366f1, #7c3aed)`,
                opacity: i % 3 === 0 ? 1 : 0.4,
              }} />

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 20,
              }}>
                {icon}
              </div>

              {/* Number */}
              <div style={{
                position: "absolute", top: 28, right: 28,
                fontSize: 48, fontWeight: 800, lineHeight: 1,
                color: "rgba(99,102,241,0.07)",
                fontFamily: "'Syne', sans-serif",
                userSelect: "none",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 style={{
                fontSize: "1.1rem", fontWeight: 700,
                color: "#1e1b4b", marginBottom: 10,
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: "0.9rem", color: "#64748b",
                lineHeight: 1.75,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}