'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import TiltCard from './TiltCard';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, TechFlow',
    content: 'Growthai delivered our MVP in record time. Their AI-accelerated process is no joke. We saved roughly 40% on development time.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO, OmniScale',
    content: 'The engineering quality is enterprise-grade. It is rare to find a team that moves this fast while maintaining clean architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'Aisha Patel',
    role: 'Product Lead, GreenNative',
    content: 'More than just developers, they are product thinkers. They helped us refine our UX and improved our conversion rates.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'David Kim',
    role: 'CEO, Nexus AI',
    content: 'The AI integration work they did for us was transformative. We now handle 3x more volume with the same team size.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'Emma Thompson',
    role: 'Founder, Bloom Health',
    content: 'Professional, transparent, and incredibly fast. Growthai is the rare partner that under-promises and over-delivers.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'James Wilson',
    role: 'CTO, FintechNow',
    content: 'Security was our primary concern. The team built a robust, encrypted system that passed all our rigorous audits.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    name: 'Sofia Rossi',
    role: 'Director, Modulo',
    content: 'Their UI/UX team is world-class. They took our complex vision and turned it into an intuitive, beautiful experience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-[350px] md:w-[450px] shrink-0 mx-4">
    <TiltCard className="glass-panel p-6 md:p-10 h-full flex flex-col relative group border-white/5 hover:border-[#22C55E]/30 transition-all">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#22C55E]/10 transition-colors" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#22C55E]/20 p-1 bg-[#0B0F19]">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">{t.name}</h4>
          <p className="text-[#22C55E] text-xs font-bold uppercase tracking-widest">{t.role}</p>
          <div className="flex gap-1 mt-1 text-yellow-500/80">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed italic text-lg line-clamp-4">
        "{t.content}"
      </p>
    </TiltCard>
  </div>
);

export default function Testimonials() {
  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials.reverse(), ...testimonials];

  return (
    <section className="py-24 md:py-32 relative bg-[#0B0F19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-plus-jakarta text-4xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Built for <span className="text-gradient">Founders</span> <br />
          Loved by Teams
        </motion.h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-inter">
          Join 50+ successful startups and businesses that trust Growthai for their mission-critical product development.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-8">
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
            }}
            className="flex hover:[animation-play-state:paused]"
          >
            {firstRow.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
                duration: 45, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
            }}
            className="flex"
          >
            {secondRow.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-[#22C55E]/5 to-[#0EA5E9]/5 blur-[120px] rounded-full -translate-y-1/2 -z-10 pointer-events-none" />
    </section>
  );
}
