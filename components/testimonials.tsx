"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daniel K.",
    title: "Strength Builder Program",
    rating: 5,
    text: "Marcus changed my life. Not just my body, but my mindset. Best decision I&apos;ve made.",
  },
  {
    name: "Jason R.",
    title: "Fat Loss Program",
    rating: 5,
    text: "Lost 35 lbs in 3 months and gained more confidence than ever before. Highly recommended!",
  },
  {
    name: "Michael T.",
    title: "Muscle Gain Program",
    rating: 5,
    text: "The coaching, the support, the results — everything is world-class. I&apos;m blown away.",
  },
  {
    name: "Alex P.",
    title: "Athletic Performance Program",
    rating: 5,
    text: "My strength increased 40% in just 4 months. The programming is scientifically proven and the support is incredible.",
  },
  {
    name: "Sarah L.",
    title: "Transformation Program",
    rating: 5,
    text: "Not only did I achieve my body goals, but I learned sustainable habits. This is a lifestyle change, not just a program.",
  },
  {
    name: "James M.",
    title: "VIP Coaching Package",
    rating: 5,
    text: "Worth every penny. The personalized attention and expertise changed everything. I finally understand real training.",
  },
  {
    name: "David C.",
    title: "Strength Builder Program",
    rating: 5,
    text: "As a busy executive, I needed efficient training. Marcus delivered exactly that. Results speak for themselves.",
  },
  {
    name: "Rachel K.",
    title: "Fat Loss & Toning Program",
    rating: 5,
    text: "The nutrition guidance paired with training was game-changing. Feeling stronger and more confident than ever!",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-40 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
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
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-text">
            What clients say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative min-h-96 lg:min-h-80">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: current === index ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 glass rounded-2xl p-8 lg:p-12 ${
                current === index ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="space-y-6">
                {/* Quote icon */}
                <motion.div
                  animate={{
                    scale: current === index ? 1 : 0.8,
                    opacity: current === index ? 1 : 0.5,
                  }}
                  className="text-5xl text-accent"
                >
                  "
                </motion.div>

                {/* Testimonial text */}
                <p className="text-xl lg:text-2xl text-text leading-relaxed font-light">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                  <div>
                    <p className="font-bold text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.title}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i} className="text-accent text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-accent w-8"
                  : "bg-text-muted/30 hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
