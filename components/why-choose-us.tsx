"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { title: "Elite Trainers", description: "Top 1% certified coaches with proven track records" },
    { title: "Personalized Plans", description: "Custom programs designed for your goals" },
    { title: "24/7 Support", description: "Round-the-clock guidance and accountability" },
    { title: "Advanced Analytics", description: "Real-time progress tracking and insights" },
    { title: "Luxury Facilities", description: "Premium equipment and state-of-the-art amenities" },
    { title: "Community", description: "Exclusive network of like-minded individuals" },
  ];

  return (
    <section id="why-choose-us" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            The Titan <br /> Difference
          </h2>
          <p className="text-lg text-text-muted max-w-3xl">
            More than a gym. More than coaching. A complete transformation system engineered for champions who demand excellence from themselves.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative p-10 rounded-2xl bg-card/50 border border-border hover:border-accent/40 hover:bg-card/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all border border-accent/20"
                >
                  <Check className="w-7 h-7 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-text mb-3 leading-tight group-hover:text-accent transition-colors">{reason.title}</h3>
                  <p className="text-base text-text-muted leading-relaxed">{reason.description}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
