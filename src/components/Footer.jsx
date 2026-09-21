import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-6xl px-6 pb-8 pt-10 md:px-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-400/35 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center dark:border-white/10 dark:text-zinc-400">
        <p className="font-display text-base tracking-[0.01em] text-text-light dark:text-zinc-200">Sanyam Kalra</p>
        <div className="flex items-center gap-5">
          <a href="https://linkedin.com/in/kalrasanyam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-text-light dark:hover:text-zinc-100">
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:work.sanyamm@gmail.com" className="inline-flex items-center gap-2 transition hover:text-text-light dark:hover:text-zinc-100">
            <Mail size={15} />
            <span>work.sanyamm@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
