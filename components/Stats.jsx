
const STAT_CONFIG = [
  { key: "companies", label: "Enterprise Clients" },
  { key: "learners",  label: "Learners Trained" },
  { key: "programs",  label: "Programs Offered" },
  { key: "npsScore",  label: "NPS Score" },
];

export default function Stats({ data }) {
  if (!data) return null;

  return (
    <section className="bg-(--white) py-16 px-6 border-b border-(--border) flex justify-center items-center">
      <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STAT_CONFIG.map(({ key, label }) => (
          <div key={key} className="stat-card fade-in text-center">
            <div className="font-['Syne'] text-[2.4rem] font-extrabold text-(--accent) mb-1">
              {data[key]}
            </div>
            <div className="text-sm text-(--slate)">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}