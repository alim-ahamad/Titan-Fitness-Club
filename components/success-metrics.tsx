"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function SuccessMetrics() {
  const metrics = [
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Success Rate", value: 98, suffix: "%" },
    { label: "Programs Offered", value: 12, suffix: "+" },
  ];

  const CountUpNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (!numberRef.current) return;

      let currentValue = 0;
      const increment = target / 50;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= target) {
          numberRef.current!.textContent = target.toString();
          clearInterval(interval);
        } else {
          numberRef.current!.textContent = Math.floor(currentValue).toString();
        }
      }, 30);

      return () => clearInterval(interval);
    }, [target]);

    return (
      <>
        <span ref={numberRef}>0</span>
        <span>{suffix}</span>
      </>
    );
  };

  return (
    <section id="success-metrics" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">By The Numbers</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-text mb-6 leading-tight">
            Our Impact
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-4">
                  <CountUpNumber target={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-lg text-text-muted">{metric.label}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl blur-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-2xl lg:text-3xl text-text-muted max-w-3xl mx-auto">
            Join a community of champions who have transformed their lives. Your success story starts here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
