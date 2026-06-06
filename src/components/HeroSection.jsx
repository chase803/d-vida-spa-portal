import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury serum drop refracting light in a clinical spa setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Social Spine - Left Side */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-6">
        {[
          { href: 'https://www.instagram.com/dvidamedspa_beforeandafter', label: 'IG' },
          { href: 'https://www.facebook.com/people/Dvida-Med-Spa-Chicago/100089584397594/', label: 'FB' },
          { href: 'https://www.tiktok.com/@dvida_medspa', label: 'TK' },
          { href: 'https://www.youtube.com/@dvidamedspa', label: 'YT' },
        ].map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-[10px] tracking-[0.3em] font-body uppercase hover:text-primary transition-colors duration-300 writing-vertical"
            style={{ writingMode: 'vertical-rl' }}
          >
            {s.label}
          </a>
        ))}
        <div className="w-px h-16 bg-white/20 mx-auto" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6"
        >
          Medical Aesthetics & Wellness
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.9]"
        >
          Define Your
          <br />
          <span className="italic">Beauty</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-white/60 font-body text-sm md:text-base tracking-widest uppercase"
        >
          Feel Divine
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Build Your Treatment Plan
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#stats" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}