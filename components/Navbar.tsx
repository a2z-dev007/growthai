'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/growth-logo-ai.png" alt="GrowthAI Logo" className="h-16 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/#framework" onClick={(e) => handleNavClick(e, '#framework')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Framework</Link>
          <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Work</Link>
          {/* <Link href="/#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link> */}
        </div>

        <a href="tel:+917071967997" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all hover:scale-105 active:scale-95 inline-block">
          Consult Now
        </a>
      </div>
    </motion.nav>
  );
}
