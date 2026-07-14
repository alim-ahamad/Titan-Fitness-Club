"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="cta"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/Man_holding_protein_shaker_gym_202607131104.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-text">
              Ready to become <br />
              <span className="gradient-text">your best self?</span>
            </h2>

            <p className="text-lg lg:text-xl text-text-muted leading-relaxed max-w-xl">
              Join hundreds of transformed clients who have taken control of their fitness journey and built the bodies and confidence they deserve. Your transformation starts today.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(229, 57, 53, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-6 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-colors shadow-glow-intense text-lg mt-6"
            >
              Get Started - Free Consultation
            </motion.button>
          </motion.div>

          {/* Right image - subtle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:flex relative h-96 justify-center"
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden">
              <img
                src="/assets/Man_kneeling_mid-stretch_gym_202607131104.jpeg"
                alt="Flexibility"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
