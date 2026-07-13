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
    <section id="testimonials" className="relative w-full py-32 lg:py-48 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              What Clients Say
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-text">
            Real stories from <br /> real transformations
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Thousands of clients have transformed their bodies and lives. See their success stories.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative min-h-96 lg:min-h-96">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: current === index ? 1 : 0,
                y: current === index ? 0 : 20,
              }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 glass rounded-2xl p-10 lg:p-16 border border-accent/20 hover:border-accent/40 transition-all ${
                current === index ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="space-y-8">
                {/* Quote icon */}
                <motion.div
                  animate={{
                    scale: current === index ? 1.2 : 1,
                    opacity: current === index ? 1 : 0.5,
                  }}
                  className="text-6xl lg:text-7xl text-accent/30"
                >
                  "
                </motion.div>

                {/* Testimonial text */}
                <p className="text-2xl lg:text-3xl text-text leading-relaxed font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-8 border-t border-accent/20">
                  <div>
                    <p className="font-bold text-lg text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-muted mt-1">{testimonial.title}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-2">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i} className="text-accent text-xl">
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
