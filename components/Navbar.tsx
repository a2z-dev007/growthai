'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', onClick: (e: any) => { setIsOpen(false); if(pathname === '/') { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); } } },
    { name: 'About Us', href: '/#about', hash: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Process', href: '/#framework', hash: '#framework' },
    { name: 'Projects', href: '/#projects', hash: '#projects' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative">
            <img src="/growth-logo-ai.png" alt="GrowthAI Logo" className="h-14 md:h-16 w-auto" />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={link.onClick || (link.hash ? (e) => handleNavClick(e, link.hash!) : undefined)}
                className={`text-sm font-medium transition-colors ${
                  (link.href === '/services' && pathname.startsWith('/services')) ? 'text-[#22C55E]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative">
            <div className="hidden md:block">
              <Link href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary py-2 px-6 text-xs md:text-sm">
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer & Backdrop - Moved Outside Nav */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Drawer Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-xs bg-[#0B0F19] border-l border-white/20 p-8 pt-24 shadow-2xl flex flex-col"
              style={{ backgroundColor: '#0B0F19' }}
            >
              <button 
                className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={link.onClick || (link.hash ? (e) => handleNavClick(e, link.hash!) : undefined)}
                    className={`text-2xl font-bold transition-colors ${
                      (link.href === '/services' && pathname.startsWith('/services')) ? 'text-[#22C55E]' : 'text-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href="/#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-primary py-4 px-6 text-center text-sm mt-4 shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
