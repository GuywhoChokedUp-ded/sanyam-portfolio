"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { links } from "@/config/links";

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
        <motion.p
          custom={0.1}
          initial="hidden"
          animate="show"
          variants={introVariants}
          className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-zinc-400"
        >
          Investment Banking Enthusiast | CFA Level I Cleared
        </motion.p>

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
          id="contact-actions"
          custom={0.5}
          initial="hidden"
          animate="show"
          variants={introVariants}
          className="scroll-mt-24 flex flex-wrap gap-3"
        >
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center sm:w-auto"
          >
            Resume
          </a>
          <a
            href={links.email}
            className="btn-secondary border-slate-400/50 text-text-light hover:border-accent hover:text-accent active:scale-[0.97] dark:border-white/15 dark:text-zinc-200 dark:hover:border-blue-300 dark:hover:text-blue-300"
          >
            <Mail size={16} className="mr-2" />
            Email
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-slate-400/50 text-text-light hover:border-accent hover:text-accent active:scale-[0.97] dark:border-white/15 dark:text-zinc-200 dark:hover:border-blue-300 dark:hover:text-blue-300"
          >
            <Linkedin size={16} className="mr-2" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
