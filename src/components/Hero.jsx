"use client";

import { motion } from "framer-motion";

const introVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 pb-14 pt-14 md:grid-cols-2 md:gap-10 md:px-10 md:pb-20 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-accent/15 blur-3xl dark:bg-accent/25" />
        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/20" />
      </div>

      <div className="space-y-6">
        <motion.h1
          custom={0.2}
          initial="hidden"
          animate="show"
          variants={introVariants}
          className="font-display max-w-xl text-[2.2rem] leading-[1.06] text-text-light dark:text-zinc-100 sm:text-5xl md:text-6xl"
        >
          Finance student building real skills, not just theory.
        </motion.h1>

        <motion.p
          custom={0.35}
          initial="hidden"
          animate="show"
          variants={introVariants}
          className="max-w-xl text-[0.98rem] leading-relaxed text-slate-700 dark:text-zinc-300 sm:text-base"
        >
          BBA student with hands-on experience in DCF, comparable company analysis, and valuation. CFA Level I cleared. Specializing in financial modelling and investment banking analysis.
        </motion.p>

        <motion.div
          custom={0.5}
          initial="hidden"
          animate="show"
          variants={introVariants}
          className="flex flex-wrap gap-3"
        >
          <a
            href="https://drive.google.com/file/d/1AGGhRrPx0PkH7kW7qexMP4k0aC7m5OSZ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center sm:w-auto"
          >
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="premium-card rounded-2xl p-7"
      >
        <p className="font-display text-sm uppercase tracking-[0.17em] text-slate-500 dark:text-zinc-500">Current Focus</p>
        <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 dark:text-zinc-200">
          <li>Valuation frameworks and practical modeling discipline</li>
          <li>Building analyst-grade communication through finance content</li>
          <li>Doing McKinsey Forward Program</li>
          <li>Sharpening structured thinking for high-pressure deal work</li>
        </ul>
      </motion.div>
    </section>
  );
}
