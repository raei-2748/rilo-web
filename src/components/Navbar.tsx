"use client";

import { useEffect, useState } from "react";
import { trackNavbarCtaClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    trackNavbarCtaClick(window.scrollY);
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
      <div
        className={[
          "mx-auto max-w-[1200px] w-full flex items-center justify-between",
          "px-8 py-4 rounded-full pointer-events-auto",
          "border border-black/5 backdrop-blur-md",
          "transition-all duration-700 ease-smooth",
          scrolled
            ? "bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] scale-[0.97]"
            : "bg-white/40 shadow-none",
        ].join(" ")}
      >
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="text-sm font-black tracking-[0.3em] text-black">
            RILO®
          </span>
        </a>

        <div className="flex items-center gap-8">
          <button
            onClick={handleCtaClick}
            className="bg-black text-white font-bold text-[10px] tracking-widest px-8 py-3 rounded-full hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </nav>
  );
}

