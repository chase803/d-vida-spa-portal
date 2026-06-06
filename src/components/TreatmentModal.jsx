import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function TreatmentModal({ treatment, onClose }) {
  if (!treatment) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
          className="relative z-10 bg-[#F9F9F7] w-full md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-none"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/20 transition-colors rounded-full"
          >
            <X className="w-4 h-4 text-[#1A1A1A]" />
          </button>

          {/* Header */}
          <div className="bg-[#1A1A1A] px-8 py-10">
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-3">
              {treatment.subtitle}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#F9F9F7] leading-tight">
              {treatment.title}
            </h2>
            <p className="mt-3 text-[#F9F9F7]/60 font-body text-sm leading-relaxed">
              {treatment.tagline}
            </p>
          </div>

          {/* At a Glance */}
          <div className="px-8 py-6 border-b border-[#1A1A1A]/10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {treatment.glance.map((item, i) => (
              <div key={i}>
                <p className="text-[9px] tracking-[0.3em] uppercase font-body text-[#1A1A1A]/40 mb-1">{item.label}</p>
                <p className="font-body text-sm text-[#1A1A1A] font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-8">

            {/* Description */}
            <div>
              <p className="font-body text-[#1A1A1A]/70 text-base leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* What We Treat */}
            {treatment.treats && (
              <div>
                <h3 className="font-display text-xl font-light text-[#1A1A1A] mb-4">What We Treat</h3>
                <div className="flex flex-wrap gap-2">
                  {treatment.treats.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 border border-[#1A1A1A]/20 text-[#1A1A1A]/70 text-xs tracking-widest uppercase font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Options */}
            {treatment.options && (
              <div>
                <h3 className="font-display text-xl font-light text-[#1A1A1A] mb-4">Your Treatment Options</h3>
                <div className="space-y-4">
                  {treatment.options.map((opt, i) => (
                    <div key={i} className="border-l-2 border-primary pl-4">
                      <p className="font-body font-medium text-sm text-[#1A1A1A] mb-1">{opt.name}</p>
                      <p className="font-body text-sm text-[#1A1A1A]/60 leading-relaxed">{opt.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What You'll Experience */}
            {treatment.experience && (
              <div>
                <h3 className="font-display text-xl font-light text-[#1A1A1A] mb-4">What You'll Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {treatment.experience.map((e, i) => (
                    <div key={i} className="bg-[#1A1A1A]/5 p-4">
                      <p className="font-body font-medium text-xs text-[#1A1A1A] mb-2 tracking-wide">{e.title}</p>
                      <p className="font-body text-xs text-[#1A1A1A]/60 leading-relaxed">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pre/Post Care */}
            {treatment.care && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-lg font-light text-[#1A1A1A] mb-3">Pre-Care</h3>
                  <ul className="space-y-2">
                    {treatment.care.pre.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-body text-[#1A1A1A]/60 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-light text-[#1A1A1A] mb-3">Post-Care</h3>
                  <ul className="space-y-2">
                    {treatment.care.post.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-body text-[#1A1A1A]/60 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <a
              href={treatment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase font-body hover:bg-[#b8933f] transition-colors"
            >
              Book This Treatment
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}