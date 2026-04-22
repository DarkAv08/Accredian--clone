
import { HOW_STEPS } from "../lib/data";

export default function HowItWorks() {
  return (
    <section className="section bg-(--surface)" id="process">
      <div className="section-inner">
        <div className="section-header center">
          <div className="section-badge">Our Process</div>
          <h2 className="section-title">From assessment to impact in 4 steps</h2>
          <p className="section-sub">
            A proven methodology refined across 500+ enterprise engagements.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="relative grid grid-cols-4 gap-0">
            <div
              className="hidden lg:block absolute z-0 h-0.5"
              style={{
                top: "36px",
                left: "0",
                right: "0",
                background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
              }}
            />

            {HOW_STEPS.map(({ n, title, desc }) => (
              <div key={n} className="fade-in relative z-1 text-center px-4">
                {/* Circle */}
                <div
                  className="w-18 h-18 rounded-full text-white font-['Syne'] font-extrabold text-[1.2rem] flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                    boxShadow: "0 4px 20px rgba(79,70,229,0.4)",
                  }}
                >
                  {n}
                </div>
                <h4 className="text-[1rem] font-bold text-(--ink) mb-2">{title}</h4>
                <p className="text-[0.875rem] text-(--slate) leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}