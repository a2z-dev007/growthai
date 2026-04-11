'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/services-data';

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);
  
  if (!service) return null;

  const Icon = service.icon;
  
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20 pointer-events-none blur-3xl"
          style={{ background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)` }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10"
                style={{ color: service.color }}
              >
                <Icon size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-plus-jakarta mb-6 leading-tight">
                {service.title} for <span className="text-gradient">Fast-Growing Brands</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-inter">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:contact@growthai.in" className="btn-primary flex items-center gap-2 px-8 py-4">
                  Get a Free Proposal <ArrowRight size={18} />
                </a>
                <Link href="/services" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-medium">
                  All Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="text-yellow-400" /> Key Benefits
                </h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: service.color }} />
                      <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#22C55E]/20 to-transparent blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2"><Star size={20} className="text-yellow-500" /> <span className="font-bold">Trusted by 50+ Modern Startups</span></div>
             <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-[#22C55E]" /> <span className="font-bold">Enterprise Grade Quality</span></div>
             <div className="flex items-center gap-2"><Zap size={20} className="text-blue-400" /> <span className="font-bold">Rapid MVP Deployment</span></div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our {service.title} process is designed to deliver maximum value with high performance and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold" style={{ color: service.color }}>0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{feature}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enterprise-level implementation of {feature} tailored to your business goals and user needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Proven <br /> <span className="text-gradient">3-Step Process</span></h2>
              <div className="space-y-12">
                {[
                  { n: 1, t: 'Strategy & Discovery', d: 'We analyze your business goals, target audience, and competition.' },
                  { n: 2, t: 'Design & Development', d: 'Our agile team builds your solution with regular updates.' },
                  { n: 3, t: 'Launch & Scale', d: 'We deploy your product and provide post-launch support.' }
                ].map((step) => (
                  <div key={step.n} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-bold text-[#22C55E]">{step.n}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.t}</h4>
                      <p className="text-gray-400">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#22C55E]/20 to-[#0EA5E9]/20 flex items-center justify-center p-1 border border-white/10">
                  <div className="w-full h-full rounded-3xl bg-[#0B0F19] p-8 flex flex-col justify-center">
                     <span className="text-[#22C55E] font-bold mb-4 uppercase tracking-[0.2em] text-xs">For Startups</span>
                     <h3 className="text-3xl font-bold mb-6">Scale faster than your competition.</h3>
                     <p className="text-gray-400 mb-8">We focus on building a robust MVP that validates your idea and sets you up for global success.</p>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                           <div className="text-2xl font-bold text-white">45%+</div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Faster Discovery</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                           <div className="text-2xl font-bold text-white">100%</div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Ownership</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
