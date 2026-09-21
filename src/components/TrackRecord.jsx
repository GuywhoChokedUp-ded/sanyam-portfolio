import RevealSection from "@/components/RevealSection";

const items = [
  {
    title: "Advance Financial Modelling and Valuation – The Valuation School",
    date: "2026 (Ongoing)",
    detail: "Advanced training in financial statement analysis, forecasting, DCF valuation, comparable company analysis, and WACC. Building practical proficiency in sensitivity analysis, capital structure, cost of equity, and cost of debt."
  },
  {
    title: "CFA Level I Passed",
    date: "March 26, Karnal",
    detail: "Cleared CFA Level I with focus on applying financial analysis and valuation techniques to real-world companies and transactions."
  },
  {
    title: "JPMorgan Chase - Investment Banking Job Simulation",
    date: "August 26",
    detail: "Screened M&A targets across strategic, financial, and structural criteria. Built company profiles using Excel with key financials, valuation, and shareholder information."
  },
  {
    title: "Citi - Investment Banking Job Simulation",
    date: "July 26",
    detail: "Analyzed market, competitive, and customer data to evaluate strategic opportunities. Evaluated M&A targets through company analysis, financial forecasting, and valuation."
  },
  {
    title: "McKinsey Forward Program",
    date: "June 26",
    detail: "Completed comprehensive program focused on business problem-solving, strategic thinking, and management consulting frameworks. Applied case study analysis and data-driven decision making."
  },
  {
    title: "BCG Strategy Consulting Job Simulation",
    date: "June 26",
    detail: "Applied structured problem-solving and stakeholder analysis to assess strategic trade-offs and develop actionable recommendations based on market analysis."
  },
  {
    title: "BBA at DAV College - Kurukshetra University",
    date: "2024-2027",
    detail: "Building comprehensive foundation in Financial Accounting, Business Statistics, Managerial Economics, Capital Markets, and Business Research Methods. SGPA: 7.29"
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
