import RevealSection from "@/components/RevealSection";

const nowItems = [
  "Preparing for CFA Level 2 Exam",
  "Completing Advanced Valuation and Modelling Course",
  "Upskilling Myself by Participating in Various Simulations, Certifications"
];

export default function NowSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <RevealSection as="div">
        <p className="section-label">Now</p>
        <h2 className="section-title">What I&apos;m Doing Now</h2>
        <div className="section-divider" />
      </RevealSection>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {nowItems.map((item, index) => (
          <RevealSection
            key={item}
            as="article"
            delay={index * 0.08}
            className="premium-card rounded-xl p-5 text-base text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:rotate-[-0.15deg] dark:text-zinc-200"
          >
            {item}
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
