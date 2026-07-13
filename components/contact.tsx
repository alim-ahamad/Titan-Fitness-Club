"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@titanfitness.com",
      action: "mailto:hello@titanfitness.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Fitness Street, NY 10001",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            Ready To Get <br /> Started?
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Have questions? Our elite team is ready to discuss your transformation journey and create your personalized coaching plan.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-text mb-3">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-card/50 border border-border hover:border-accent/40 text-text placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text mb-3">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-card/50 border border-border hover:border-accent/40 text-text placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text mb-3">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-card/50 border border-border hover:border-accent/40 text-text placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell us about your fitness goals and transformation vision..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(229, 57, 53, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-5 rounded-xl bg-accent hover:bg-accent-light text-background font-bold text-lg transition-all duration-300 mt-4 shadow-glow"
              >
                {submitted ? "✓ Message Sent!" : "Get Started Now"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 lg:h-80 bg-card/50 border border-border">
              <div className="w-full h-full bg-gradient-to-br from-accent/10 to-black/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent/50 mx-auto mb-3" />
                  <p className="text-text-muted">Map integration coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{method.title}</p>
                      <p className="text-lg font-semibold text-text">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card/50 border border-border"
            >
              <h3 className="text-lg font-bold text-text mb-4">Business Hours</h3>
              <div className="space-y-2 text-text-muted">
                <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
