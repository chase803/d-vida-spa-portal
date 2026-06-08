import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogPostModal from './BlogPostModal';

const BLOG_POSTS = [
  {
    title: 'Skin Tightening Med Spa Cary North Carolina',
    date: 'May 15, 2026',
    category: 'Botox Tips',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    link: 'https://dvidaspa.com/skin-tightening-med-spa-cary-north-carolina/',
    excerpt: 'Skin Tightening Med Spa Cary North Carolina treatments are becoming one of the most sought-after non-surgical solutions for firmer, smoother, and more youthful-looking skin.',
    content: [
      {
        type: 'paragraph',
        text: 'Skin Tightening Med Spa Cary North Carolina treatments are becoming one of the most sought-after non-surgical solutions for firmer, smoother, and more youthful-looking skin in Cary, North Carolina. As skin naturally changes due to aging, lifestyle, and environmental exposure, many people begin noticing laxity around the face, jawline, neck, and body. Instead of turning to invasive surgery, clients are increasingly choosing advanced med spa treatments that deliver real, visible results.',
      },
      {
        type: 'paragraph',
        text: 'At DVida Med Spa Cary North Carolina, our team of experienced aesthetic professionals offers a range of FDA-cleared and clinically proven skin tightening technologies. Whether you\'re looking to address loose skin on your abdomen, arms, thighs, or face, we have a solution tailored to your unique concerns and goals.',
      },
      {
        type: 'heading',
        text: 'Why Choose Skin Tightening at DVida Med Spa?',
      },
      {
        type: 'list',
        items: [
          'Non-invasive and minimally invasive options — no surgery, no general anesthesia',
          'Customized treatment plans designed around your skin\'s unique anatomy',
          'State-of-the-art technologies including radiofrequency, ultrasound, and laser',
          'Experienced providers with deep expertise in body contouring and skin rejuvenation',
          'Results that continue to improve over weeks and months as collagen is rebuilt',
        ],
      },
      {
        type: 'heading',
        text: 'Our Skin Tightening Technologies',
      },
      {
        type: 'paragraph',
        text: 'We use Sylfirm X RF Microneedling, T-Shape 2 body contouring, Moxi Fraxel Laser, and CoolSculpting Elite — each targeting specific concerns from facial laxity to stubborn fat and cellulite. Every treatment plan starts with a thorough consultation so your provider can recommend the right approach for your skin type and goals.',
      },
      {
        type: 'paragraph',
        text: 'If you\'re ready to explore skin tightening options at our Cary, North Carolina med spa, we invite you to schedule a consultation. Our team will answer all your questions, walk you through your options, and help you start your journey toward tighter, more youthful-looking skin.',
      },
    ],
  },
  {
    title: 'T Shape 2 Treatment Chicago',
    date: 'May 15, 2026',
    category: 'Botox Tips',
    heroImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    link: 'https://dvidaspa.com/t-shape-2-treatment-chicago/',
    excerpt: 'T Shape 2 Treatment Chicago has become one of the most in-demand non-surgical body contouring solutions for people looking to tighten skin, reduce cellulite, and reshape stubborn areas.',
    content: [
      {
        type: 'paragraph',
        text: 'T Shape 2 Treatment Chicago has become one of the most in-demand non-surgical body contouring solutions for people looking to tighten skin, reduce cellulite, and reshape stubborn areas in Chicago, Illinois. Instead of relying on invasive surgery or long recovery periods, clients are now turning to advanced med spa technology that delivers visible results with minimal downtime. One of the leading providers of this treatment is Dvida Spa, a well-known medical spa offering cutting-edge aesthetic services designed for real, natural-looking transformation.',
      },
      {
        type: 'heading',
        text: 'What is the T-Shape 2?',
      },
      {
        type: 'paragraph',
        text: 'The T-Shape 2 is a non-invasive body sculpting device that combines radiofrequency (RF) energy and vacuum therapy to target fat cells, tighten skin, and reduce the appearance of cellulite. It works by heating the deeper layers of tissue, stimulating collagen production and improving blood circulation — delivering a more toned, contoured appearance without surgery.',
      },
      {
        type: 'heading',
        text: 'What Areas Can Be Treated?',
      },
      {
        type: 'list',
        items: [
          'Abdomen and flanks (love handles)',
          'Thighs and buttocks',
          'Arms and underarms',
          'Back and bra area',
          'Neck and jawline',
        ],
      },
      {
        type: 'heading',
        text: 'What to Expect at DVida Spa Chicago',
      },
      {
        type: 'paragraph',
        text: 'At Dvida Spa Chicago, the T-Shape 2 treatment is customized to each client\'s unique anatomy and goals. Sessions typically last 30–60 minutes depending on the treatment area, and most clients see progressive results over a series of treatments. There is no downtime, making it easy to fit into your busy Chicago lifestyle.',
      },
      {
        type: 'paragraph',
        text: 'We recommend a series of 6–8 sessions spaced one week apart for optimal results. Many clients begin to notice improvements in skin texture, firmness, and contour after just the first few sessions.',
      },
    ],
  },
  {
    title: 'Botox Med Spa Cary North Carolina',
    date: 'April 16, 2026',
    category: 'Botox Tips',
    heroImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    link: 'https://dvidaspa.com/botox-med-spa-cary-north-carolina/',
    excerpt: 'Botox Med Spa Cary North Carolina is one of the fastest-growing aesthetic services for people who want smoother skin, fewer wrinkles, and a refreshed appearance without surgery.',
    content: [
      {
        type: 'paragraph',
        text: 'Botox Med Spa Cary North Carolina is one of the fastest-growing aesthetic services for people who want smoother skin, fewer wrinkles, and a refreshed appearance without surgery or long downtime. In a community like Cary, where wellness and self-care are a priority, more clients are turning to Botox Med Spa Cary North Carolina treatments as part of their regular beauty routine. One of the leading providers in the area is DVida Med Spa Cary North Carolina, where expert injectors deliver personalized Botox treatments in a welcoming, professional environment.',
      },
      {
        type: 'heading',
        text: 'What is Botox and How Does It Work?',
      },
      {
        type: 'paragraph',
        text: 'Botox is an FDA-approved injectable wrinkle relaxer made from a purified form of botulinum toxin. When injected into targeted facial muscles, it temporarily blocks the nerve signals that cause those muscles to contract — softening the appearance of expression lines and preventing new wrinkles from forming. The result is smoother, more youthful-looking skin with a natural, rested appearance.',
      },
      {
        type: 'heading',
        text: 'Common Treatment Areas',
      },
      {
        type: 'list',
        items: [
          'Forehead lines',
          'Glabellar lines ("11s" between the brows)',
          'Crow\'s feet around the eyes',
          'Bunny lines on the nose',
          'Lip lines and lip flip',
          'Neck bands (platysmal bands)',
          'Jaw slimming (masseter Botox)',
        ],
      },
      {
        type: 'heading',
        text: 'Why Choose DVida Med Spa in Cary, NC?',
      },
      {
        type: 'paragraph',
        text: 'At DVida Med Spa Cary North Carolina, our injectors bring years of expertise and an artistic eye to every appointment. We take the time to understand your unique facial anatomy, your aesthetic goals, and your concerns — then create a treatment plan designed to achieve natural-looking results that enhance your features rather than change them.',
      },
      {
        type: 'list',
        items: [
          'Consultations required to ensure personalized treatment',
          'Treatment time: 30+ minutes',
          'Brands used: Botox, Dysport, Xeomin',
          'Zero downtime — return to normal activities immediately',
          'Results lasting 3–6 months',
        ],
      },
    ],
  },
  {
    title: 'Botox Med Spa Chicago',
    date: 'April 15, 2026',
    category: 'Botox Tips',
    heroImage: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&q=80',
    link: 'https://dvidaspa.com/botox-med-spa-chicago/',
    excerpt: 'Botox Med Spa Chicago has become one of the most searched aesthetic services in the city for people who want smoother skin, reduced wrinkles, and natural-looking facial rejuvenation.',
    content: [
      {
        type: 'paragraph',
        text: 'Botox Med Spa Chicago has become one of the most searched aesthetic services in the city for people who want smoother skin, reduced wrinkles, and natural-looking facial rejuvenation without surgery. In a fast-paced city like Chicago, more clients are turning to Botox Med Spa Chicago treatments to refresh their appearance, boost confidence, and maintain a youthful look with minimal downtime. One of the standout destinations offering these services is DVida Med Spa Chicago, where clients can walk in or schedule appointments and receive professional Botox and med spa treatments tailored to their individual goals.',
      },
      {
        type: 'heading',
        text: 'Botox at DVida Med Spa Chicago',
      },
      {
        type: 'paragraph',
        text: 'At DVida Med Spa Chicago, Botox is performed by experienced, licensed aesthetic professionals who specialize in facial anatomy and injection technique. Every appointment begins with a thorough consultation to understand your goals, assess your facial structure, and design a treatment plan that\'s customized specifically for you — not a one-size-fits-all approach.',
      },
      {
        type: 'heading',
        text: 'Treatment Highlights',
      },
      {
        type: 'list',
        items: [
          'FDA-approved Botox, Dysport, and Xeomin available',
          'Quick 30+ minute appointments with no downtime',
          'Results visible within 3–7 days, lasting 3–6 months',
          'Natural-looking results that preserve facial expression',
          'Trusted by thousands of Chicago clients since 2010',
        ],
      },
      {
        type: 'heading',
        text: 'What Makes DVida Different?',
      },
      {
        type: 'paragraph',
        text: 'With over 14 years of service, 30,000+ treatments performed, and 4,000+ five-star reviews, DVida Med Spa has built a reputation as Chicago\'s premier destination for Botox and medical aesthetics. Our team stays current with the latest injection techniques and products to ensure every client receives the safest, most effective treatment available.',
      },
      {
        type: 'paragraph',
        text: 'Whether you\'re a first-time Botox client or a seasoned veteran looking for a new provider, DVida Med Spa Chicago offers the expertise, professionalism, and personalized care you deserve. Book your consultation today and discover why thousands of Chicago residents choose DVida for their Botox treatments.',
      },
    ],
  },
  {
    title: 'Botox Lip Flip Chicago',
    date: 'March 10, 2026',
    category: 'Botox Tips',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    link: 'https://dvidaspa.com/category/botox-tips/',
    excerpt: 'The Botox Lip Flip is a subtle, natural-looking treatment that uses a small amount of Botox to enhance the upper lip without adding volume — perfect for those seeking a refined, effortless pout.',
    content: [
      {
        type: 'paragraph',
        text: 'The Botox Lip Flip is one of the most popular and subtle aesthetic treatments at DVida Med Spa Chicago. Unlike traditional lip fillers that add volume, the Lip Flip uses a small amount of Botox injected into the orbicularis oris muscle above the upper lip — causing the muscle to relax and the lip to gently roll outward, creating the appearance of a fuller, more defined upper lip.',
      },
      {
        type: 'heading',
        text: 'Who is a Good Candidate?',
      },
      {
        type: 'paragraph',
        text: 'The Lip Flip is ideal for clients who want a subtle enhancement without the commitment of fillers, those who feel their upper lip "disappears" when they smile, or anyone looking for a more defined lip border. It\'s a great standalone treatment or complement to existing lip filler.',
      },
      {
        type: 'heading',
        text: 'What to Expect',
      },
      {
        type: 'list',
        items: [
          'Quick 10–15 minute treatment with minimal discomfort',
          'Results visible within 3–5 days as Botox takes effect',
          'Lasts approximately 2–3 months (shorter than standard Botox)',
          'No downtime — resume normal activities immediately',
          'Natural-looking results that enhance your existing lip shape',
        ],
      },
      {
        type: 'heading',
        text: 'Lip Flip vs. Lip Filler: Which is Right for You?',
      },
      {
        type: 'paragraph',
        text: 'The Lip Flip and lip filler are often used together for a comprehensive lip enhancement, but each serves a different purpose. Lip filler adds volume and structure using hyaluronic acid, while the Lip Flip subtly reshapes the upper lip using Botox. During your consultation at DVida Med Spa Chicago, your provider will help you determine which option — or combination — best suits your goals and facial anatomy.',
      },
    ],
  },
];

function BlogCard({ post, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block bg-[#F9F9F7] overflow-hidden cursor-pointer"
      onClick={() => onOpen(post)}
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={post.heroImage}
          alt={post.title}
          onError={e => { e.target.src = post.fallbackImage; }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-primary text-[9px] tracking-[0.35em] uppercase font-body mb-2">
          {post.category} · {post.date}
        </p>
        <h3 className="font-display text-xl font-light text-[#1A1A1A] leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>
        <p className="font-body text-sm text-[#1A1A1A]/50 leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-[#1A1A1A]/50 text-[10px] tracking-[0.25em] uppercase font-body group-hover:text-primary transition-colors duration-300">
          Read Article <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
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
            <Link
              to="/blog"
              className="self-start md:self-auto text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase font-body border-b border-[#1A1A1A]/40 pb-0.5 hover:border-primary hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              View All Articles
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <BlogCard key={post.link} post={post} index={i} onOpen={setSelectedPost} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {BLOG_POSTS.slice(3).map((post, i) => (
              <BlogCard key={post.link} post={post} index={i + 3} onOpen={setSelectedPost} />
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
}