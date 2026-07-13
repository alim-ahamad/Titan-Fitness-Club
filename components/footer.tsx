"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-3xl lg:text-4xl font-black text-accent">
              TITAN
            </div>
            <p className="text-text-muted text-base leading-relaxed">
              Built for strength. Designed for champions. Dedicated to your transformation and success.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-lg text-text">Navigation</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              {[
                { name: "Home", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "Features", href: "#features" },
                { name: "Programs", href: "#programs" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-lg text-text">Resources</h4>
            <ul className="space-y-3 text-text-muted text-sm">
              {[
                { name: "Transformations", href: "#transformations" },
                { name: "Success Metrics", href: "#success-metrics" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Gallery", href: "#gallery" },
                { name: "FAQ", href: "#faq" },
                { name: "Blog", href: "#blog" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-bold text-text">Get In Touch</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>
                <a
                  href="mailto:hello@titanfitness.com"
                  className="hover:text-accent transition-colors"
                >
                  hello@titanfitness.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  {["instagram", "twitter", "facebook", "youtube"].map(
                    (social) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ scale: 1.2, color: "#E53935" }}
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={social}
                      >
                        <span className="text-lg">
                          {social === "instagram" && "📷"}
                          {social === "twitter" && "𝕏"}
                          {social === "facebook" && "f"}
                          {social === "youtube" && "▶"}
                        </span>
                      </motion.a>
                    )
                  )}
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-text-muted text-sm">
              © 2025 Titan Fitness Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-text-muted text-sm">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -4 }}
            className="w-full md:w-auto px-6 py-2 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent transition-colors text-sm"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
