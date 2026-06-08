import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const ALL_POSTS = [
  // Botox Tips
  { title: 'Skin Tightening Med Spa Cary North Carolina', date: 'May 15, 2026', category: 'Botox Tips', link: 'https://dvidaspa.com/skin-tightening-med-spa-cary-north-carolina/', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
  { title: 'T Shape 2 Treatment Chicago', date: 'May 15, 2026', category: 'Botox Tips', link: 'https://dvidaspa.com/t-shape-2-treatment-chicago/', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
  { title: 'Botox Med Spa Cary North Carolina', date: 'April 16, 2026', category: 'Botox Tips', link: 'https://dvidaspa.com/botox-med-spa-cary-north-carolina/', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
  { title: 'Botox Med Spa Chicago', date: 'April 15, 2026', category: 'Botox Tips', link: 'https://dvidaspa.com/botox-med-spa-chicago/', image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&q=80' },
  { title: 'How Long Does Botox Last? & How Often Should You Get?', date: 'November 17, 2025', category: 'Botox Tips', link: 'https://dvidaspa.com/how-long-does-botox-last/', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
  // Hormone Replacement Therapy
  { title: 'The Idea of Looking Younger Through HRT: A Review of the Theory', date: 'November 10, 2025', category: 'Hormone Replacement Therapy', link: 'https://dvidaspa.com/the-idea-of-looking-younger-through-hrt/', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
  { title: 'The Average Duration or How Long Does HRT Take Effect?', date: 'July 7, 2025', category: 'Hormone Replacement Therapy', link: 'https://dvidaspa.com/the-average-duration-or-how-long-does-hrt-take-effect/', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80' },
  { title: 'What to Expect When Starting HRT? An Overview', date: 'July 4, 2025', category: 'Hormone Replacement Therapy', link: 'https://dvidaspa.com/what-to-expect-when-starting-hrt/', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { title: 'What Every Woman Should Know About Perimenopause?', date: 'April 21, 2025', category: 'Hormone Replacement Therapy', link: 'https://dvidaspa.com/what-every-woman-should-know-about-perimenopause/', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80' },
  // HRT Treatment
  { title: 'Looking for Testosterone Replacement Therapy Near You?', date: 'June 23, 2025', category: 'HRT Treatment', link: 'https://dvidaspa.com/looking-for-testosterone-replacement-therapy-near-you/', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  // Knee Joint Pain
  { title: 'Do You Know How Seriously Tricompartmental Osteoarthritis Effects Your Health?', date: 'November 3, 2025', category: 'Knee Joint Pain', link: 'https://dvidaspa.com/tricompartmental-osteoarthritis/', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80' },
  { title: 'Is PRP Injection for Knee Pain are Safe and Effective Treatment for Osteoarthritis?', date: 'October 31, 2025', category: 'Knee Joint Pain', link: 'https://dvidaspa.com/prp-injection-for-knee-pain/', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80' },
  { title: 'Nonsurgical Treatment for Knee Joint Pain: What Should You Know?', date: 'April 28, 2025', category: 'Knee Joint Pain', link: 'https://dvidaspa.com/nonsurgical-treatment-for-knee-joint-pain/', image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80' },
  { title: 'Nonsurgical Treatment for Hip Pain: New Solution without Surgery', date: 'June 30, 2025', category: 'Knee Joint Pain', link: 'https://dvidaspa.com/nonsurgical-treatment-for-hip-pain/', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80' },
  // T-Shape
  { title: 'T-shape2 Near You in Chicago? Discover the Future of Body Sculpting', date: 'September 8, 2025', category: 'T-shape', link: 'https://dvidaspa.com/t-shape2-near-you-in-chicago/', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { title: 'T-Shape 2: Everything You Need to Know', date: 'August 25, 2025', category: 'T-shape', link: 'https://dvidaspa.com/t-shape-2-everything-you-need-to-know/', image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80' },
  // Medical Spa
  { title: 'Discover the Best Med Spa in Chicago for Beauty & Wellness', date: 'September 8, 2025', category: 'Medical Spa', link: 'https://dvidaspa.com/discover-the-best-med-spa-in-chicago/', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80' },
  // PRP Treatments
  { title: 'Prp Facial vs. Microneedling: Which One Should You Choose?', date: 'September 1, 2025', category: 'PRP Treatments', link: 'https://dvidaspa.com/prp-facial-vs-microneedling/', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80' },
  { title: 'Platelet-Rich Plasma: A Treatment We\'ve All Wanted', date: 'April 25, 2025', category: 'PRP Treatments', link: 'https://dvidaspa.com/platelet-rich-plasma/', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80' },
  { title: 'Platelet-Rich Plasma Therapy Cost: A Must Need to Know!', date: 'April 14, 2025', category: 'PRP Treatments', link: 'https://dvidaspa.com/platelet-rich-plasma-therapy-cost/', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80' },
  { title: 'PRP Treatments Near You?', date: 'February 28, 2025', category: 'PRP Treatments', link: 'https://dvidaspa.com/prp-treatments-near-you/', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80' },
  // Weight Loss
  { title: 'Looking for Medical Weight Loss Treatment in Cary?', date: 'March 3, 2025', category: 'Weight Loss', link: 'https://dvidaspa.com/medical-weight-loss-treatment-in-cary/', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
  { title: 'Dvida Med Spa: Your Cary Weight Loss Center', date: 'February 24, 2025', category: 'Weight Loss', link: 'https://dvidaspa.com/dvida-med-spa-your-cary-weight-loss-center/', image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=600&q=80' },
  { title: 'Comparing Weight Loss Drugs', date: 'October 27, 2023', category: 'Weight Loss', link: 'https://dvidaspa.com/comparing-weight-loss-drugs/', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { title: 'Managing Side Effects of Weight Loss Meds', date: 'October 27, 2023', category: 'Weight Loss', link: 'https://dvidaspa.com/managing-side-effects-of-weight-loss-meds/', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
  // Stem Cells
  { title: 'Where to Get Stem Cell Therapy In Cary, NC?', date: 'February 17, 2025', category: 'Stem Cells', link: 'https://dvidaspa.com/where-to-get-stem-cell-therapy-in-cary-nc/', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80' },
  // Dvida Spa Blog
  { title: 'The Role of Vitamin B12 Shots in Weight Loss and Metabolism', date: 'October 30, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/the-role-of-vitamin-b12-shots-in-weight-loss-and-metabolism/', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80' },
  { title: 'Anti-Aging Solution', date: 'October 30, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/anti-aging-solution/', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
  { title: 'Unveil Radiant, Youthful Skin', date: 'October 28, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/unveil-radiant-youthful-skin/', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
  { title: 'DiamondGlow: Beyond Traditional Facials', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/diamondglow-beyond-traditional-facials/', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80' },
  { title: 'IV Nutrition vs. Oral Supplements: Which Delivers Better Results?', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/iv-nutrition-vs-oral-supplements/', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80' },
  { title: 'Maximizing Wellness: The Benefits of NAD+ IV Nutrition Drips', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/maximizing-wellness-nad-iv-nutrition-drips/', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { title: 'Does Laser Vein Removal Actually Work? Everything You Need To Know!', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/does-laser-vein-removal-actually-work/', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
  { title: 'From Wrinkle Reduction to Brighter Glow: Discover Laser Genesis', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/discover-laser-genesis/', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
  { title: 'Combining Ultimate Contour with Other Treatments for Total Body Rejuvenation', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/combining-ultimate-contour-with-other-treatments/', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
  { title: 'Maximizing Your Results with Ultimate Contour', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/maximizing-your-results-with-ultimate-contour/', image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80' },
  { title: 'The Ultimate Guide to Ultimate Contour: What You Need to Know', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/ultimate-guide-to-ultimate-contour/', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { title: 'Candela vs Electrolysis & Waxing: Which is Right for You?', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/candela-vs-electrolysis-waxing/', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80' },
  { title: 'AviClear vs. Prescription Acne Medication', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/aviclear-vs-prescription-acne-medication/', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80' },
  { title: 'Confronting Adult Acne with AviClear', date: 'October 27, 2023', category: 'Dvida Spa Blog', link: 'https://dvidaspa.com/confronting-adult-acne-with-aviclear/', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
];

const CATEGORIES = ['All', ...Array.from(new Set(ALL_POSTS.map(p => p.category))).sort()];

const POSTS_PER_PAGE = 12;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = ALL_POSTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#1A1A1A] pt-32 pb-20 px-6 md:px-12 text-center">
        <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-4">Expert Insights</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F9F9F7] tracking-tight">
          Our <span className="italic">Blog</span>
        </h1>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-[#F9F9F7]/95 backdrop-blur-sm border-b border-[#1A1A1A]/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-body transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A]/60 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#1A1A1A]/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={handleSearch}
              className="pl-8 pr-8 py-2 text-xs font-body border border-[#1A1A1A]/20 bg-transparent focus:outline-none focus:border-primary text-[#1A1A1A] placeholder-[#1A1A1A]/40 w-48"
            />
            {search && (
              <button onClick={() => { setSearch(''); setPage(1); }} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-3 h-3 text-[#1A1A1A]/40" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {paged.length === 0 ? (
          <p className="text-center text-[#1A1A1A]/40 font-body py-24">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((post, i) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group block bg-white overflow-hidden"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
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
                  <span className="inline-flex items-center gap-2 text-[#1A1A1A]/40 text-[10px] tracking-[0.25em] uppercase font-body group-hover:text-primary transition-colors duration-300">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`w-9 h-9 text-xs font-body transition-colors duration-200 ${
                  page === p
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-[#1A1A1A]/20 text-[#1A1A1A]/60 hover:border-primary hover:text-primary'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Link to full blog */}
        <div className="text-center mt-12">
          <a
            href="https://dvidaspa.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs tracking-[0.3em] uppercase font-body hover:bg-[#1A1A1A] hover:text-[#F9F9F7] transition-all duration-500"
          >
            View All 114+ Articles on DVida Spa <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}