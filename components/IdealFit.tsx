'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const idealClients = [
  'Early-Stage Startups',
  'Funded Founders',
  'SaaS Businesses',
  'Growth-Stage Companies',
  'Businesses Building AI-Driven Products'
];

export default function IdealFit() {
  return (
    <section className="py-24 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#22C55E]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-plus-jakarta text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
        >
          Who We Work <span className="text-gradient">Best With</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {idealClients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 glass-panel border-[#22C55E]/10 hover:border-[#22C55E]/30 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              </div>
              <span className="text-xl font-bold text-white font-plus-jakarta">{client}</span>
            </motion.div>
          ))}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-1 p-6 flex items-center justify-center bg-gradient-to-r from-[#22C55E]/20 to-[#0EA5E9]/20 rounded-3xl border border-white/10"
          >
            <span className="text-white font-bold text-center italic">Scale Your Vision with a Team that Delivers.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
