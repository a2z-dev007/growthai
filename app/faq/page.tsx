'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { HelpCircle, MessageSquare, Zap } from 'lucide-react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-glow opacity-20 pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#22C55E] text-sm font-medium mb-8"
          >
            <HelpCircle size={16} />
            <span>Support & Clarity</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-plus-jakarta mb-8 tracking-tight uppercase"
          >
            Frequently Asked <br />
            <span className="text-gradient">Questions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed"
          >
            Everything you need to know about our process, technology, and how we help founders build market-leading products.
          </motion.p>
        </div>
      </section>

      <section className="py-20 border-y border-white/10 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                  <Zap size={20} className="text-[#22C55E]" />
                </div>
                <span className="font-bold text-gray-300">Fast Response</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                  <MessageSquare size={20} className="text-[#0EA5E9]" />
                </div>
                <span className="font-bold text-gray-300">Dedicated Support</span>
             </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <FAQ />
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
