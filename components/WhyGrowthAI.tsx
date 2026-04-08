'use client';

import { motion, useTransform, useMotionValue } from 'framer-motion';
import { BrainCircuit, Rocket, DollarSign, Award, Zap, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useEffect } from 'react';
import TiltCard from './TiltCard';

const reasons = [
  {
    title: 'Affordable Pricing',
    description: 'Get world-class development and premium designs at competitive rates, optimized for your business growth.',
    icon: DollarSign,
    color: '#22C55E',
  },
  {
    title: 'Top-Tier Quality',
    description: 'We deliver pixel-perfect, scalable, and secure products using industry-leading quality standards.',
    icon: ShieldCheck,
    color: '#0EA5E9',
  },
  {
    title: 'Rapid Turnaround',
    description: 'Launch your product faster with our agile development process, moving from concept to launch in record time.',
    icon: Zap,
    color: '#F59E0B',
  },
  {
    title: 'Tailored Solutions',
    description: 'We don\'t believe in one-size-fits-all. Every solution is custom-built to match your unique brand identity.',
    icon: BrainCircuit,
    color: '#8B5CF6',
  },
  {
    title: 'Expert Support',
    description: 'Our team is available round-the-clock to ensure your systems remain robust and high-performing.',
    icon: Clock,
    color: '#14B8A6',
  },
  {
    title: 'Strategic Partnership',
    description: 'We act as your dedicated technology partners, guiding you through every stage of your digital journey.',
    icon: HeartHandshake,
    color: '#EC4899',
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
            className="font-plus-jakarta text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Why Partner with <span className="text-gradient">Us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-inter"
          >
            We operate across <span className="text-white font-bold italic underline decoration-[#22C55E]/50 underline-offset-4">all domains</span>. From <span className="text-white font-medium">Healthcare to Finance & Marketing</span>, we engineer growth engines designed to dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <h3 className="font-inter text-2xl font-bold mb-4 text-white relative z-10">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg relative z-10">{reason.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
