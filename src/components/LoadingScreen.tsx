"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "INITIALIZING ANALYTICAL CORE...",
  "LOADING ML MODELS AND HYPERPARAMETERS...",
  "ESTABLISHING SECURE CONNECTION TO DATA PIPELINE...",
  "OPTIMIZING HIGH-DIMENSIONAL DATA REPRESENTATION...",
  "AMIT NEUPANE PORTFOLIO LOADED."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 800); // Wait for AnimatePresence exit transition
          }, 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    // Boot logs rotation
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02000d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Core spinning orbital glow */}
          <div className="relative flex items-center justify-center w-48 h-48 mb-8">
            <motion.div
              className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-neon-cyan"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[85%] h-[85%] rounded-full border-b-2 border-l-2 border-neon-pink"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[70%] h-[70%] rounded-full border-t border-l border-neon-purple opacity-60"
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />

            {/* Glowing inner core */}
            <div className="absolute w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue blur-md opacity-30 animate-pulse" />

            <span className="relative font-display font-black text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-blue">
              {progress}%
            </span>
          </div>

          {/* Futuristic logs and status bar */}
          <div className="w-[85%] max-w-lg text-center px-4">
            <h1 className="font-display font-bold tracking-widest text-sm text-slate-400 mb-2 uppercase">
              Quantum Core Initialization
            </h1>

            {/* Micro progress bar */}
            <div className="h-[2px] w-full bg-slate-900 rounded-full overflow-hidden mb-6 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink shadow-[0_0_10px_#00f2fe]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Simulated compiler log outputs */}
            <div className="h-8 font-mono text-[10px] text-neon-cyan/70 tracking-wider overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  &gt; {bootLogs[logIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
