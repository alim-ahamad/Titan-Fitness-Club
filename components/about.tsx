"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export function About() {
  const [counters, setCounters] = useState({ clients: 0, success: 0, years: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounters((prev) => ({
              clients: Math.min(prev.clients + 20, 500),
              success: Math.min(prev.success + 3, 98),
              years: Math.min(prev.years + 0.5, 8),
            }));
          }, 30);

          setTimeout(() => clearInterval(interval), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 lg:py-48 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-96 lg:h-full min-h-[500px] lg:min-h-[600px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-2xl blur-2xl"></div>
              <img
                src="/assets/Trainer_holding_medicine_ball_gym_202607131104.jpeg"
                alt="Coach Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-accent"></div>
              <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
                About coach
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight text-text">
              More than a <br />
              coach. I&apos;m your <br />
              <span className="text-accent">partner.</span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: `${counters.clients}+`, label: "Happy Clients" },
                { value: `${counters.success}%`, label: "Success Rate" },
                { value: `${counters.years}+`, label: "Years Exp" },
              ].map((stat, i) => (
                <div key={i} className="glass rounded-lg p-4">
                  <div className="text-2xl font-black text-accent">
                    {typeof stat.value === "number"
                      ? stat.value
                      : stat.value}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-lg text-text-muted leading-relaxed">
              My mission is simple — to help you become the strongest version of
              yourself. With 8+ years of experience and 500+ transformations, I
              know what it takes to get results. I don&apos;t just train you. I guide you.
              I push you. I believe in you. Together, we build champions.
            </p>

            {/* Signature */}
            <div className="pt-4">
              <p className="text-2xl font-black text-accent italic">
                Marcus Reid
              </p>
              <p className="text-text-muted">Founder, Titan Fitness Club</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
