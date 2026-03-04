'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, X } from 'lucide-react';

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      color: '#25D366',
      href: 'https://wa.me/1234567890', // Replace with actual number
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      color: '#0EA5E9',
      href: 'mailto:contact@growthai.com', // Replace with actual email
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      color: '#22C55E',
      href: 'tel:+1234567890', // Replace with actual number
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: 20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.23, 0.03, 0.26, 0.9] }}
            className="absolute bottom-full right-0 mb-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3 pb-2">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.id}
                  href={option.href}
                  target={option.id === 'email' || option.id === 'phone' ? '_self' : '_blank'}
                  rel={option.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -20 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.23, 0.03, 0.26, 0.9]
                  }}
                  whileHover={{ scale: 1.1, x: 0 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-panel backdrop-blur-xl border border-white/20 shadow-2xl hover:border-white/30 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <option.icon 
                    className="w-5 h-5 transition-colors" 
                    style={{ color: option.color }} 
                  />
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {option.label}
                  </span>
                  <div 
                    className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: option.color }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.23, 0.03, 0.26, 0.9],
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-16 h-16 rounded-full glass-panel backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(34,197,94,0.2)] hover:shadow-[0_8px_40px_rgba(34,197,94,0.3)] transition-all overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        }}
      >
        {/* Liquid shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "linear",
            repeatDelay: 3
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/20 to-[#0EA5E9]/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center rounded-full">
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Mail className="w-7 h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
