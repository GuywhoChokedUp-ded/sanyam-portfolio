import RevealSection from "@/components/RevealSection";

export default function About() {
  return (
    <RevealSection
      id="about"
      className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10"
    >
      <p className="section-label">About</p>
      <h2 className="section-title">A Practical Learning Approach</h2>
      <div className="section-divider" />
      <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 dark:text-zinc-300">
        <p>
          I am a BBA student focused on investment banking and financial analysis. I am building practical skills in valuation,
          financial modelling, and Excel.
        </p>
        <p>I learn by doing.</p>
        <p>I apply concepts through projects and content.</p>
        <p>I aim to become a strong analyst with real problem solving ability.</p>
      </div>
    </RevealSection>
  );
}
