"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-between overflow-hidden bg-background"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-accent"></div>
              <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
                Discipline. Consistency. Results.
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-text">
              FORGE YOUR
              <br />
              <span className="gradient-text">LEGACY</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-text-muted leading-relaxed max-w-md">
              Luxury performance coaching for those who demand more from
              themselves. Transform your body, elevate your mind, dominate your
              goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(229, 57, 53, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-colors shadow-glow"
              >
                START YOUR JOURNEY
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-background transition-all"
              >
                ▶ WATCH INTRO
              </motion.button>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center pt-8"
            >
              <span className="text-xs text-text-muted uppercase tracking-widest">
                Scroll to explore
              </span>
              <svg
                className="w-5 h-5 text-accent mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ perspective: 1200 }}
            className="relative h-96 lg:h-full min-h-96 lg:min-h-screen flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md lg:max-w-none rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-2xl blur-2xl"></div>
              <img
                src="/assets/Man_standing_arms_crossed_gym_202607131105.jpeg"
                alt="Trainer"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Accent border */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats floating on side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:grid absolute right-0 top-1/2 -translate-y-1/2 gap-8 pr-12"
        >
          {[
            { number: "500+", label: "Transformations" },
            { number: "8+", label: "Years Experience" },
            { number: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-right glass rounded-lg px-6 py-4 backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-accent">{stat.number}</div>
              <div className="text-xs text-text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
