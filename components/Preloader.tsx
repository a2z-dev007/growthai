'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ["SPEED", "QUALITY", "ACCURACY", "EXECUTION", "GROWTH"];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Word cycler
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F19] overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C55E]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-xl px-10">
            {/* Brand Logo/Name */}
            <div className="flex flex-col items-center mb-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="mb-6"
               >
                 <img src="/growth-logo-ai.png" alt="Growthai" className="h-24 md:h-32 w-auto" />
               </motion.div>
               
               <div className="h-10 overflow-hidden text-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={words[currentWord]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-[#22C55E] font-black text-2xl md:text-3xl tracking-[0.2em] uppercase font-plus-jakarta"
                    >
                      {words[currentWord]}
                    </motion.p>
                  </AnimatePresence>
               </div>
            </div>

            {/* Progress Section */}
            <div className="w-full relative py-10">
               <div className="flex justify-between items-end mb-4">
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Initializing Growth Systems</div>
                  <div className="text-[#22C55E] font-black text-4xl font-plus-jakarta tracking-tighter">
                    {progress}%
                  </div>
               </div>
               
               <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]"
                    style={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  />
               </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm font-inter tracking-wide"
            >
              Elite Engineering for Ambitious Founders
            </motion.p>
          </div>

          {/* Abstract Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
