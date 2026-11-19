import { Linkedin, Mail } from "lucide-react";
import { links } from "@/config/links";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-8 pt-10 md:px-10">
      <div className="flex flex-col gap-5 border-t border-slate-400/35 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <p className="font-display text-base tracking-[0.01em] text-text-light dark:text-zinc-200">Sanyam Kalra</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-zinc-400">
          <a href={links.email} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-accent dark:hover:text-blue-300">
            <Mail size={15} /> Email
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-accent dark:hover:text-blue-300">
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
