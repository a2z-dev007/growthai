'use client';

import React from 'react';

const WORDS = [
  "SECURE", "RELIABLE", "ENGAGING", "ACCESSIBLE", "RESPONSIVE", 
  "DYNAMIC", "SCALABLE", "SEARCH OPTIMIZED", "INTERACTIVE"
];

// Duplicate words enough times to fill and scroll seamlessly
const MARQUEE_ITEMS = [...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS, ...WORDS];

const MarqueeRow = ({ direction, rotate, zIndex }: { direction: 'left' | 'right', rotate: string, zIndex: string }) => {
  return (
    <div 
      className={`absolute w-[120vw] left-[-10vw] flex overflow-hidden bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] py-3.5 shadow-lg border-y border-white/20 ${zIndex}`}
      style={{ transform: `rotate(${rotate})`, boxShadow: '0 0 25px rgba(34,197,94,0.3), inset 0 0 10px rgba(14,165,233,0.3)' }}
    >
      <div 
        className={`flex whitespace-nowrap min-w-max animate-marquee-${direction}`}
      >
        {MARQUEE_ITEMS.map((word, idx) => (
          <div key={idx} className="flex items-center text-white font-bold tracking-[0.2em] text-xs sm:text-sm lg:text-base mx-6">
            <span className="mx-8 text-[12px] opacity-80">✦</span>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GlowingStrip() {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-[#0B0F19] my-10 border-y border-white/5">
      <div className="absolute w-[800px] h-[300px] bg-gradient-to-r from-[#22C55E]/10 to-[#0EA5E9]/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Strip 2: Back layer, tilted up, moving right */}
      <MarqueeRow direction="right" rotate="-3deg" zIndex="z-0 opacity-90" />
      
      {/* Strip 1: Front layer, tilted down, moving left */}
      <MarqueeRow direction="left" rotate="3deg" zIndex="z-10" />
      
    </section>
  );
}
