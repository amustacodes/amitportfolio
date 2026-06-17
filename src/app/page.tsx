"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";

// Core animations and layers
import LoadingScreen from "@/components/LoadingScreen";
import MouseGlow from "@/components/MouseGlow";
import ParticleBg from "@/components/ParticleBg";

// Content sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* 1. Introductory Loading Screen Sequence */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen flex flex-col bg-dark-bg selection:bg-neon-purple/40">
          {/* 2. Top-aligned Scroll Progress Indicator Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink z-50 origin-left shadow-[0_0_10px_#00f2fe]"
            style={{ scaleX: scrollYProgress }}
          />

          {/* 3. Global Interactive Visual Enhancements */}
          <MouseGlow />
          <ParticleBg />

          {/* 4. Navigation Header */}
          <Navbar />

          {/* 5. Content Layout Sections */}
          <main className="flex-1 w-full relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>

          {/* 6. Footer Content */}
          <Footer />
        </div>
      )}
    </>
  );
}
