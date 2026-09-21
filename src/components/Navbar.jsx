"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  {
    label: "Certificates",
    href: "https://drive.google.com/drive/folders/1YolCDGPCD6RPEnhQ_h1TnnuWrP7QuQVu",
    external: true
  },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-700/20 bg-[#f4f2ee]/78 backdrop-blur-xl dark:border-white/10 dark:bg-[#111722]/72"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-xl tracking-[0.02em] text-text-light dark:text-zinc-100">
          Sanyam Kalra
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4 text-xs tracking-wide text-slate-700 sm:gap-5 sm:text-sm md:gap-6 dark:text-zinc-300">
            {navLinks.map((item, index) => (
              <li key={item.label} className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {index > 0 ? <span className="h-4 w-px bg-slate-400/45 dark:bg-white/20" aria-hidden="true" /> : null}
                <a
                  className="transition hover:text-accent dark:hover:text-white"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/40 text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/40 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/40 text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/40 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/40 text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/40 dark:hover:text-white"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-slate-400/30 px-6 pb-4 pt-3 dark:border-white/10 md:hidden">
          <ul className="space-y-2 text-sm tracking-wide text-slate-700 dark:text-zinc-200">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="block rounded-md px-2 py-2 transition hover:bg-slate-900/5 hover:text-accent dark:hover:bg-white/5 dark:hover:text-white"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
