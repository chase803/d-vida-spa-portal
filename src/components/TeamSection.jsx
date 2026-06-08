import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const TEAM = [
  // Chicago
  {
    name: 'Charles D. Campbell, M.D.',
    role: 'Owner & Medical Director',
    location: 'Chicago',
    image: 'https://dvidaspa.com/wp-content/uploads/2025/01/dr-charles-565x768.jpg',
    specialties: ['Cardio-Thoracic Surgery', 'Anti-Aging Medicine', 'Medical Oversight'],
    bio: 'Dr. Charles H. Campbell, a Board-Certified Cardio-Thoracic Surgeon, serves as the Medical Director of Dvida Med Spa. With decades of experience in surgery, academia, and anti-aging medicine, Dr. Campbell brings unparalleled expertise to the spa\'s innovative, personalized treatments. His leadership ensures clients receive the highest standard of care, blending medical precision with a commitment to wellness and aesthetics.',
    link: 'https://dvidaspa.com/team-member/dr-charles-h-campbell-m-d/',
  },
  {
    name: 'Diana C',
    role: 'Advanced Aesthetic & Laser Expert',
    location: 'Both',
    image: 'https://dvidaspa.com/wp-content/uploads/2024/10/Diana-1-565x768.jpg',
    specialties: ['Candela Laser Hair Removal', 'Forever Young BBL Photofacial', 'IPL'],
    bio: 'Diana\'s journey began in Ukraine, where she attended law school. After moving to the USA in 2000, her focus shifted to skincare, driven by her personal skin struggles. This passion led her to become a certified esthetician and laser technician in 2008. With over 16+ years of experience, Diana has honed her expertise in advanced skincare techniques. As a co-founder of Dvida Spa in 2013, Diana serves as the Head of Aestheticians and Laser Trainer, providing expert care and guidance to her team.',
    link: 'https://dvidaspa.com/team-member/diana-c/',
  },
  {
    name: 'Olga B',
    role: 'Advanced Aesthetic Injector NP',
    location: 'Chicago',
    image: 'https://dvidaspa.com/wp-content/uploads/2024/11/olga-2-1-565x768.avif',
    specialties: ['Hair Restoration', 'PRP Injectables', 'RF Microneedling'],
    bio: 'A dedicated member of the Dvida Spa team since 2013, Olga holds a distinguished Bachelor\'s in Nursing and specializes in Microneedling RF, hair restoration, and treatment recommendations. Her passion lies in harnessing the latest advancements to support graceful aging. Her approach is always tailored, focusing on delivering naturally exquisite results with trust, compassion, and expertise.',
    link: 'https://dvidaspa.com/team-member/olga-bilonozhiko/',
  },
  {
    name: 'Veronica M',
    role: 'Advanced Aesthetic & Laser Specialist',
    location: 'Chicago',
    image: 'https://dvidaspa.com/wp-content/uploads/2024/11/Veronica-565x768.jpg',
    specialties: ['Laser Treatments', 'Advanced Aesthetics', 'Skin Rejuvenation'],
    bio: 'Veronica is an advanced aesthetic and laser specialist at Dvida Spa Chicago, bringing a refined skill set in cutting-edge laser technologies and skin rejuvenation treatments. Her dedication to continuous education and client-centered care ensures every guest receives a personalized, transformative experience.',
    link: 'https://dvidaspa.com/team-member/veronica-mora/',
  },
  {
    name: 'Lauren H',
    role: 'Aesthetic Injector RN',
    location: 'Chicago',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/05/Lauren-H-512x768.jpeg',
    specialties: ['Dermal Fillers', 'HydroPeptide Facial', 'Injectables', 'Lasers & Lights', 'Neurotoxins'],
    bio: 'Lauren is an Aesthetic Nurse Injector and laser technician with 9 years of experience in medical aesthetics. She specializes in preventative and corrective botox, natural lip enhancements, and facial rejuvenation. She takes a personalized approach, carefully considering each client\'s unique features and aesthetic goals to create customized treatment plans. Lauren combines her clinical expertise with an artistic eye to help clients feel confident, refreshed, and empowered.',
    link: 'https://dvidaspa.com/team-member/lauren-h/',
  },
  // Cary
  {
    name: 'Dr. Aaron G',
    role: 'Medical Director',
    location: 'Cary, NC',
    image: 'https://dvidaspa.com/wp-content/uploads/2024/11/Aaron-576x768.jpg',
    specialties: ['Internal Medicine', 'Medical Oversight', 'Patient Wellness'],
    bio: 'Dr. Goldstein comes to us with extensive medical experience, finishing his undergraduate degree at Northwestern and completing medical school at the University of Illinois. He did residencies at both Loyola University Medical Center and Eisenhower Medical Center in California. Trained in internal medicine, he prides himself on focusing on the whole person rather than just the illness, maximizing health outcomes for all patients.',
    link: 'https://dvidaspa.com/team-member/dr-aaron-g/',
  },
  {
    name: 'Tatiana B',
    role: 'Advanced Aesthetic Injector RN',
    location: 'Cary, NC',
    image: 'https://dvidaspa.com/wp-content/uploads/2025/04/tatiana-563x768.jpg',
    specialties: ['Botox', 'Dermal Fillers', 'RF Microneedling', 'Body Sculpting', 'IV Therapy'],
    bio: 'Tatiana is a licensed aesthetic nurse with over a decade of experience in the aesthetic industry, specializing in high-end, results-driven cosmetic treatments. With a refined focus on injectables, she blends clinical precision with artistic expertise to deliver natural, elegant enhancements. Known for her meticulous technique and warm, attentive care, Tatiana is dedicated to providing a personalized aesthetic experience—leaving clients feeling confident, refreshed, and at home in their own skin.',
    link: 'https://dvidaspa.com/team-member/tatiana/',
  },
  {
    name: 'Madison G',
    role: 'Aesthetician & Laser Specialist',
    location: 'Cary, NC',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/04/madison-609x768.png',
    specialties: ['Laser Treatments', 'Facials', 'Skin Care'],
    bio: 'Madison is an Aesthetician & Laser Specialist at Dvida Spa Cary, passionate about helping clients reveal their most radiant skin through advanced laser treatments and customized facials. Her thorough consultations and gentle, expert touch make every visit a comfortable, confidence-boosting experience.',
    link: 'https://dvidaspa.com/team-member/madison-g/',
  },
  {
    name: 'Taryn B',
    role: 'Advanced Aesthetic Injector RN',
    location: 'Cary, NC',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/05/Taryn-Backus.jpg',
    specialties: ['Injectables', 'Neurotoxins', 'Dermal Fillers'],
    bio: 'Taryn is an Advanced Aesthetic Injector RN at Dvida Spa Cary, bringing a clinical approach and an artistic perspective to every injectable treatment. Her focus on natural-looking results and personalized care ensures each client leaves feeling refreshed and beautifully enhanced.',
    link: 'https://dvidaspa.com/team-member/taryn-b/',
  },
];

