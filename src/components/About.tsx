"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Award, Users, Lightbulb } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <BookOpen className="text-neon-cyan" size={20} />,
      title: "5+ Years Teaching",
      desc: "Educating future computer scientists and data professionals."
    },
    {
      icon: <Award className="text-neon-pink" size={20} />,
      title: "Analytical Excellence",
      desc: "Transforming complex, unstructured data into commercial value."
    },
    {
      icon: <Users className="text-neon-purple" size={20} />,
      title: "Mentorship & Leadership",
      desc: "Guiding research teams and engineering students to success."
    },
    {
      icon: <Lightbulb className="text-neon-orange" size={20} />,
      title: "Creative Problem Solving",
      desc: "Formulating novel architectures to address legacy analytics bottlenecks."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#030014]/50 overflow-hidden">
      {/* Glow Backlight */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Amit</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-3 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              className="relative w-[300px] h-[380px] md:w-[350px] md:h-[450px] group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Spinning gradient background border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-pink rounded-2xl blur-sm opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 animate-gradient-shift" />
              
              {/* Secondary deep glowing shadow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-cyan blur-[25px] opacity-40 group-hover:opacity-60 transition-all duration-500" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-dark-bg">
                <Image
                  src="/amit-portrait.jpg"
                  alt="Amit Neupane - Data Scientist"
                  fill
                  sizes="(max-width: 768px) 300px, 350px"
                  className="object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Tech scanline aesthetic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_95%,rgba(0,242,254,0.05)_95%)] bg-[size:100%_12px] pointer-events-none" />
                
                {/* Overlay gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative and Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-slate-100 mb-6 tracking-wide">
                Bridging Academic Inquiry and Predictive Data Modeling
              </h3>
              
              <p className="text-slate-300 font-sans font-light text-base leading-relaxed mb-6">
                Amit Neupane is a multi-disciplinary Data Scientist and professional educator. With over 
                five years of teaching experience under his belt, he possesses the rare capability to both 
                formulate high-level mathematical solutions and communicate them clearly to business stakeholders, 
                engineers, and researchers.
              </p>
              
              <p className="text-slate-300 font-sans font-light text-base leading-relaxed mb-10">
                His scientific methodology leverages modern statistical learning, advanced research frameworks, 
                and predictive deep neural nets. Amit blends creativity with analytical rigor to untangle chaotic, 
                high-volume datasets, turning raw digital noise into impactful, structured decisions.
              </p>
            </motion.div>

            {/* Core Competencies Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, idx) => (
                <motion.div
                  key={h.title}
                  className="flex gap-4 p-4 rounded-xl glassmorphism hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-100 mb-1 group-hover:text-neon-cyan transition-colors">
                      {h.title}
                    </h4>
                    <p className="text-slate-400 font-sans font-light text-xs leading-normal">
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
