"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/assets/Man_gripping_pull-up_bar_202607131104.jpeg",
    alt: "Pull-up training",
    title: "Pull-up training",
  },
  {
    src: "/assets/Man_adjusting_gym_machine_202607131104.jpeg",
    alt: "Machine training",
    title: "Machine training",
  },
  {
    src: "/assets/Man_starting_sprint_on_turf_202607131104.jpeg",
    alt: "Sprint training",
    title: "Sprint training",
  },
  {
    src: "/assets/Young_man_wearing_tank_top_202607131104.jpeg",
    alt: "Fitness showcase",
    title: "Fitness showcase",
  },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 lg:py-40 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl opacity-30"></div>
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
              Gallery
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black leading-tight text-text">
            Train. Sweat. Achieve.
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
              className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <p className="text-text font-bold text-lg">{image.title}</p>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-video"
              >
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIndex(null)}
                  className="absolute -top-12 right-0 text-text hover:text-accent transition-colors"
                  aria-label="Close lightbox"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Navigation */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + galleryImages.length) % galleryImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text hover:text-accent transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text hover:text-accent transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
