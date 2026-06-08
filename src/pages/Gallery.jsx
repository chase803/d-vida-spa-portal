import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const GALLERY = [
  { id: 1, label: 'Botox', category: 'Injectables', area: 'Forehead', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Botox-1a-768x310.jpeg', link: 'https://dvidaspa.com/before-and-after/botox-1/' },
  { id: 2, label: 'Botox', category: 'Injectables', area: 'Forehead', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Botox-2a.jpeg', link: 'https://dvidaspa.com/before-and-after/botox-2/' },
  { id: 3, label: 'Acne Clear BBL Photofacial + VI Peel', category: 'Laser Treatments', area: 'Face', image: 'https://dvidaspa.com/wp-content/uploads/2025/04/109-768x348.jpg', link: 'https://dvidaspa.com/before-and-after/acne-clear-bbl-photofacial/' },
  { id: 4, label: 'Chin Augmentation', category: 'Injectables', area: 'Chin', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Chin-Augmentation-1a-768x363.jpeg', link: 'https://dvidaspa.com/before-and-after/chin-augmentation-1/' },
  { id: 5, label: 'Face Filler', category: 'Injectables', area: 'Chin', image: 'https://dvidaspa.com/wp-content/uploads/2026/02/chin-fillers-768x452.avif', link: 'https://dvidaspa.com/before-and-after/chin-filler/' },
  { id: 6, label: 'CoolSculpting', category: 'Body Treatments', area: 'Abdomen', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-1-768x341.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-1/' },
  { id: 7, label: 'CoolSculpting', category: 'Body Treatments', area: 'Flanks', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-2-768x628.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-2/' },
  { id: 8, label: 'CoolSculpting', category: 'Body Treatments', area: 'Torso', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-3-768x521.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-3/' },
  { id: 9, label: 'CoolSculpting', category: 'Body Treatments', area: 'Abdomen', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-4-607x768.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-4/' },
  { id: 10, label: 'CoolSculpting', category: 'Body Treatments', area: 'Arms', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-5.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-5/' },
  { id: 11, label: 'CoolSculpting', category: 'Body Treatments', area: 'Flanks', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-6-768x373.jpeg', link: 'https://dvidaspa.com/before-and-after/coolsculpting-6/' },
  { id: 12, label: 'Dysport', category: 'Injectables', area: 'Forehead', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Dysport-1a-768x311.jpeg', link: 'https://dvidaspa.com/before-and-after/dysport-1/' },
  { id: 13, label: 'Hair Restoration (PRP)', category: 'Hair Restoration', area: 'Scalp', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-PRP-Hair-Restoration-1.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
  { id: 14, label: 'Non-Surgical Hair Restoration', category: 'Hair Restoration', area: 'Scalp', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Non-Surgical-Hair-Restoration-1a.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
  { id: 15, label: 'Sylfirm X RF Microneedling', category: 'Skin Tightening', area: 'Face', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Sylfirm-X-RF-Microneedling-1.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
  { id: 16, label: 'Lip Filler', category: 'Injectables', area: 'Lips', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Lip-Filler-1a.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
  { id: 17, label: 'Dermal Filler', category: 'Injectables', area: 'Face', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Dermal-Filler-1a.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
  { id: 18, label: 'VI Peel', category: 'Laser Treatments', area: 'Face', image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-VI-Peel-1a.jpeg', link: 'https://dvidaspa.com/before-and-after/' },
];

const CATEGORIES = ['All', 'Injectables', 'Body Treatments', 'Laser Treatments', 'Skin Tightening', 'Hair Restoration'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() =>
    activeCategory === 'All' ? GALLERY : GALLERY.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-[#F0EDE8]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-[#1A1A1A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-5">
            Before &amp; After
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-[#F9F9F7] tracking-tight">
            Results <span className="italic">Gallery</span>
          </h1>
          <div className="mt-6 w-10 h-px bg-primary mx-auto" />
          <p className="mt-5 text-[#F9F9F7]/40 font-body text-sm tracking-wide max-w-md mx-auto">
            Real patients, real results. Browse our collection of before-and-after photos across all treatment categories.
          </p>
          <a
            href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Book My Appointment
          </a>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-[#F0EDE8] border-b border-[#1A1A1A]/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-body transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-[#F9F9F7] border-[#1A1A1A]'
                  : 'bg-transparent text-[#1A1A1A]/50 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50 hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid group relative overflow-hidden bg-[#F9F9F7] cursor-pointer mb-5"
                  onClick={() => setSelected(item)}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.minHeight = '0'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-body mb-1">{item.category}</p>
                    <p className="text-white font-display text-lg font-light">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-[#1A1A1A]/40 font-body text-sm py-20">No results in this category.</p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://dvidaspa.com/before-and-after/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1A1A1A]/50 text-[10px] tracking-[0.3em] uppercase font-body border-b border-[#1A1A1A]/30 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-300"
            >
              View Full Gallery on DVida.com <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-[#1A1A1A]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selected.image}
                alt={selected.label}
                className="w-full object-contain max-h-[70vh]"
              />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-primary text-[9px] tracking-[0.35em] uppercase font-body mb-1">{selected.category} · {selected.area}</p>
                  <h3 className="font-display text-2xl font-light text-[#F9F9F7]">{selected.label}</h3>
                </div>
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary text-[10px] tracking-[0.25em] uppercase font-body hover:opacity-70 transition-opacity"
                >
                  View Details <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
}