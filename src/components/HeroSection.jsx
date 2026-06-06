import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1)    translateX(0)    translateY(0); }
          50%  { transform: scale(1.06) translateX(-1%)  translateY(-0.5%); }
          100% { transform: scale(1)    translateX(0)    translateY(0); }
        }
        .animate-kenburns {
          animation: kenburns 22s ease-in-out infinite;
          transform-origin: center center;
        }
        @keyframes shimmer-line {
          0%   { opacity: 0; transform: translateY(-100%); }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(100vh); }
        }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="D'Vida Spa"
          className="w-full h-full object-cover animate-kenburns"
        />
        {/* Lighter overlay so image is clearer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
        {/* Subtle left vignette to frame social links */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
      </div>

      {/* Decorative horizontal rule lines */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <div className="absolute top-[30%] left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-[70%] left-0 right-0 h-px bg-white/5" />
      </div>

      {/* Gold corner accent — top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-28 left-6 md:left-24 z-10 hidden md:block"
      >
        <div className="w-16 h-px bg-primary/60" />
        <div className="w-px h-16 bg-primary/60" />
      </motion.div>

      {/* Gold corner accent — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-24 right-6 md:right-24 z-10 hidden md:block flex flex-col items-end"
      >
        <div className="w-16 h-px bg-primary/60 ml-auto" />
        <div className="w-px h-16 bg-primary/60 ml-auto" />
      </motion.div>

      {/* Social Spine - Left Side */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
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
            className="text-white/50 text-[10px] tracking-[0.3em] font-body uppercase hover:text-primary transition-colors duration-300"
            style={{ writingMode: 'vertical-rl' }}
          >
            {s.label}
          </a>
        ))}
        <div className="w-px h-16 bg-white/20 mx-auto" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Eyebrow with flanking lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-primary/70" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body">
            Medical Aesthetics & Wellness
          </p>
          <div className="w-8 h-px bg-primary/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.9]"
        >
          Define Your
          <br />
          <span className="italic text-white">Beauty</span>
        </motion.h1>

        {/* Thin gold separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 w-10 h-px bg-primary origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-white/55 font-body text-sm md:text-base tracking-[0.4em] uppercase"
        >
          Feel Divine
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Build Your Treatment Plan
        </motion.a>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8 md:gap-14"
        >
          {[
            { value: '4,000+', label: '5-Star Reviews' },
            { value: '14+', label: 'Years of Service' },
            { value: '30,000+', label: 'Treatments' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-xl md:text-2xl text-white font-light">{stat.value}</p>
              <p className="font-body text-[9px] md:text-[10px] text-white/40 tracking-[0.25em] uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#stats" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}