function TeamModal({ member, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="relative bg-[#F9F9F7] max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/20 transition-colors"
          >
            <X className="w-4 h-4 text-[#1A1A1A]" />
          </button>

          {/* Photo */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 md:h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-body flex items-center gap-1.5 mb-3">
              <MapPin className="w-2.5 h-2.5" /> {member.location}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-light text-[#1A1A1A] mb-1">{member.name}</h3>
            <p className="font-body text-sm text-[#1A1A1A]/50 tracking-wide mb-5">{member.role}</p>

            <div className="w-8 h-px bg-primary mb-5" />

            <p className="font-body text-sm text-[#1A1A1A]/70 leading-relaxed mb-6">{member.bio}</p>

            {member.specialties?.length > 0 && (
              <div className="mb-6">
                <p className="text-[9px] tracking-[0.3em] uppercase font-body text-[#1A1A1A]/40 mb-2">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map(s => (
                    <span key={s} className="px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-body border border-primary/40 text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase font-body hover:bg-[#1A1A1A] hover:text-[#F9F9F7] transition-all duration-400"
            >
              Full Profile
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function TeamSection() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const locations = ['All', 'Chicago', 'Cary, NC'];
  const filtered = filter === 'All' ? TEAM : TEAM.filter(m => m.location === filter || m.location === 'Both');

  return (
    <>
      <section id="team" className="py-24 md:py-48 px-6 md:px-12 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
              The People Behind Your Results
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
              Meet Our <span className="italic">Team</span>
            </h2>
          </motion.div>

          {/* Location filter */}
          <div className="flex justify-center gap-3 mb-14">
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setFilter(loc)}
                className={`px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-body transition-colors duration-200 ${
                  filter === loc
                    ? 'bg-[#1A1A1A] text-[#F9F9F7]'
                    : 'border border-[#1A1A1A]/20 text-[#1A1A1A]/60 hover:border-primary hover:text-primary'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filtered.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group cursor-pointer"
                onClick={() => setSelected(member)}
              >
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-display text-lg font-light text-[#1A1A1A] leading-tight group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#1A1A1A]/40 mt-1">
                  {member.role}
                </p>
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-primary mt-0.5 flex items-center gap-1">
                  <MapPin className="w-2 h-2" /> {member.location}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <a
              href="https://dvidaspa.com/aestheticians-in-chicago/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs tracking-[0.3em] uppercase font-body hover:bg-[#1A1A1A] hover:text-[#F9F9F7] transition-all duration-500"
            >
              Book with Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </>
  );
}