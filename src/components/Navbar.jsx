import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F9F9F7]/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <a href="#" className="font-display text-2xl md:text-3xl tracking-tight">
            <span className={`transition-colors duration-500 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
              D'Vida
            </span>
            <span className="text-primary ml-1 font-light">Spa</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-body tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase rounded-none hover:bg-[#b8933f] transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F9F9F7]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-[#1A1A1A] tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}