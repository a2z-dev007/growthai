'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Startup MVP',
    price: '₹2L',
    period: '/project',
    description: 'Perfect for early-stage startups needing a rapid prototype to validate their idea.',
    features: [
      'Core MVP Features',
      'Basic AI Integration',
      'Responsive Web App',
      '2 Weeks Delivery',
      '1 Month Support',
    ],
    highlight: false,
  },
  {
    name: 'Growth Package',
    price: '₹5L',
    period: '/project',
    description: 'For businesses ready to launch a fully-featured product with advanced capabilities.',
    features: [
      'Advanced AI Models',
      'Custom Design System',
      'Web & Mobile App',
      '4 Weeks Delivery',
      '3 Months Support',
      'Scalable Architecture',
    ],
    highlight: true,
  },
  {
    name: 'Premium AI',
    price: '₹10L',
    period: '/project',
    description: 'Enterprise-grade solutions with custom LLMs, complex integrations, and high performance.',
    features: [
      'Custom LLM Fine-tuning',
      'Complex Integrations',
      'High-Performance Backend',
      '8 Weeks Delivery',
      '6 Months Support',
      'Dedicated Team',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 relative bg-[#0B0F19]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-agency text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
          >
            Invest in a scalable future. No hidden fees, just pure value and rapid execution.
          </motion.p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Project Based</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-[#22C55E] to-[#0EA5E9]"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Retainer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative p-8 rounded-3xl border ${plan.highlight ? 'border-[#22C55E] bg-white/5 shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'border-white/10 glass-panel'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-agency text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-agency font-bold text-white">{isAnnual ? 'Custom' : plan.price}</span>
                {!isAnnual && <span className="text-gray-400 ml-2">{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#22C55E]" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] text-white hover:scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
