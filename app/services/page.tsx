'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/services-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TiltCard from '@/components/TiltCard';
import GlowingStrip from '@/components/GlowingStrip';
import FAQ from '@/components/FAQ';
import { 
  CheckCircle2, Cpu, Globe, Rocket, Terminal, Zap, ShieldCheck, 
  Code2, Database, Layout, Smartphone, MessageSquare, Workflow, Cloud
} from 'lucide-react';

const techStack = [
  { name: 'Next.js 15', icon: Globe, category: 'Frontend' },
  { name: 'React Native', icon: Smartphone, category: 'Mobile' },
  { name: 'Node.js', icon: Terminal, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Tailwind CSS', icon: Layout, category: 'Design' },
  { name: 'OpenAI API', icon: Cpu, category: 'AI' },
  { name: 'Framer Motion', icon: Zap, category: 'Animation' },
  { name: 'AWS/Vercel', icon: Cloud, category: 'Cloud' }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-glow opacity-20 pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#22C55E] text-sm font-medium mb-8"
          >
            <Zap size={16} />
            <span>AI-Accelerated Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-plus-jakarta mb-8 tracking-tight uppercase"
          >
            Our <span className="text-gradient">Core Domain</span> <br />
            Expertise
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed"
          >
            From high-performance web apps to intelligent AI systems, we provide the technical foundation for modern startups and enterprises.
          </motion.p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/10 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-black text-xl">SPEED</div>
             <div className="flex items-center gap-2 font-black text-xl">QUALITY</div>
             <div className="flex items-center gap-2 font-black text-xl">SCALE</div>
             <div className="flex items-center gap-2 font-black text-xl">EXECUTION</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-plus-jakarta mb-6">Execution <span className="text-gradient">Capabilities</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Select a service to see how we can accelerate your growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <GlowingStrip />

      {/* Tech Stack Section */}
{/*       
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/5 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto px-6">
              <div className="mb-20 text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-bold font-plus-jakarta mb-6">A Technology <span className="text-gradient">Agnostic</span> Approach</h2>
                  <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-inter leading-relaxed">
                      We don’t believe in one-size-fits-all. While we have our favorites, our engineering team is <span className="text-white font-bold italic">stack-agnostic</span>. We choose the technologies that best solve your specific business challenges, scalability needs, and budget requirements.
                  </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((tech, i) => (
                      <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="p-8 glass-panel border-white/5 hover:border-[#22C55E]/30 transition-all group"
                      >
                          <tech.icon className="w-8 h-8 text-[#22C55E] mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-1">{tech.name}</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-widest">{tech.category}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section> */}

      {/* Why Choose Us (Specific for Services) */}
      <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                      <h2 className="text-4xl md:text-7xl font-bold font-plus-jakarta mb-10 leading-tight">
                          Why Founders <span className="text-gradient">Choose</span> Our Services
                      </h2>
                      <div className="space-y-8">
                          {[
                              { title: 'Zero Technical Debt', desc: 'Enterprise-grade code from day one.' },
                              { title: 'AI-Native Workflow', desc: 'Accelerated development without quality drops.' },
                              { title: 'Product Mindset', desc: 'We help refine your product, not just code.' },
                              { title: 'Global Delivery', desc: 'Serving clients worldwide with seamless sync.' }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-4">
                                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                                  </div>
                                  <div>
                                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                      <p className="text-gray-400">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="relative">
                      <div className="aspect-square glass-panel p-8 relative flex flex-col justify-center items-center text-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 to-[#0EA5E9]/10 opacity-50" />
                          <div className="relative z-10">
                              <ShieldCheck className="w-20 h-20 text-[#22C55E] mb-8" />
                              <h3 className="text-3xl font-bold mb-4 font-plus-jakarta uppercase">Guaranteed Delivery</h3>
                              <p className="text-gray-400 text-lg mb-8 max-w-sm">We take full ownership of the technical execution so you can focus on growth.</p>
                              <button className="btn-primary py-4 px-10 text-lg">Book a Strategy Call</button>
                          </div>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#22C55E]/20 blur-[80px] -z-10" />
                  </div>
              </div>
          </div>
      </section>

      <FAQ />

      {/* Final CTA Strip */}
      <section className="py-20 bg-gradient-to-r from-[#22C55E]/20 to-[#0EA5E9]/20 border-y border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-8">Ready to start your <span className="text-white underline decoration-[#22C55E] underline-offset-8">technical journey?</span></h2>
              <button className="btn-primary text-xl px-12 py-5 shadow-2xl">Get a Free Consultation</button>
          </div>
      </section>

      <Footer />
    </main>
  );
}
