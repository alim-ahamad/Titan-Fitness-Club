"use client";

import { motion } from "framer-motion";
import { Clock, Apple, TrendingUp, Dumbbell, Heart, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available when you need guidance",
      size: "col-span-1 row-span-1",
    },
    {
      icon: Apple,
      title: "Custom Diet Plans",
      description: "Nutrition tailored to your body and goals",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      icon: TrendingUp,
      title: "AI Progress Tracking",
      description: "Smart analytics to optimize your results",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      icon: Dumbbell,
      title: "Workout Plans",
      description: "Scientifically-designed training programs",
      size: "col-span-1 row-span-1",
    },
    {
      icon: Heart,
      title: "Recovery System",
      description: "Advanced recovery protocols for peak performance",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      icon: Zap,
      title: "Elite Coaching",
      description: "1-on-1 sessions with certified trainers",
      size: "col-span-1 row-span-1",
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Features</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            Everything You <br /> Need To Succeed
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            Comprehensive tools and personalized support to maximize your fitness transformation
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[300px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -16, boxShadow: "0 20px 50px rgba(229, 57, 53, 0.25)" }}
                className={`${feature.size} group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 border border-border/50 backdrop-blur-lg overflow-hidden hover:border-accent/40 hover:from-card/80 hover:to-card/60 transition-all duration-300 shadow-lg`}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 12 }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all mb-6 border border-accent/20"
              >
                <Icon className="w-8 h-8 text-accent" />
              </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-text mb-3 leading-tight">{feature.title}</h3>
                    <p className="text-base text-text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
