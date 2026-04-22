export default function Testimonials({ data }) {
  if (!data) {
    return (
      <section className="section bg-(--surface)" id="testimonials">
        <div className="section-inner text-center text-(--slate)">
          Loading testimonials…
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-(--surface)" id="testimonials">
      <div className="section-inner">
        <div className="section-header center">
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">Trusted by L&amp;D leaders</h2>
          <p className="section-sub">
            Hear from the people building future-ready teams with Accredian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map(({ id, name, role, text, avatar }, i) => (
            <div
              key={id}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px 32px 32px",
                border: "1px solid #ede9fe",
                boxShadow: "0 2px 16px rgba(79,70,229,0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(79,70,229,0.13)";
                e.currentTarget.style.borderColor = "#c4b5fd";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(79,70,229,0.06)";
                e.currentTarget.style.borderColor = "#ede9fe";
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #6366f1, #7c3aed)",
                opacity: i === 1 ? 1 : 0.35,
              }} />

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, si) => (
                  <span key={si} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>
                ))}
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: 1.8,
                fontStyle: "italic",
                flex: 1,
                marginBottom: 28,
              }}>
                "{text}"
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: "#f3f4f6", marginBottom: 20 }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  color: "#fff", display: "flex", alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13,
                  flexShrink: 0, boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
                }}>
                  {avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1e1b4b" }}>
                    {name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                    {role}
                  </div>
                </div>

                {/* Large faded quote mark */}
                <div style={{
                  marginLeft: "auto",
                  fontSize: 64, lineHeight: 1,
                  color: "rgba(99,102,241,0.08)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  userSelect: "none",
                }}>
                  "
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}