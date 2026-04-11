'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How fast can you launch an MVP?',
    answer: 'Typical MVP timelines range from 4 to 8 weeks depending on complexity. We focus on the core value proposition to get you to market as fast as possible.'
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, every project comes with a 90-day warranty and optional long-term maintenance plans to ensure your product scales smoothly.'
  },
  {
    question: 'Can you integrate AI into my existing app?',
    answer: 'Absolutely. We specialize in building custom AI copilots and RAG systems that can be integrated into your existing software stack.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We provide weekly demos, daily slack updates, and a dedicated project manager to ensure complete transparency throughout the development cycle.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C55E]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-plus-jakarta text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Service <span className="text-gradient">FAQ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-inter text-lg"
          >
            Common questions about working with Growthai.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="glass-panel border-white/5 group open:bg-white/[0.05] transition-all duration-300">
              <summary className="p-6 md:p-8 cursor-pointer flex items-center justify-between list-none">
                <h3 className="text-lg md:text-xl font-bold font-plus-jakarta pr-8">{faq.question}</h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                  <Plus className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-gray-400 text-base md:text-lg leading-relaxed font-inter">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
