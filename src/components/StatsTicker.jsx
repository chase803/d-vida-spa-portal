import React from 'react';

const STATS = [
  '4,000+ Five-Star Reviews',
  '14+ Years in Service',
  '30,000+ Treatments Delivered',
  'Chicago, IL & Cary, NC',
];

export default function StatsTicker() {
  return (
    <section id="stats" className="py-6 bg-[#1A1A1A] overflow-hidden">
      <div className="flex animate-scroll-ticker whitespace-nowrap">
        {[...STATS, ...STATS, ...STATS, ...STATS].map((stat, i) => (
          <span key={i} className="flex items-center mx-8 md:mx-12">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 flex-shrink-0" />
            <span className="text-[#F9F9F7]/70 text-xs tracking-[0.3em] uppercase font-body">
              {stat}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-ticker {
          animation: scroll-ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
}