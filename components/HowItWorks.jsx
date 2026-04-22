
import { HOW_STEPS } from "../lib/data";

export default function HowItWorks() {
  return (
    <>
      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .steps-connector {
          display: block;
          position: absolute;
          top: 36px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent-light));
          z-index: 0;
        }
        .step-item {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0 16px;
        }
        .step-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #7c3aed);
          box-shadow: 0 4px 20px rgba(79,70,229,0.4);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .step-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.875rem;
          color: var(--slate);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px 24px;
          }
          .steps-connector { display: none; }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .step-item {
            display: flex;
            align-items: flex-start;
            text-align: left;
            gap: 16px;
            padding: 0;
          }
          .step-circle {
            margin: 0;
            flex-shrink: 0;
            width: 56px;
            height: 56px;
            font-size: 1rem;
          }
          .step-content { flex: 1; }
        }
      `}</style>
      <section className="section bg-(--surface)" id="process">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-badge">Our Process</div>
            <h2 className="section-title">From assessment to impact in 4 steps</h2>
            <p className="section-sub">
              A proven methodology refined across 500+ enterprise engagements.
            </p>
          </div>

          <div className="steps-grid">
            <div className="steps-connector" />
            {HOW_STEPS.map(({ n, title, desc }) => (
              <div key={n} className="step-item fade-in">
                <div className="step-circle">{n}</div>
                <div className="step-content">
                  <h4 className="step-title">{title}</h4>
                  <p className="step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
