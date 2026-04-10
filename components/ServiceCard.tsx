'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';

interface ServiceCardProps {
  service: {
    slug: string;
    title: string;
    shortDescription: string;
    icon: any;
    color: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <TiltCard className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-full">
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 to-[#0EA5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <div className="relative z-10 w-full h-full flex flex-col items-start translate-z-10">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <service.icon className="w-7 h-7" style={{ color: service.color }} />
            </div>
            <h3 className="font-inter text-xl font-bold mb-3 text-white flex items-center gap-2">
               {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">{service.shortDescription}</p>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
