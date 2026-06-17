"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty("--mouse-x", `${clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Primary glowing aura centered on the cursor position */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
        style={{
          background: `radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 242, 254, 0.04) 0%, rgba(157, 78, 221, 0.06) 40%, transparent 80%)`,
        }}
      />
      {/* Secondary accent lighting circle for a soft futuristic backlight effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-20 hidden lg:block animate-pulse-slow"
        style={{
          background: `radial-gradient(300px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 0, 127, 0.02) 0%, transparent 80%)`,
        }}
      />
    </>
  );
}
