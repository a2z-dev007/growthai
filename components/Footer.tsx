'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-white/10 pt-12 md:pt-20 relative overflow-hidden flex flex-col items-center">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[200px] bg-gradient-glow opacity-5 pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <img src="/growth-logo-ai.png" alt="GrowthAI Logo" className="h-32 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-inter">
              Growthai builds scalable digital products for startups and ambitious businesses through AI-powered development and elite engineering execution.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#22C55E] hover:border-[#22C55E] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-[#0EA5E9] hover:border-[#0EA5E9] hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-gray-400 hover:text-[#22C55E] transition-colors">About Us</Link></li>
              <li><Link href="/#framework" className="text-gray-400 hover:text-[#22C55E] transition-colors">Our Process</Link></li>
              {/* <li><Link href="/#projects" className="text-gray-400 hover:text-[#22C55E] transition-colors">Projects</Link></li> */}
              <li><Link href="/faq" className="text-gray-400 hover:text-[#22C55E] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/web-application-development" className="text-gray-400 hover:text-[#22C55E] transition-colors">Web Apps</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-gray-400 hover:text-[#22C55E] transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/ai-automation-solutions" className="text-gray-400 hover:text-[#22C55E] transition-colors">AI & Automation</Link></li>
              <li><Link href="/services/mvp-development" className="text-gray-400 hover:text-[#22C55E] transition-colors">MVP Dev</Link></li>
              <li><Link href="/services" className="text-white font-bold hover:text-[#22C55E] transition-colors flex items-center gap-2">View All <ArrowRight size={14} /></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@growthai.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 group-hover:text-[#0EA5E9]" />
                  <span>contact@growthai.in</span>
                </a>
              </li>
              {/* <li>
                <a href="tel:+917071967997" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 group-hover:text-[#22C55E]" />
                  <span>+91 7071967997</span>
                </a>
              </li> */}
              <li>
                <a href="https://growthai.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Globe className="w-4 h-4 group-hover:text-[#0EA5E9]" />
                  <span>growthai.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GrowthAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Background Brand Text in static flow so it doesn't overlap text */}
      <div className="w-full flex justify-center items-center pointer-events-none select-none z-0 px-4 pb-4 md:pb-8 overflow-hidden">
        <span className="text-[14vw] md:text-[14vw] font-black leading-none uppercase tracking-tighter whitespace-nowrap animate-text-edge pr-1">
          GROWTHAI
        </span>
      </div>
    </footer>
  );
}
