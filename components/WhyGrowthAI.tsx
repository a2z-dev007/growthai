'use client';

import { motion, useTransform, useMotionValue } from 'framer-motion';
import { BrainCircuit, Rocket, DollarSign, Award } from 'lucide-react';
import { useEffect } from 'react';
import TiltCard from './TiltCard';

const reasons = [
  {
    title: 'AI-First Approach',
    description: 'Every product we build is designed from the ground up to integrate seamlessly with modern AI capabilities.',
    icon: BrainCircuit,
    color: '#0EA5E9',
  },
  {
    title: 'Built to Scale',
    description: 'Our solutions are built on robust cloud infrastructure, ensuring they can handle your growth from day one.',
    icon: Rocket,
    color: '#22C55E',
  },
  {
    title: 'Affordable Price',
    description: 'Get cutting-edge AI and premium development at competitive prices tailored to help your startup succeed.',
    icon: DollarSign,
    color: '#F59E0B',
  },
  {
    title: 'Best Quality Guaranteed',
    description: 'We deliver pixel-perfect, highly scalable, and meticulously tested apps that perform flawlessly under pressure.',
    icon: Award,
    color: '#EC4899', // Pinkish color for variety
  },
];

export default function WhyGrowthAI() {
  return (
    <section className="py-16 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#22C55E]/5 to-[#0B0F19] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-agency text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Why Choose <span className="text-gradient">GrowthAI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't just build software; we engineer growth engines designed to dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <TiltCard className="glass-panel p-10 relative group overflow-hidden h-full">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                  <reason.icon className="w-8 h-8" style={{ color: reason.color }} />
                </div>
                
                <h3 className="font-sora text-2xl font-bold mb-4 text-white relative z-10">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg relative z-10">{reason.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
