"use client";

import { motion } from "framer-motion";

export function VideoSection() {

  return (
    <section id="video" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Behind the Scenes</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            See It In <br /> Action
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Watch our elite coaching in action and experience the energy of our training sessions
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group rounded-2xl overflow-hidden h-96 lg:h-screen max-h-screen bg-black/50 border border-accent/20 hover:border-accent/40 transition-all"
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/Trainer_holding_medicine_ball_gym_202607131104.jpeg"
              alt="Training"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>



          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-5">
            <h3 className="text-3xl lg:text-4xl font-bold text-text mb-2">Elite Training Sessions</h3>
            <p className="text-lg text-text-muted">Watch our coaches in action</p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
