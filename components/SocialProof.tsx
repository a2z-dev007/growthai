'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TiltCard from './TiltCard';

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <TiltCard className="flex flex-col items-center justify-center p-8 glass-panel h-full">
      <div className="text-4xl md:text-5xl font-sora font-bold text-gradient mb-2 relative z-10">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider relative z-10">
        {label}
      </div>
    </TiltCard>
  );
}

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-[#0B0F19] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Counter end={10} suffix="+" label="Years Experience" />
          <Counter end={12} suffix="" label="Senior Engineers" />
          <Counter end={50} suffix="+" label="Projects Delivered" />
          <Counter end={25} suffix="+" label="Global Clients" />
        </motion.div>
      </div>
    </section>
  );
}
