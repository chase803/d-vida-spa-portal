import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const SERVICES = [
  {
    title: 'Botox',
    description: 'Turn back time and smooth away wrinkles to restore your youthful features with strategic injections.',
    link: 'https://dvidaspa.com/treatment/botox-in-chicago/',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80',
  },
  {
    title: 'IV Nutrition',
    description: 'Enhance your wellness with strategic nutrients that leave you feeling revitalized and refreshed.',
    link: 'https://dvidaspa.com/treatment/iv-therapy-in-chicago/',
    image: 'https://dvidaspa.com/wp-content/uploads/2024/10/Dvida-Spa-IV-therapy-0404-1024x682.jpg',
  },
  {
    title: 'PRP Hair Restoration',
    description: 'Male pattern baldness is a thing of the past with a targeted, minimally invasive solution.',
    link: 'https://dvidaspa.com/treatment/hair-restoration-in-chicago/',
    image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-PRP-Hair-Restoration-1.jpeg',
  },
  {
    title: 'Hormone Therapy',
    description: 'Feeling not quite yourself? Restore your balance with hormone therapy customized to your needs.',
    link: 'https://dvidaspa.com/treatment/bioidentical-hormone-therapy-in-chicago/',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    title: 'CoolSculpting Elite',
    description: 'Eliminate stubborn fat pockets permanently with FDA-cleared body contouring — no surgery, no downtime.',
    link: 'https://dvidaspa.com/treatment-category/skin-tightening/',
    image: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-1-768x341.jpeg',
  },
  {
    title: 'Laser Hair Removal',
    description: 'Say goodbye to unwanted hair permanently with precision laser technology suited for all skin types.',
    link: 'https://dvidaspa.com/treatment/laser-hair-removal-in-chicago/',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
  },
];

const REVIEWS = [
  {
    name: 'Mohammed',
    text: 'I had a fantastic experience with Rose at Dvida Med Spa for my underarm hair removal treatment. She was professional, knowledgeable, and made the process comfortable. Highly recommend!',
  },
  {
    name: 'Marcus',
    text: 'As a guy I was a little nervous coming in, but the staff made me feel completely at ease. My Botox results are subtle and natural — exactly what I wanted. Great experience all around.',
  },
  {
    name: 'David',
    text: 'The PRP hair restoration treatments have made a noticeable difference. The team is professional and the results speak for themselves. I feel more confident than I have in years.',
  },
];

export default function MensTreatments() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://dvidaspa.com/wp-content/uploads/2024/10/Dvida-Spa-Chicago-MSC-2238-1024x682.jpg"
          alt="Treatments for Men"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-5">
              Tailored For Him
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white tracking-tight leading-[0.95]">
              Treatments <br /><span className="italic">For Men</span>
            </h1>
            <div className="mt-6 w-10 h-px bg-primary mx-auto" />
            <a
              href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Build My Treatment Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">The Modern Gentleman</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight mb-6">
              Enhance Your Appearance With <span className="italic">Customized Care</span>
            </h2>
            <p className="font-body text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
              At Dvida Spa, we cater to the modern gentleman. We craft treatments tailored to prioritize timeless style and lasting results.
            </p>
            <p className="font-body text-[#1A1A1A]/60 text-sm leading-relaxed">
              From advanced laser procedures to rejuvenating facial treatments, our services elevate your aesthetic on <em>your</em> terms — with zero judgment and complete discretion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://dvidaspa.com/wp-content/uploads/2024/10/Dvida-Spa-Moxi-3137-1024x682.jpg"
              alt="Men's treatment at DVida Spa"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-5">Our Signature Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F9F9F7] tracking-tight">
              Experience <span className="italic">Refined Self-Care</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden bg-[#242424] block"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-light text-[#F9F9F7] mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[#F9F9F7]/40 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-[10px] tracking-[0.25em] uppercase font-body">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-5">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
              Hear From Our <span className="italic">Happy Clients</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F9F9F7] p-8"
              >
                <p className="text-primary text-2xl font-display italic mb-4">"</p>
                <p className="font-body text-sm text-[#1A1A1A]/60 leading-relaxed mb-6">{review.text}</p>
                <p className="font-display text-lg text-[#1A1A1A]">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-5">Get Started</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F9F9F7] tracking-tight mb-10">
            Ready to <span className="italic">Elevate</span> Your Look?
          </h2>
          <a
            href="https://dvidaspa.com/treatment-plan-builder-choosing-locations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Build My Treatment Plan <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  );
}