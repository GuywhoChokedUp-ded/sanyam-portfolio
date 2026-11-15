"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="pointer-glow" aria-hidden="true" />;
}
