"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does your personalized program work?",
      answer:
        "We conduct a comprehensive assessment of your current fitness level, goals, and lifestyle. Our AI system then generates a customized program that evolves with your progress, adjusted weekly based on your performance data.",
    },
    {
      question: "What qualifications do your coaches have?",
      answer:
        "All our coaches are NASM or ACE certified with minimum 5+ years of professional coaching experience. Many are competitive athletes themselves, bringing real-world expertise to every session.",
    },
    {
      question: "Do I have access to support outside of sessions?",
      answer:
        "Yes. All members get 24/7 access to our support team via our mobile app. You can ask questions, get form checks, and receive guidance anytime you need it.",
    },
    {
      question: "Can I scale the program to my equipment availability?",
      answer:
        "Absolutely. Our programs are flexible and we provide equipment alternatives. Whether you have access to a full gym or just a home setup, we'll customize your training.",
    },
    {
      question: "How often should I reassess my progress?",
      answer:
        "We recommend monthly progress assessments. This allows us to track body composition changes, strength gains, and adjust your program for continued results.",
    },
    {
      question: "What if I have previous injuries?",
      answer:
        "We take injuries seriously. During your initial assessment, we'll learn about any limitations and design a program that works around them while helping you build resilience.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Most clients notice changes within 3-4 weeks. Significant transformations typically occur within 12 weeks with consistent effort and nutrition adherence.",
    },
    {
      question: "Is nutrition coaching included?",
      answer:
        "Yes. All programs include custom meal planning, macro guidance, and ongoing nutritional coaching. We believe training and nutrition are equally important.",
    },
  ];

  return (
    <section id="faq" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Questions & Answers</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to know about our coaching programs and approach
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-8 rounded-2xl bg-card/50 border border-border hover:border-accent/40 hover:bg-card/70 transition-all duration-300 flex items-center justify-between group"
                whileHover={{ y: -4 }}
              >
                <span className="text-lg lg:text-xl font-bold text-text pr-6 group-hover:text-accent transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-accent" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-base text-text-muted leading-relaxed border-t border-border/50 mt-6 pt-6">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-text-muted mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-background font-bold transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
