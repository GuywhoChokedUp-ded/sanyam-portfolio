import RevealSection from "@/components/RevealSection";

export default function About() {
  return (
    <RevealSection
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10"
    >
      <p className="section-label">About</p>
      <h2 className="section-title">Investment Banking & Valuation Focused Analyst</h2>
      <div className="section-divider" />
      <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 dark:text-zinc-300">
        <p>
          I&apos;m a final-year BBA student with a strong interest in valuation and investment banking. I bring hands-on experience in financial modelling, DCF analysis, comparable company analysis, and precedent transactions.
        </p>
        <p>
          My expertise includes financial analysis, valuation methodologies (DCF, multiples-based), WACC calculations, sensitivity analysis, and corporate finance fundamentals. I have completed the CFA Level I exam and am advancing my skills through applied financial modelling courses.
        </p>
        <p>
          I learn and apply concepts through real projects—building financial models, analyzing actual companies, and solving complex valuation problems. My goal is to develop deep expertise in investment banking and corporate finance analysis.
        </p>
      </div>
    </RevealSection>
  );
}
