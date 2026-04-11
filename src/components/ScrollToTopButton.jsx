"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        duration: 0.8,
        easing: (t) => 1 - Math.pow(1 - t, 3)
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Return to top"
      className={`fixed bottom-6 right-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/45 bg-white/65 text-slate-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/20 dark:bg-white/[0.08] dark:text-zinc-200 dark:hover:border-white/40 dark:hover:text-white ${
        show ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={17} />
    </button>
  );
}
