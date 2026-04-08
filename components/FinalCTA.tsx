'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 relative bg-[#0B0F19] overflow-hidden flex items-center justify-center">
      {/* Animated Background Pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-plus-jakarta text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Let's Build Your <br />
          <span className="text-gradient">Next Digital Breakthrough</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-md text-gray-400 mb-12 max-w-2xl mx-auto font-inter"
        >
          Stop settling for average. Partner with a technical team that delivers excellence, speed, and real business results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] text-white font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            Start Your Project
          </button>
          <button className="px-10 py-3 rounded-full  bg-white/20 backdrop-blur-sm text-white font-bold text-xl hover:bg-white/10 transition-all border border-white/20">
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
