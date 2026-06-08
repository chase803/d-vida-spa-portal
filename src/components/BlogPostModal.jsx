import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function BlogPostModal({ post, onClose }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

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

          {/* Hero Image */}
          <div className="w-full aspect-[16/7] overflow-hidden">
            <img
              src={post.heroImage || post.fallbackImage}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={e => { e.target.src = post.fallbackImage; }}
            />
          </div>

          {/* Header */}
          <div className="bg-[#1A1A1A] px-8 py-8">
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-3">
              {post.category} · {post.date}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#F9F9F7] leading-tight">
              {post.title}
            </h2>
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-6">
            {post.content.map((section, i) => {
              if (section.type === 'paragraph') {
                return (
                  <p key={i} className="font-body text-[#1A1A1A]/70 text-base leading-relaxed">
                    {section.text}
                  </p>
                );
              }
              if (section.type === 'heading') {
                return (
                  <h3 key={i} className="font-display text-xl font-light text-[#1A1A1A] mt-6">
                    {section.text}
                  </h3>
                );
              }
              if (section.type === 'list') {
                return (
                  <ul key={i} className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 font-body text-sm text-[#1A1A1A]/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase font-body hover:bg-[#b8933f] transition-colors"
            >
              Read Full Article <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}