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
    <section id="why-choose-us" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-text mb-6 leading-tight">
            The Titan <br /> Difference
          </h2>
          <p className="text-xl text-text-muted max-w-2xl">
            More than a gym. More than coaching. A complete transformation system designed for champions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                >
                  <Check className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">{reason.title}</h3>
                  <p className="text-text-muted leading-relaxed">{reason.description}</p>
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
