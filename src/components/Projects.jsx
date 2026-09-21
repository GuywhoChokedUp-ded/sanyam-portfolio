"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";

const projects = [
  {
    title: "Bajaj Auto Ltd. – Financial Modelling and Valuation",
    description:
      "Built an integrated financial model covering historical financials, operating forecasts, FCFF, WACC, and DCF valuation. Applied comparable company analysis using EV/EBITDA, EV/Revenue, and P/E multiples. Tested valuation sensitivity across WACC, terminal growth, and operating assumptions.",
    link: "https://docs.google.com/presentation/d/1zHOfAZGkuLQJcrdfcIt28CBt7BW4P1ef/edit?usp=drivesdk&ouid=113375287022088696930&rtpof=true&sd=true"
  },
  {
    title: "S&P500 Index Valuation – DCF Analysis",
    description:
      "Developed a DCF valuation model for the S&P 500 index incorporating EPS growth, dividends, buybacks, and market conditions. Estimated intrinsic index value and analyzed sensitivity to key assumptions. Synthesized findings into a structured investment report.",
    link: "https://docs.google.com/presentation/d/1dA23J8X1OAI_cqjMjF-Xz4_nBOAsdQO9/edit?usp=drivesdk&ouid=113375287022088696930&rtpof=true&sd=true"
  },
  {
    title: "India Sector Wise WACC Study",
    description:
      "Conducted WACC analysis across 28 Indian sectors covering 280 listed companies using multiple beta methodologies. Estimated cost of equity, cost of debt, and capital structure using CAPM and synthetic ratings. Ranked sectors by cost of capital and analyzed WACC sensitivities.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <RevealSection as="div">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <div className="section-divider" />
      </RevealSection>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <RevealSection key={project.title} as="div" delay={index * 0.08}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                whileHover={{ scale: 1.018, y: -6, rotate: -0.2 }}
                transition={{ duration: 0.25 }}
                className="premium-card rounded-2xl p-7 transition-all duration-300"
              >
                <h3 className="font-display text-3xl leading-tight text-text-light dark:text-zinc-100">{project.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-zinc-300">{project.description}</p>
              </motion.div>
            </a>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
