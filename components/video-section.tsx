"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Behind the Scenes</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-text mb-6 leading-tight">
            See It In <br /> Action
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group rounded-2xl overflow-hidden h-96 lg:h-screen max-h-screen bg-black/50"
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/Man_holding_heavy_dumbbells_in_gym_202601081527.jpeg"
              alt="Training"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center backdrop-blur-sm group-hover:bg-accent/30 transition-colors"
            >
              <motion.div
                animate={{ scale: [1, 0.9, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-accent flex items-center justify-center"
              >
                <Play className="w-10 h-10 text-background fill-background" />
              </motion.div>
            </motion.div>
          </motion.button>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-5">
            <h3 className="text-3xl lg:text-4xl font-bold text-text mb-2">Elite Training Sessions</h3>
            <p className="text-lg text-text-muted">Watch our coaches in action</p>
          </div>
        </motion.div>

        {/* Video Modal */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-black/50 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-accent mx-auto mb-4" />
                  <p className="text-text-muted">Video player would load here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
