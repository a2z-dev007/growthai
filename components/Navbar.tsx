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
    } else {
      // If not on home page, allow default Link behavior to go to "/#hash"
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
          <Link href="/" onClick={(e) => { if(pathname === '/') { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); } }} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className={`text-sm font-medium transition-colors ${pathname.startsWith('/services') ? 'text-[#22C55E]' : 'text-gray-300 hover:text-white'}`}>Services</Link>
          <Link href="/#framework" onClick={(e) => handleNavClick(e, '#framework')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Process</Link>
          <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projects</Link>
        </div>

        <Link href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary py-2 px-6 text-xs md:text-sm">
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}
