'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/services-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Layout, Smartphone, ShoppingCart, Laptop, Code, MessageSquare, Brush, Cloud, Search, Cpu } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-glow opacity-20 pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#22C55E] text-sm font-medium mb-6"
          >
            Scale Your Business
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-plus-jakarta mb-8 tracking-tight"
          >
            Premium Solutions for <br />
            <span className="text-gradient">Modern Businesses</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-inter"
          >
            We provide high-end technology solutions tailored for startups, agencies, and enterprises looking to dominate their market with AI and modern software.
          </motion.p>
        </div>
      </section>

      {/* Audience Segments */}
      <section className="py-12 bg-white/5 border-y border-white/10 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <div className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
               <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
               <div>
                  <div className="font-bold text-white">For Startups</div>
                  <div className="text-xs text-gray-500">MVP in 4 Weeks</div>
               </div>
            </div>
            <div className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
               <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
               <div>
                  <div className="font-bold text-white">For Businesses</div>
                  <div className="text-xs text-gray-500">Scalable Growth</div>
               </div>
            </div>
            <div className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
               <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
               <div>
                  <div className="font-bold text-white">For Agencies</div>
                  <div className="text-xs text-gray-500">White-label Partner</div>
               </div>
            </div>
            <div className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
               <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
               <div>
                  <div className="font-bold text-white">For Enterprises</div>
                  <div className="text-xs text-gray-500">AI Integration</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-12 opacity-50 uppercase tracking-widest text-sm">Targeting Excellence For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">Startups</span>
              <p className="text-xs text-gray-500 mt-2">Rapid MVP Build</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">Agencies</span>
              <p className="text-xs text-gray-500 mt-2">White-Label Dev</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">Small Biz</span>
              <p className="text-xs text-gray-500 mt-2">Growth Systems</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-xl font-bold">Enterprise</span>
              <p className="text-xs text-gray-500 mt-2">AI Integration</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
