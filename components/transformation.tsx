"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="transformations" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Real Results</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-text mb-6 leading-tight">
            Transformations That <br /> Inspire
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Drag the slider to see the incredible transformations of our clients
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full rounded-2xl overflow-hidden bg-card/50 border border-border cursor-col-resize group"
        >
          {/* Container */}
          <div className="relative h-96 lg:h-screen max-h-screen w-full">
            {/* Before Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/Man_kneeling_mid-stretch_gym_202607131104.jpeg"
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-2xl font-bold text-text">BEFORE</p>
              </div>
            </div>

            {/* After Image */}
            <motion.div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
            >
              <img
                src="/assets/Man_standing_arms_crossed_gym_202607131105.jpeg"
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 right-8 z-10">
                <p className="text-2xl font-bold text-text">AFTER</p>
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-accent z-20 cursor-col-resize group-hover:w-2 transition-all"
              style={{ left: `${sliderPosition}%` }}
              animate={{ x: "-50%", transition: { duration: 0 } }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-background rounded-full"></div>
                  <div className="w-0.5 h-4 bg-background rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { label: "Clients Transformed", value: "500+" },
            { label: "Average Body Fat Loss", value: "18%" },
            { label: "Success Rate", value: "98%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-lg text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
