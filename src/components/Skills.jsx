"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";

const groups = [
  {
    title: "Valuation & Analysis",
    items: [
      { name: "DCF Valuation", source: "Bajaj Auto and S&P 500 valuation reports" },
      { name: "Comparable Company Analysis", source: "Bajaj Auto valuation report" },
      { name: "Valuation Analysis", source: "Bajaj Auto and S&P 500 valuation reports" },
      { name: "WACC Calculation", source: "India Sector Wise WACC Study" },
      { name: "Sensitivity Analysis", source: "Bajaj Auto and S&P 500 valuation reports" },
      { name: "Relative Valuation", source: "Bajaj Auto valuation report" }
    ]
  },
  {
    title: "Financial Expertise",
    items: [
      { name: "Financial Modelling", source: "Bajaj Auto integrated financial model" },
      { name: "Financial Statement Analysis", source: "Advanced Financial Modelling and Valuation course" },
      { name: "Financial Forecasting", source: "Bajaj Auto integrated financial model" },
      { name: "Ratio Analysis", source: "CFA Level I preparation and valuation work" },
      { name: "Corporate Finance", source: "CFA Level I and valuation training" },
      { name: "Industry Research", source: "India Sector Wise WACC Study" }
    ]
  },
  {
    title: "Tools & Proficiency",
    items: [
      { name: "Microsoft Excel (Advanced)", source: "Bajaj Auto and WACC study models" },
      { name: "Financial Modelling in Excel", source: "Bajaj Auto integrated financial model" },
      { name: "PowerPoint", source: "Bajaj Auto and S&P 500 reports" },
      { name: "Business Analytics", source: "JPMorgan and Citi investment banking simulations" },
      { name: "Market Research", source: "Citi investment banking simulation" },
      { name: "Data Analysis", source: "India Sector Wise WACC Study" }
    ]
  }
];

function SkillCard({ skill }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <li
      className={`skill-flip-card${flipped ? " is-flipped" : ""}`}
      tabIndex="0"
      role="button"
      aria-expanded={flipped}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}
    >
      <span className="skill-flip-inner">
        <span className="skill-flip-face skill-flip-front">{skill.name}</span>
        <span className="skill-flip-face skill-flip-back">
          <span className="text-[0.65rem] uppercase tracking-[0.12em] text-accent dark:text-blue-300">Applied in</span>
          <span>{skill.source}</span>
        </span>
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <RevealSection as="div">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Capability Matrix</h2>
        <div className="section-divider" />
      </RevealSection>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {groups.map((group, index) => (
          <RevealSection key={group.title} as="div" delay={index * 0.07} className="h-full">
            <motion.div
              whileHover={{ y: -6, scale: 1.015, rotate: -0.25 }}
              transition={{ duration: 0.24 }}
              className="premium-card h-full rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="text-sm uppercase tracking-[0.15em] text-slate-600 dark:text-zinc-400">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-base text-slate-700 dark:text-zinc-200">
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </ul>
            </motion.div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
