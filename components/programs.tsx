"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    number: "01",
    title: "Strength Builder",
    description: "Build raw strength and muscle mass with progressive overload programming.",
  },
  {
    number: "02",
    title: "Muscle Gain",
    description: "Tactical hypertrophy training designed to maximize muscle growth and definition.",
    featured: true,
  },
  {
    number: "03",
    title: "Fat Loss",
    description: "Lose fat while preserving muscle. High-performance fat loss protocols.",
  },
  {
    number: "04",
    title: "Athletic Performance",
    description: "Train like an athlete. Explosive power, speed, and endurance optimization.",
  },
];

export function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 lg:py-40 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-accent"></div>
            <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
              Programs
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-text">
            Choose your
            <br />
            transformation
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={
                program.featured
                  ? {
                      scale: 1.05,
                      boxShadow: "0 0 60px rgba(229, 57, 53, 0.5)",
                    }
                  : { scale: 1.02, boxShadow: "0 0 40px rgba(229, 57, 53, 0.3)" }
              }
              className={`rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                program.featured
                  ? "glass border-2 border-accent/50 shadow-glow-intense"
                  : "glass border border-accent/20"
              }`}
            >
              {/* Number */}
              <div
                className={`text-5xl font-black mb-6 ${
                  program.featured ? "text-accent" : "text-text-muted/40"
                }`}
              >
                {program.number}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  program.featured ? "text-accent" : "text-text"
                }`}
              >
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                {program.description}
              </p>

              {/* Arrow */}
              <motion.div
                whileHover={{ x: 5 }}
                className={`text-2xl ${
                  program.featured ? "text-accent" : "text-text-muted"
                }`}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
