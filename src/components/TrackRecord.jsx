import RevealSection from "@/components/RevealSection";

const items = [
  {
    title: "Financial Modelling and Valuation",
    date: "Ongoing",
    detail: "Applying valuation logic and model structuring through practical exercises."
  },
  {
    title: "CFA Level I Passed",
    date: "March 2026",
    detail: "Validated core understanding of ethics, quantitative methods, and financial reporting."
  },
  {
    title: "JPMorgan Chase Virtual Simulation",
    date: "Forage",
    detail: "Practiced investment banking-style analytical thinking in simulated workflows."
  },
  {
    title: "Goldman Sachs Excel Skills for Business",
    date: "Forage",
    detail: "Improved spreadsheet fluency and precision for business-focused analysis tasks."
  },
  {
    title: "Financial Literacy Course for Bharat",
    date: "NISM",
    detail: "Strengthened core personal finance and market-awareness foundations through structured coursework."
  },
  {
    title: "BBA at DAV College Kurukshetra University",
    date: "2024-2027",
    detail: "Built an academic base in finance, accounting, and business decision-making."
  }
];

export default function TrackRecord() {
  return (
    <section id="journey" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <RevealSection as="div" className="mb-10">
        <p className="section-label">Track Record</p>
        <h2 className="section-title">Learning Timeline</h2>
        <div className="section-divider" />
      </RevealSection>

      <div className="relative pl-10 before:absolute before:bottom-7 before:left-4 before:top-7 before:w-px before:bg-slate-400/70 dark:before:bg-zinc-700/70">
        {items.map((item, index) => (
          <RevealSection key={item.title} as="article" delay={index * 0.08} className="premium-card relative mb-7 rounded-xl p-5 last:mb-0 sm:p-6">
            <span className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-accent ring-4 ring-surface-light dark:ring-surface-dark" />
            <p className="text-xs uppercase tracking-[0.15em] text-slate-600 dark:text-zinc-500">{item.date}</p>
            <h3 className="font-display mt-1 text-2xl leading-tight text-text-light dark:text-zinc-100">{item.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-700 dark:text-zinc-300">{item.detail}</p>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
