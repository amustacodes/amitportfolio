"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillItem {
  name: string;
  percentage: number;
  tags: string[];
  color: string;
}

const skillCategories = [
  {
    title: "Core Data Science & Research",
    skills: [
      { name: "Data Science", percentage: 95, tags: ["Predictive Analytics", "Data Wrangling", "Feature Engineering"], color: "#00f2fe" },
      { name: "Machine Learning", percentage: 92, tags: ["Supervised/Unsupervised", "Deep Learning", "NLP"], color: "#9d4edd" },
      { name: "Statistics", percentage: 90, tags: ["Hypothesis Testing", "Probability", "Regression"], color: "#00f5d4" },
      { name: "Research", percentage: 88, tags: ["Scientific Writing", "Experimental Design", "Data Mining"], color: "#ff007f" }
    ]
  },
  {
    title: "Technology & Engineering",
    skills: [
      { name: "Python", percentage: 95, tags: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"], color: "#ff9e00" },
      { name: "SQL", percentage: 85, tags: ["PostgreSQL", "Query Optimization", "Database Schema Design"], color: "#7209b7" },
      { name: "Data Visualization", percentage: 90, tags: ["Matplotlib", "Seaborn", "PowerBI", "Tableau"], color: "#00f2fe" }
    ]
  },
  {
    title: "Leadership & Communication",
    skills: [
      { name: "Communication", percentage: 92, tags: ["Public Speaking", "Technical Documentation", "Presenting"], color: "#ff007f" },
      { name: "Teaching", percentage: 96, tags: ["Syllabus Design", "Student Mentoring", "Interactive Lectures"], color: "#00f5d4" },
      { name: "Leadership", percentage: 89, tags: ["Team Coordination", "Strategic Planning", "Project Management"], color: "#9d4edd" }
    ]
  }
];

function CountUp({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1200; // ms
    const increment = target / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count}%</span>;
}

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Circle progress calculations
  const radius = 40;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isInView 
    ? circumference - (skill.percentage / 100) * circumference 
    : circumference;

  return (
    <motion.div
      ref={cardRef}
      className="p-6 rounded-2xl glassmorphism hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden group flex items-center justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      style={{
        boxShadow: `0 0 0 rgba(0, 0, 0, 0)`
      }}
    >
      {/* Background glow strip */}
      <div 
        className="absolute top-0 left-0 w-[4px] h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />

      {/* Text Info */}
      <div className="flex-1 pr-4">
        <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {skill.name}
        </h4>
        
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {skill.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-wide font-sans font-light px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400 group-hover:text-slate-200 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* SVG Circle Gauge */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Base Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Glowing Animated Progress Circle */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={skill.color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 4px ${skill.color})`
            }}
          />
        </svg>
        <div className="absolute font-display font-extrabold text-sm tracking-wider text-white">
          <CountUp target={skill.percentage} isVisible={isInView} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-dark-bg overflow-hidden">
      {/* Background neon orb glow */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[130px] pointer-events-none" />

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
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">Capabilities</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-pink mt-3 mx-auto rounded-full" />
          <p className="text-slate-400 font-sans font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Exploring quantitative methods, computational tools, and executive communication.
          </p>
        </div>

        {/* Skill categories loop */}
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              
              {/* Category Subtitle */}
              <motion.h3
                className="font-display font-semibold text-lg md:text-xl text-slate-300 tracking-widest uppercase border-l-2 border-neon-cyan pl-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIdx}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
