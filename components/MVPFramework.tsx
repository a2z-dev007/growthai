'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from './TiltCard';

const steps = [
  {
    number: '01',
    title: 'Strategy & Architecture',
    description: 'We audit your business needs, map out technical requirements, and design a scalable architecture for your product.',
  },
  {
    number: '02',
    title: 'UI/UX Prototyping',
    description: 'Interactive wireframes and high-fidelity designs are crafted to ensure an intuitive and premium user experience.',
  },
  {
    number: '03',
    title: 'Agile Full-Stack Development',
    description: 'Our expert engineers build your product using robust technologies, ensuring high performance and security.',
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description: 'We handle the global launch, provide ongoing maintenance, and iterate based on performance analytics.',
  },
];

export default function MVPFramework() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="framework" className="py-16 md:py-32 relative bg-[#0B0F19]" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-plus-jakarta text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Rapid MVP <span className="text-gradient">Framework</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From concept to launch in weeks, not months. Our proven process guarantees speed without sacrificing quality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ height }}
              className="w-full bg-gradient-to-b from-[#22C55E] to-[#0EA5E9]"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-[#0B0F19] border-4 border-[#22C55E] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />

                <div className="w-full md:w-1/2" />
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-1/2 pl-20 md:pl-0 h-full"
                >
                  <TiltCard className={`glass-panel p-8 relative overflow-hidden group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="absolute -right-4 -top-4 text-8xl font-plus-jakarta font-bold text-white/5 transition-transform group-hover:scale-110 duration-500 pointer-events-none">
                      {step.number}
                    </div>
                    <h3 className="font-plus-jakarta text-2xl font-bold mb-4 text-white relative z-10">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed relative z-10">{step.description}</p>
                  </TiltCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
