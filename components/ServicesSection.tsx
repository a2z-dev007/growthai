'use client';

import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/use-parallax';
import TiltCard from './TiltCard';
import { services } from '@/lib/services-data';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const bgY = useParallax(0.15);
  
  return (
    <section id="services" className="py-16 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* ... (rest of background logic) */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-glow opacity-10 pointer-events-none"
        style={{ transform: `translateY(${bgY}px)` }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#22C55E]/30 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-plus-jakarta text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-inter"
          >
            <span className="text-white font-semibold">We build AI Intelligent products and platforms</span> that accelerate your growth and dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
             <Link href="/services" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold inline-flex items-center gap-3">
                View All Services
             </Link>
        </div>
      </div>
    </section>
  );
}
