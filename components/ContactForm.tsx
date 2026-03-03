'use client';

import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 relative bg-[#0B0F19] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0EA5E9]/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#22C55E]/10 to-transparent blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left side text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="font-agency text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Ready to <span className="text-gradient">Innovate?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Drop us a message. Whether you have a project in mind or just want to chat about the future of AI in your business, we're ready when you are.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#22C55E]">
                 <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email Us</p>
                <p className="font-medium">shahhussaindev@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg"
        >
          <form className="glass-panel p-8 md:p-10 flex flex-col gap-6 relative overflow-visible group mt-5 md:mt-0">
             {/* Glow effect that follows form slightly */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] rounded-2xl opacity-0 hover:opacity-10 md:group-hover:opacity-20 blur-md transition-opacity duration-700 pointer-events-none -z-10"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#0B0F19]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#22C55E]/50 focus:ring-1 focus:ring-[#22C55E]/50 transition-all shadow-inner"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#0B0F19]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0EA5E9]/50 focus:ring-1 focus:ring-[#0EA5E9]/50 transition-all shadow-inner"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="w-full bg-[#0B0F19]/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#22C55E]/50 focus:ring-1 focus:ring-[#22C55E]/50 transition-all resize-none shadow-inner"
                  required
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#0EA5E9] text-white font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-shadow mt-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
