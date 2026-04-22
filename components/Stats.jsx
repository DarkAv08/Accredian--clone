
const STAT_CONFIG = [
  { key: "companies", label: "Enterprise Clients" },
  { key: "learners",  label: "Learners Trained" },
  { key: "programs",  label: "Programs Offered" },
  { key: "npsScore",  label: "NPS Score" },
];

export default function Stats({ data }) {
  if (!data) return null;

  return (
    <>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .stat-item {
          text-align: center;
          padding: 8px 0;
        }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 4px;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--slate);
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>
      <section style={{ background: "var(--white)", padding: "48px 24px", borderBottom: "1px solid var(--border)" }}>
        <div className="stats-grid">
          {STAT_CONFIG.map(({ key, label }) => (
            <div key={key} className="stat-item fade-in">
              <div className="stat-value">{data[key]}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
