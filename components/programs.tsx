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
      className="relative w-full py-32 lg:py-48 bg-background overflow-hidden"
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
          className="mb-24 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-accent"></div>
            <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
              Programs
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-text">
            Choose your <br />
            transformation
          </h2>
          <p className="text-lg text-text-muted max-w-3xl">
            Our four flagship programs are engineered to deliver specific results based on your fitness goals
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className={`rounded-2xl p-10 transition-all duration-300 cursor-pointer group ${
                program.featured
                  ? "glass border-2 border-accent/60 shadow-glow-intense bg-card/80"
                  : "glass border border-border hover:border-accent/40 bg-card/50"
              }`}
            >
              {/* Number */}
              <div
                className={`text-6xl font-black mb-8 transition-colors ${
                  program.featured ? "text-accent" : "text-text-muted/30 group-hover:text-text-muted/50"
                }`}
              >
                {program.number}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors ${
                  program.featured ? "text-accent" : "text-text group-hover:text-accent"
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
