'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, ShoppingCart, Layout, MessageSquare, Laptop } from 'lucide-react';
import { useParallax } from '@/hooks/use-parallax';
import TiltCard from './TiltCard';

const services = [
  {
    title: 'WordPress Development',
    description: 'Custom, SEO-friendly WordPress websites tailored for small businesses and bloggers.',
    icon: Layout,
    color: '#22C55E',
  },
  {
    title: 'Cross Platform Mobile Apps',
    description: 'Beautiful, high-performance mobile apps for iOS and Android using a single codebase.',
    icon: Smartphone,
    color: '#0EA5E9',
  },
  {
    title: 'Ecommerce Solutions',
    description: 'Scalable online stores with seamless payment integration and user-friendly management.',
    icon: ShoppingCart,
    color: '#8B5CF6',
  },
  {
    title: 'SaaS Products',
    description: 'End-to-end development of scalable multi-tenant software platforms.',
    icon: Laptop,
    color: '#F59E0B',
  },
  {
    title: 'Custom Software',
    description: 'Bespoke software solutions designed to solve your unique business challenges.',
    icon: Code,
    color: '#EC4899',
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent, 24/7 conversational agents to automate customer service and sales.',
    icon: MessageSquare,
    color: '#14B8A6',
  },
];

export default function ServicesSection() {
  const bgY = useParallax(0.15);
  
  return (
    <section id="services" className="py-16 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Parallax background glow */}
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
            className="font-agency text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-sora"
          >
            <span className="text-white font-semibold">We build AI Intelligent products and platforms</span> that accelerate your growth and dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <TiltCard className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/20 to-[#0EA5E9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10 w-full h-full flex flex-col items-start translate-z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="font-sora text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
