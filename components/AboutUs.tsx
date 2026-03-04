'use client';

import { motion } from 'framer-motion';
import { Users, Target, Zap, Globe } from 'lucide-react';

const stats = [
  { label: 'Successful Projects', value: '10+', icon: Target, color: '#0EA5E9' },
  { label: 'Global Clients', value: '12+', icon: Globe, color: '#22C55E' },
  { label: 'Apps Delivered', value: '2+', icon: Zap, color: '#F59E0B' },
  { label: 'Team Members', value: '10+', icon: Users, color: '#EC4899' },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Background glowing effects */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9]/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-agency text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8">
              Pioneering the <br />
              <span className="text-gradient">Future of Tech</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-sora">
              <p>
                At GrowthAI, we orchestrate the perfect symphony of cutting-edge technology and human creativity. We specialize in building robust web applications, scalable mobile apps, and custom software solutions designed for growth.
              </p>
              <p>
                Founded on the belief that premium development should be accessible and beautifully integrated, we partner with ambitious startups and enterprises to transform their boldest ideas into reality. We act as your dedicated technical partners from MVP to global scale.
              </p>
              <p>
                Our mission is simple: to build software that doesn't merely keep up with the market, but actively redefines it.
              </p>
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-sora backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                </span>
                Available for new projects
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/10"
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <h3 className="font-agency text-4xl md:text-5xl font-bold text-white mb-2 tracking-wider">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-sora text-sm md:text-base uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
