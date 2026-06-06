import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection({ interiorImage, portraitImage }) {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
              Est. 2010
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              The Leading
              <br />
              <span className="italic">Med Spa</span>
            </h2>
            <div className="w-12 h-px bg-primary mb-8" />
            <p className="font-body text-[#1A1A1A]/60 text-base md:text-lg leading-relaxed mb-6">
              For years, our clients have trusted D'Vida Spa to provide the latest, state-of-the-art transformative treatments. From skin rejuvenation to hair restoration to hormone replacement therapy, our dedicated experts are here to help you feel better, look better, and live better.
            </p>
            <p className="font-body text-[#1A1A1A]/60 text-base md:text-lg leading-relaxed mb-10">
              With locations in Chicago, IL and Cary, NC, we bring clinical precision and personalized care to every treatment.
            </p>
            <a
              href="https://dvidaspa.com/before-and-after/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] text-xs tracking-[0.3em] uppercase font-body hover:bg-[#1A1A1A] hover:text-[#F9F9F7] transition-all duration-500"
            >
              View Results
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={interiorImage}
                alt="Luxury minimalist med spa interior with natural sunlight"
                className="w-full aspect-[4/3] object-cover"
              />
              <img
                src={portraitImage}
                alt="Beautiful radiant skin after med spa treatment"
                className="absolute -bottom-12 -left-8 w-40 md:w-52 aspect-[3/4] object-cover shadow-2xl hidden md:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}