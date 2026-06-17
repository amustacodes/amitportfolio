"use client";

import { motion } from "framer-motion";
import { ChevronUp, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative py-12 bg-dark-bg border-t border-white/5 overflow-hidden">
      {/* Decorative top gradient dividing bar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand */}
        <div className="flex items-center gap-2 font-display font-black text-base tracking-wider text-slate-400">
          <Terminal size={14} className="text-neon-cyan" />
          <span>AMIT NEUPANE</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-xs font-display uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-xs font-sans text-center md:text-right">
          &copy; {currentYear} &bull; All Rights Reserved. Crafted with Next.js &amp; Tailwind.
        </div>

      </div>

      {/* Floating back-to-top button */}
      <div className="absolute bottom-8 right-6 md:right-12 z-25">
        <motion.button
          onClick={handleBackToTop}
          className="p-3 rounded-xl glassmorphism border border-white/5 hover:border-neon-cyan/40 text-slate-400 hover:text-neon-cyan transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Back to top"
          whileHover={{ y: -3 }}
        >
          <ChevronUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
