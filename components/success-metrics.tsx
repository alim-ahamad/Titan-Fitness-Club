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
    <section id="success-metrics" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">By The Numbers</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            Our Impact
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Measurable results from our elite coaching programs and dedicated community of transforming athletes
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-2xl bg-card/50 border border-border hover:border-accent/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-lg"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative text-center">
                <div className="text-6xl lg:text-7xl font-black text-accent mb-4">
                  <CountUpNumber target={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-base text-text-muted font-medium">{metric.label}</p>
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
          className="mt-28 text-center"
        >
          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-text max-w-4xl mx-auto leading-tight">
            Join a community of champions who have transformed their lives. <span className="text-accent">Your success story starts here.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
