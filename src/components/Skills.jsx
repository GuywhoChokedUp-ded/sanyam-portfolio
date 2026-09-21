"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";

const groups = [
  {
    title: "Valuation & Analysis",
    items: [
      "DCF Valuation",
      "Comparable Company Analysis",
      "Valuation Analysis",
      "WACC Calculation",
      "Sensitivity Analysis",
      "Relative Valuation"
    ]
  },
  {
    title: "Financial Expertise",
    items: [
      "Financial Modelling",
      "Financial Statement Analysis",
      "Financial Forecasting",
      "Ratio Analysis",
      "Corporate Finance",
      "Industry Research"
    ]
  },
  {
    title: "Tools & Proficiency",
    items: [
      "Microsoft Excel (Advanced)",
      "Financial Modelling in Excel",
      "PowerPoint",
      "Business Analytics",
      "Market Research",
      "Data Analysis"
    ]
  }
];

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
                  <li key={skill} className="rounded-md border border-slate-400/30 bg-white/55 px-3 py-2 transition-colors duration-300 hover:border-accent/45 dark:border-white/8 dark:bg-white/[0.02] dark:hover:border-white/20">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
