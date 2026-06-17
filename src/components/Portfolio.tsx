"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Filter } from "lucide-react";

interface Project {
  title: string;
  category: "all" | "ml" | "analytics" | "teaching";
  desc: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const projectsData: Project[] = [
  {
    title: "Neural Network Cluster Visualizer",
    category: "ml",
    desc: "An interactive high-dimensional data cluster visualizer using t-SNE and PCA algorithms mapped to a WebGL rendering canvas. Enables live tuning of learning rates and network topologies directly in the browser.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "Three.js", "React"],
    image: "/project-neural-net.png",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    title: "Predictive Analytics Pipeline",
    category: "analytics",
    desc: "End-to-end data pipeline processing millions of transactions in real-time. Forecasts market trends and detects potential transaction anomalies using trained XGBoost and LSTM models.",
    tech: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    image: "/project-analytics.png",
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    title: "Data Science Education Playground",
    category: "teaching",
    desc: "A custom educational platform featuring live Python coding notebooks, sandboxed executors, and interactive statistical visualization simulators built by Amit to mentor his computer science students.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    image: "/project-teaching.png",
    github: "https://github.com",
    demo: "https://github.com"
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform coordinates to rotation angles (caps rotation to ±12deg)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="perspective-[1000px] h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full rounded-2xl glassmorphism border border-white/5 hover:border-white/10 bg-gradient-to-br from-[#0c0a25] to-[#040212] overflow-hidden flex flex-col group transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_40px_rgba(157,78,221,0.15)] cursor-pointer"
      >
        {/* Card Image Area */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-black/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040212] via-transparent to-transparent opacity-90" />
          
          {/* Subtle glowing orb inside image space */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-neon-purple blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
        </div>

        {/* Card Details Area */}
        <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
          <div>
            <h3 className="font-display font-extrabold text-lg text-white mb-3 group-hover:text-neon-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-sans font-light leading-relaxed mb-6">
              {project.desc}
            </p>
          </div>

          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-sans font-semibold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:text-slate-200 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs Footer */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-display uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Repository
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-display uppercase tracking-widest text-neon-cyan hover:text-neon-pink transition-colors ml-auto"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "ml" | "analytics" | "teaching">("all");

  const filteredProjects = projectsData.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

  const categories: { label: string; value: "all" | "ml" | "analytics" | "teaching" }[] = [
    { label: "All Works", value: "all" },
    { label: "Machine Learning", value: "ml" },
    { label: "Analytics & Pipelines", value: "analytics" },
    { label: "Education & Tools", value: "teaching" }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-dark-bg overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-orange">Portfolio</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-pink to-neon-orange mt-3 mx-auto rounded-full" />
          <p className="text-slate-400 font-sans font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Demonstrating applied statistical logic, production models, and pedagogical code assets.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-widest mr-2">
            <Filter size={12} className="text-neon-cyan" />
            Filter:
          </div>
          {categories.map((c) => {
            const isSelected = filter === c.value;
            return (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-lg font-display text-[10px] uppercase tracking-widest font-semibold border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white/5 text-neon-cyan border-neon-cyan/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                    : "bg-transparent text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
