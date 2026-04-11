"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";

const projects = [
  {
    title: "The Finance Nerd",
    description:
      "Built a finance content page to simplify markets and investing. Break down complex topics into simple insights.",
    link: "https://www.instagram.com/thefinance.nerd?igsh=d2x2OGlncTBzMHhu"
  },
  {
    title: "Anime Editzz",
    description:
      "Built a content channel with 100,000+ views and 400+ subscribers using SEO and content strategy.",
    link: "https://www.youtube.com/@animeeditzz_official"
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

      <div className="mt-10 grid gap-5 md:grid-cols-2">
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
