"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Good service building website for my cafee also ineventory management for my caffee also developing pos and saas software",
    name: "Dipendra Shakya",
    role: "Founder",
    org: "Cafee",
    image: "/dipendra.jpg"
  },
  {
    quote: "His teaching methodology and communication skills have helped many students succeed.",
    name: "Michael Anderson",
    role: "Academic Coordinator",
    org: "Metro Tech University"
  },
  {
    quote: "A highly creative and detail-oriented professional who consistently delivers outstanding results.",
    name: "David Wilson",
    role: "Project Manager",
    org: "NextGen Software Group"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#030014]/50 overflow-hidden">
      {/* Background neon orbs */}
      <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[95px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-neon-purple/5 blur-[95px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Endorsements</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple mt-3 mx-auto rounded-full" />
        </div>

        {/* 3-Column Cubic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl glassmorphism border border-white/10 relative flex flex-col justify-between group hover:bg-white/5 hover:border-white/15 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(157,78,221,0.12)]"
            >
              {/* Quote Details */}
              <div>
                {/* Quotation Icon */}
                <div className="mb-6 p-2.5 w-fit rounded-full bg-white/5 border border-white/5 relative">
                  <Quote size={20} className="text-neon-cyan/70" />
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-md rounded-full -z-10 pointer-events-none" />
                </div>

                {/* Narrative Quote */}
                <p className="text-sm text-slate-300 font-sans font-light italic leading-relaxed tracking-wide mb-8">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
                {/* Glowing Profile Photo or Initial Icon */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-neon-cyan/40 shadow-[0_0_10px_rgba(0,242,254,0.15)] bg-[#0c0a25] flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-display font-extrabold text-sm">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-xs tracking-wider text-white uppercase group-hover:text-neon-cyan transition-colors">
                    {item.name}
                  </h4>
                  <h5 className="font-sans text-[11px] text-slate-400 mt-0.5">
                    {item.role} &bull; <span className="text-neon-purple font-medium uppercase font-display text-[9px] tracking-widest">{item.org}</span>
                  </h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
