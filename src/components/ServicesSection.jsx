import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Botox & Fillers',
    subtitle: 'Injectables',
    description: 'Precision-administered neuromodulators and dermal fillers for natural, refined results.',
    link: 'https://dvidaspa.com/botox-med-spa-chicago/',
  },
  {
    title: 'Skin Tightening',
    subtitle: 'Body Contouring',
    description: 'Advanced radiofrequency and ultrasound technologies to lift, tighten, and sculpt.',
    link: 'https://dvidaspa.com/skin-tightening-med-spa-cary-north-carolina/',
  },
  {
    title: 'IV Therapy',
    subtitle: 'Wellness',
    description: 'Customized vitamin infusions designed to restore energy, hydration, and vitality.',
    link: 'https://dvidaspa.com/medical-weight-loss-iv-therapy-ravenswood-chicago-approach/',
  },
  {
    title: 'Hair Restoration',
    subtitle: 'Regenerative',
    description: 'Cutting-edge PRP and growth factor therapies for natural hair regrowth.',
    link: 'https://dvidaspa.com/',
  },
];

export default function ServicesSection({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-24 md:py-48 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
            Treatment Curation
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F9F7] tracking-tight">
            Our <span className="italic">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer block"
            >
              <img
                src={images[i]}
                alt={service.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === i ? 'scale-95' : 'scale-100'
                }`}
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Hover frosted overlay */}
              <div
                className={`absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center ${
                  hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-3">
                  {service.subtitle}
                </p>
                <p className="text-[#F9F9F7]/70 font-body text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-6 text-primary text-[10px] tracking-[0.3em] uppercase font-body border-b border-primary pb-1">
                  Learn More
                </span>
              </div>

              {/* Default bottom label */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 ${
                  hoveredIndex === i ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-body mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-2xl text-[#F9F9F7] font-light">
                  {service.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}