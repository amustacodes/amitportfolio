"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, BarChart, Award } from "lucide-react";

interface TimelineItem {
  year: string;
  role: string;
  org: string;
  desc: string[];
  icon: React.ReactNode;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 - Present",
    role: "Lead Data Scientist & Mentor",
    org: "Tech Analytics Solutions",
    desc: [
      "Mentoring 50+ aspiring data professionals, teaching predictive modeling, NLP, and machine learning pipelines.",
      "Architecting commercial ML recommendation engines, increasing conversion rates by 18%.",
      "Translating complex high-dimensional statistics into actionable strategies for c-suite stakeholders."
    ],
    icon: <Award className="text-neon-cyan" size={20} />,
    color: "#00f2fe"
  },
  {
    year: "2021 - 2023",
    role: "Computer Science & DS Educator",
    org: "Academy of Mathematical Sciences",
    desc: [
      "Instructed over 400+ students in Advanced Python, SQL Databases, and Applied Probability.",
      "Developed a custom data science curriculum, bridging practical coding with core statistical theory.",
      "Supervised capstone ML projects focusing on computer vision and neural networks."
    ],
    icon: <GraduationCap className="text-neon-purple" size={20} />,
    color: "#9d4edd"
  },
  {
    year: "2019 - 2021",
    role: "Data Researcher & Academic Coordinator",
    org: "Institute of Computational Research",
    desc: [
      "Coauthored 3 research papers examining computational analytics and deep regression models.",
      "Coordinated department schedules, course assessments, and mentored junior teaching assistants.",
      "Leveraged Python and SQL to analyze academic metrics, leading to a 15% curriculum efficacy improvement."
    ],
    icon: <Briefcase className="text-neon-pink" size={20} />,
    color: "#ff007f"
  },
  {
    year: "2018 - 2019",
    role: "Junior Data Analyst & Python Developer",
    org: "Quantitative Solutions Group",
    desc: [
      "Maintained data warehouses and designed clean, automated ETL pipelines using Python and SQL.",
      "Generated interactive visualization dashboards (Seaborn, PowerBI) for weekly client reports.",
      "Applied statistical hypothesis testing to optimize operational database query speeds."
    ],
    icon: <BarChart className="text-neon-orange" size={20} />,
    color: "#ff9e00"
  }
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 ${
      isEven ? "md:flex-row-reverse" : ""
    }`}>
      {/* Spacer to push card to one side on desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Glowing Central Marker */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          className="w-10 h-10 rounded-full bg-[#030014] border-2 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          style={{ borderColor: item.color }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.15 }}
        >
          {item.icon}
        </motion.div>
        
        {/* Radar Pulse Effect */}
        <div 
          className="absolute -inset-1 rounded-full opacity-35 animate-ping -z-10 pointer-events-none"
          style={{ backgroundColor: item.color }}
        />
      </div>

      {/* Main Experience Card */}
      <motion.div
        className="w-[90%] md:w-[45%] ml-12 md:ml-0 p-6 rounded-2xl glassmorphism hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 relative group"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        whileHover={{ y: -5 }}
      >
        {/* Dynamic neon top border */}
        <div 
          className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: item.color }}
        />

        <span 
          className="font-display font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/5"
          style={{ color: item.color }}
        >
          {item.year}
        </span>
        
        <h3 className="font-display font-extrabold text-lg text-white mt-4 tracking-wide group-hover:text-neon-cyan transition-colors">
          {item.role}
        </h3>
        
        <h4 className="font-sans font-medium text-xs text-slate-400 mb-4 italic">
          {item.org}
        </h4>

        <ul className="space-y-2 mt-4 text-xs md:text-sm text-slate-300 font-sans font-light leading-relaxed">
          {item.desc.map((bullet, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Bind scrolling offset to timeline height
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-24 bg-[#030014]/50 overflow-hidden">
      {/* Accent Orb Background */}
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Chronological <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">Timeline</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple mt-3 mx-auto rounded-full" />
          <p className="text-slate-400 font-sans font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            A review of professional milestones, academic teaching, and analytics research.
          </p>
        </div>

        {/* Timeline Map Container */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          
          {/* Base Background Track Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-900/60 transform -translate-x-1/2 z-0" />
          
          {/* Animated Glowing Active Track Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink transform -translate-x-1/2 z-10 origin-top shadow-[0_0_10px_#00d2ff]"
            style={{ scaleY }}
          />

          {/* Timeline Cards */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={item.role}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
