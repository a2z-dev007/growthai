'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, Users, ShieldAlert } from 'lucide-react';
import TiltCard from './TiltCard';

const painPoints = [
  {
    icon: Clock,
    title: 'Slow & Opaque Agencies',
    description: 'Traditional agencies are often slow, opaque, and execution-heavy but strategy-light.',
    color: '#EF4444'
  },
  {
    icon: Users,
    title: 'Lack of Accountability',
    description: 'Freelancers can lack accountability and long-term commitment to your product success.',
    color: '#F59E0B'
  },
  {
    icon: ShieldAlert,
    title: 'Quality Compromises',
    description: 'Junior-heavy teams often compromise on quality, security, and scalability.',
    color: '#0EA5E9'
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold mb-6"
          >
            <AlertCircle size={16} />
            <span>The Status Quo</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-plus-jakarta text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            Most Development Partners <br />
            <span className="text-red-500">Slow You Down.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-inter"
          >
            Growthai combines startup speed, elite engineering, and strategic product thinking to help you build better—faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="glass-panel p-8 h-full border-red-500/10 hover:border-red-500/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <point.icon className="w-7 h-7" style={{ color: point.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
