
import { PROGRAMS } from "../lib/data";

export default function Programs() {
  return (
    <section className="section" id="programs">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">Programs</div>
          <h2 className="section-title">Industry-leading curricula</h2>
          <p className="section-sub">
            Co-created with domain experts, designed for working professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map(({ tag, title, desc, duration, format, skills }) => (
            <div
              key={title}
              className="rounded-2xl border border-(--border) bg-(--white) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-lg) flex flex-col"
              style={{ overflow: "hidden" }}
            >
              {/* Gradient Header — fixed size, never grows */}
              <div
                style={{
                  padding: "28px 28px 32px",
                  minHeight: "200px",
                  background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 14px",
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "14px",
                  }}
                >
                  {tag}
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>

              {/* White Body — grows to fill remaining space */}
              <div className="flex-1" style={{ padding: "24px 28px" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "13px", color: "var(--slate)" }}>⏱ {duration}</span>
                  <span style={{ fontSize: "13px", color: "var(--slate)" }}>📡 {format}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skills.map((sk) => (
                    <span
                      key={sk}
                      style={{
                        padding: "4px 14px",
                        background: "var(--accent-glow)",
                        color: "var(--accent)",
                        borderRadius: "100px",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}