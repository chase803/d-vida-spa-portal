import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const BRANDS = [
  {
    name: 'Alastin Skincare',
    tagline: 'Clinically Proven Results',
    description: 'Medical-grade skincare designed to enhance in-office treatment outcomes and support your skin\'s daily health. Featuring the signature TriHex Technology® to remove damaged collagen and elastin.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80',
    link: 'https://alastin.com/',
    badge: 'Staff Favorite',
  },
  {
    name: 'ZO® Skin Health',
    tagline: 'Advanced Skin Health Solutions',
    description: 'Developed by world-renowned dermatologist Dr. Zein Obagi, ZO Skin Health offers comprehensive solutions for creating and maintaining healthy skin through advanced science.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    link: 'https://zoskinhealth.com/',
    badge: null,
  },
  {
    name: 'Epionce',
    tagline: 'Barrier Repair Skincare',
    description: 'Dermatologist-developed formulas that focus on strengthening and restoring the skin barrier. Epionce products use unique botanical complexes to improve skin health from within.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
    link: 'https://www.epionce.com/',
    badge: null,
  },
  {
    name: 'HydroPeptide',
    tagline: 'Luxury Peptide Science',
    description: 'Luxurious, results-driven formulas powered by peptides and advanced actives. HydroPeptide transforms your daily routine into a spa-like experience while delivering visible anti-aging results.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
    link: 'https://www.hydropeptide.com/',
    badge: 'As Seen in Spa',
  },
  {
    name: 'Brilliant Connections',
    tagline: 'Exclusive Skincare Access',
    description: 'Gain access to exclusive skincare products and savings through the Brilliant Connections loyalty program — a gateway to premium skincare brands trusted by our providers.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    link: 'https://www.brilliantconnections.com/',
    badge: 'Loyalty Rewards',
  },
  {
    name: 'Obagi Medical',
    tagline: 'Transform Your Skin',
    description: 'Physician-developed skincare systems designed to transform skin at a cellular level — addressing signs of aging, hyperpigmentation, acne, and more with clinically proven ingredients.',
    image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&q=80',
    link: 'https://www.obagi.com/',
    badge: null,
  },
  {
    name: 'Derma Made',
    tagline: 'Post-Treatment Recovery',
    description: 'Specialized formulas developed to support and accelerate skin recovery after aesthetic treatments. Derma Made products are designed to maximize your in-office results at home.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    link: 'https://dermamade.com/',
    badge: null,
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-24 md:py-48 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
              Medical-Grade Skincare
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F9F7] tracking-tight">
              Shop Our <span className="italic">Products</span>
            </h2>
          </div>
          <p className="text-[#F9F9F7]/40 font-body text-sm leading-relaxed max-w-xs">
            Enhance your in-office results with the same medical-grade brands our providers trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {BRANDS.map((brand, i) => (
            <motion.a
              key={brand.name}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-[#242424] overflow-hidden block"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                />
              </div>

              {/* Badge */}
              {brand.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[9px] tracking-[0.25em] uppercase font-body">
                  {brand.badge}
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-body mb-1">
                  {brand.tagline}
                </p>
                <h3 className="font-display text-xl font-light text-[#F9F9F7] mb-3 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="font-body text-xs text-[#F9F9F7]/40 leading-relaxed mb-4 line-clamp-2">
                  {brand.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-[10px] tracking-[0.25em] uppercase font-body">
                  Shop Now <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://dvidaspa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Explore All Products <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}