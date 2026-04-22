// lib/data.js
// All static content constants — easy to edit or swap with a CMS later.

export const SOLUTIONS = [
  {
    icon: "🎓",
    title: "Custom Learning Paths",
    desc: "Tailor-made curricula aligned to your org's goals, roles, and tech stack. From entry-level to executive programs.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Real-time dashboards tracking learner progress, engagement scores, skill acquisition, and business impact.",
  },
  {
    icon: "🤝",
    title: "Cohort-Based Learning",
    desc: "Peer-to-peer learning communities that drive accountability, discussion, and knowledge retention.",
  },
  {
    icon: "🏆",
    title: "Industry Certifications",
    desc: "Globally recognized credentials in AI, Data Science, Product Management, and more.",
  },
  {
    icon: "🔌",
    title: "LMS Integration",
    desc: "Seamless integration with your existing HR tech stack — Workday, SAP SuccessFactors, and more.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    desc: "Dedicated mentors from top tech companies providing personalized feedback and career guidance.",
  },
];

export const HOW_STEPS = [
  { n: "01", title: "Needs Assessment", desc: "We analyze your workforce skill gaps and business objectives." },
  { n: "02", title: "Program Design",   desc: "Custom curriculum built with your L&D team and our experts." },
  { n: "03", title: "Cohort Launch",    desc: "Blended learning delivery with live sessions and self-paced content." },
  { n: "04", title: "Impact Measurement", desc: "Track ROI with real-time dashboards and quarterly reviews." },
];

export const PROGRAMS = [
  {
    tag: "Most Popular",
    title: "Data Science & AI",
    desc: "End-to-end program from fundamentals to advanced ML",
    duration: "6 Months",
    format: "Live + Async",
    skills: ["Python", "ML", "Deep Learning", "MLOps"],
  },
  {
    tag: "New",
    title: "Product Management",
    desc: "Build PMs who think in outcomes, not outputs",
    duration: "4 Months",
    format: "Cohort-Based",
    skills: ["Strategy", "Analytics", "UX", "Roadmapping"],
  },
  {
    tag: "High Demand",
    title: "Generative AI",
    desc: "LLMs, prompt engineering, and AI product development",
    duration: "3 Months",
    format: "Live Sessions",
    skills: ["LLMs", "RAG", "LangChain", "GenAI Apps"],
  },
];

export const TRUSTED_LOGOS = [
  "Google", "Amazon", "Microsoft", "Deloitte", "Accenture", "Wipro", "HCL", "Cognizant",
];

export const FOOTER_LINKS = {
  Programs:   ["Data Science", "Machine Learning", "Generative AI", "Product Management", "Business Analytics"],
  Company:    ["About Us", "Careers", "Blog", "Press", "Contact"],
  Enterprise: ["Case Studies", "Solutions", "Integrations", "Pricing", "Security"],
};

export const PERKS = [
  "Free needs assessment consultation",
  "Custom program design in 7 days",
  "Dedicated Customer Success Manager",
  "Flexible billing: annual or per-cohort",
];
