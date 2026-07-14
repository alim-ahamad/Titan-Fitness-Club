"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ParallaxBreak() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("parallax-break");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);
      const parallaxOffset = scrollProgress * 50;

      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="parallax-break"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: offset }}
        transition={{ type: "tween", duration: 0 }}
      >
        <img
          src="/assets/Man_standing_arms_crossed_gym_202607131105.jpeg"
          alt="Discipline"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-text leading-tight mb-8">
            <span className="block">Discipline</span>
            <span className="block">Is Built</span>
            <span className="text-accent">Daily</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Every rep, every meal, every decision compounds. The elite understand
            that transformation is not a destination—it&apos;s a way of life.
          </motion.p>
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
}
