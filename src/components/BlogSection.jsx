import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'Skin Tightening Med Spa Cary North Carolina',
    date: 'May 15, 2026',
    category: 'Botox Tips',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/05/skin-tightening-cary-nc.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    link: 'https://dvidaspa.com/skin-tightening-med-spa-cary-north-carolina/',
  },
  {
    title: 'T Shape 2 Treatment Chicago',
    date: 'May 15, 2026',
    category: 'Botox Tips',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/05/t-shape-chicago.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    link: 'https://dvidaspa.com/t-shape-2-treatment-chicago/',
  },
  {
    title: 'Botox Med Spa Cary North Carolina',
    date: 'April 16, 2026',
    category: 'Botox Tips',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/04/botox-cary-nc.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
    link: 'https://dvidaspa.com/botox-med-spa-cary-north-carolina/',
  },
  {
    title: 'Botox Med Spa Chicago',
    date: 'April 15, 2026',
    category: 'Botox Tips',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/04/botox-chicago.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&q=80',
    link: 'https://dvidaspa.com/botox-med-spa-chicago/',
  },
  {
    title: 'Botox Lip Flip Chicago',
    date: 'March 10, 2026',
    category: 'Botox Tips',
    image: 'https://dvidaspa.com/wp-content/uploads/2026/03/botox-lip-flip.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    link: 'https://dvidaspa.com/category/botox-tips/',
  },
];

function BlogCard({ post, index }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block bg-[#F9F9F7] overflow-hidden"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={imgError ? post.fallbackImage : post.image}
          alt={post.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-primary text-[9px] tracking-[0.35em] uppercase font-body mb-2">
          {post.category} · {post.date}
        </p>
        <h3 className="font-display text-xl font-light text-[#1A1A1A] leading-snug mb-4 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>
        <span className="inline-flex items-center gap-2 text-[#1A1A1A]/50 text-[10px] tracking-[0.25em] uppercase font-body group-hover:text-primary transition-colors duration-300">
          Read Article <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.a>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-48 px-6 md:px-12 bg-[#F0EDE8]">
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
              Expert Insights
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
              From Our <span className="italic">Blog</span>
            </h2>
          </div>
          <a
            href="https://dvidaspa.com/category/botox-tips/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase font-body border-b border-[#1A1A1A]/40 pb-0.5 hover:border-primary hover:text-primary transition-colors duration-300 whitespace-nowrap"
          >
            View All Articles
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <BlogCard key={post.link} post={post} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {BLOG_POSTS.slice(3).map((post, i) => (
            <BlogCard key={post.link} post={post} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}