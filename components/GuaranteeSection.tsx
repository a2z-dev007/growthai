'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Scale, Receipt } from 'lucide-react';
import TiltCard from './TiltCard';

const guarantees = [
  {
    icon: Zap,
    title: 'Missed Milestone?',
    description: 'We Work Free Until It’s Delivered. We respect your timelines as much as you do.',
    color: '#22C55E'
  },
  {
    icon: ShieldCheck,
    title: '90-Day Warranty',
    description: 'Post-launch warranty included. We stand by our code quality and performance.',
    color: '#0EA5E9'
  },
  {
    icon: Scale,
    title: 'Transparent Scope',
    description: 'Defined scope before development starts. No shifting goalposts, just results.',
    color: '#8B5CF6'
  },
  {
    icon: Receipt,
    title: 'No Hidden Charges',
    description: 'Fixed pricing and transparent billing. What we quote is what you pay. Ever.',
    color: '#F59E0B'
  }
];

export default function GuaranteeSection() {
  return (
    <section className="py-24 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22C55E]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-plus-jakarta text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            Execution Backed by <span className="text-gradient">Accountability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-inter"
          >
            We believe your technology partner should share delivery risk—not just bill for effort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="glass-panel p-8 h-full border-[#22C55E]/10 hover:border-[#22C55E]/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
