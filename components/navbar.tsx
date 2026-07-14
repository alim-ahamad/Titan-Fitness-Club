"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((link) => link.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 hidden lg:block transition-all duration-500 ${
          isScrolled ? "glass border-b border-border/30" : "transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-black text-accent cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            TITAN
          </motion.div>

          {/* Center Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.slice(0, 6).map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-semibold text-text-muted hover:text-text transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("#contact")}
            className="px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-500 ${
          isScrolled ? "glass border-b border-border/30" : "transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-black text-accent cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            TITAN
          </motion.div>

          {/* Menu Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-card/50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-30 lg:hidden glass border-b border-border/30 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeSection === link.href.slice(1)
                      ? "bg-accent/20 text-accent"
                      : "text-text-muted hover:bg-card/50 hover:text-text"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => handleNavClick("#contact")}
                className="w-full mt-6 px-6 py-4 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-colors"
              >
                Get Started - Free Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
