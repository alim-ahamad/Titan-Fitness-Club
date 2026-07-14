"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💪",
    title: "Strength Training",
    description:
      "Build raw power and muscle mass with precision programming designed for elite performance.",
  },
  {
    icon: "🥗",
    title: "Nutrition Guidance",
    description:
      "Fuel your body with personalized nutrition plans built on science and tailored to your goals.",
  },
  {
    icon: "👤",
    title: "Personal Coaching",
    description:
      "1-on-1 coaching that adapts to your needs, pushing you beyond your perceived limits.",
  },
  {
    icon: "❤️",
    title: "Recovery & Mobility",
    description:
      "Move better, recover faster, perform more. Comprehensive recovery protocols for longevity.",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
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
              What we do
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-text">
            Built for your best.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, boxShadow: "0 0 40px rgba(229, 57, 53, 0.3)" }}
              className="group glass rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
