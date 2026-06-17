"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Data Scientist with 5+ years of teaching experience, strong communication skills, creativity, analytical thinking, and a passion for transforming complex data into meaningful insights and impactful solutions.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 25); // Fast, readable writing speed

    return () => clearInterval(interval);
  }, []);

  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Immersive multi-color animated background lighting gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Neon Purple Orb */}
        <div className="absolute top-[10%] left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-tr from-neon-purple to-neon-violet blur-[80px] md:blur-[130px] opacity-25 animate-float-slow" />
        
        {/* Neon Cyan/Blue Orb */}
        <div className="absolute bottom-[10%] right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-tr from-neon-blue to-neon-cyan blur-[70px] md:blur-[120px] opacity-20 animate-float-medium" />
        
        {/* Neon Pink/Orange Accent Orb */}
        <div className="absolute top-[40%] right-[25%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-gradient-to-tr from-neon-pink to-neon-orange blur-[90px] md:blur-[140px] opacity-15 animate-float-fast" />
      </div>

      {/* Cybernetic grid network vector overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_75%)] bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small futuristic badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism text-xs text-neon-cyan tracking-widest uppercase font-display font-semibold mb-6 border-neon-cyan/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Database size={12} className="animate-pulse" />
          Quantum Predictive Analytics
        </motion.div>

        {/* Title Name with Apple-level Polish */}
        <motion.h1
          className="font-display font-black text-5xl md:text-8xl tracking-tighter leading-none mb-4 text-white relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Amit Neupane
        </motion.h1>

        {/* Dynamic Title Subheading */}
        <motion.h2
          className="font-display font-bold text-xl md:text-3xl tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple shadow-sm">
            Data Scientist
          </span>
        </motion.h2>

        {/* Animated Subtitle Box */}
        <div className="max-w-3xl mx-auto min-h-[96px] md:min-h-[72px] mb-12">
          <p className="text-slate-300 font-sans font-light text-sm md:text-lg leading-relaxed tracking-wide typewriter-cursor">
            {typedText}
          </p>
        </div>

        {/* Navigation CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Explore Projects Button */}
          <button
            onClick={(e) => handleCTA(e, "#portfolio")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 group px-8 py-4 rounded-xl font-display text-xs uppercase font-bold tracking-widest text-dark-bg bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-blue hover:to-neon-pink transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] cursor-pointer active:scale-95"
          >
            Explore Projects
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Contact Button */}
          <button
            onClick={(e) => handleCTA(e, "#contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 group px-8 py-4 rounded-xl font-display text-xs uppercase font-bold tracking-widest text-dark-bg bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:from-neon-blue hover:to-neon-pink transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] cursor-pointer active:scale-95"
          >
            Hire Me
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
