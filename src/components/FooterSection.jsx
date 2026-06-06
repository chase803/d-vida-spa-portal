import React from 'react';

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dvidamedspa_beforeandafter',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Dvida-Med-Spa-Chicago/100089584397594/',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@dvida_medspa',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@dvidamedspa',
  },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] pt-24 md:pt-32 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-[#F9F9F7] font-light mb-4">
              D'Vida <span className="text-primary italic">Spa</span>
            </h3>
            <p className="font-body text-[#F9F9F7]/40 text-sm leading-relaxed">
              Define Your Beauty, Feel Divine.
              <br />
              Medical Aesthetics & Wellness.
            </p>
          </div>

          {/* Locations */}
          <div>
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-6">
              Locations
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-[#F9F9F7]/80 text-sm font-medium mb-1">Chicago, IL</p>
                <p className="font-body text-[#F9F9F7]/40 text-sm">677 N Clark St, Chicago, IL 60654</p>
                <a href="tel:+13123743352" className="font-body text-primary text-sm hover:text-[#b8933f] transition-colors">
                  (312) 374-3352
                </a>
              </div>
              <div>
                <p className="font-body text-[#F9F9F7]/80 text-sm font-medium mb-1">Cary, NC</p>
                <p className="font-body text-[#F9F9F7]/40 text-sm">123 Weston Pkwy, Cary, NC 27513</p>
                <a href="tel:+19842533377" className="font-body text-primary text-sm hover:text-[#b8933f] transition-colors">
                  (984) 253-3377
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-6">
              Follow Us
            </p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#F9F9F7]/60 text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300 group flex items-center gap-3"
                >
                  <span className="w-6 h-px bg-[#F9F9F7]/20 group-hover:bg-primary group-hover:w-10 transition-all duration-300" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F9F9F7]/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#F9F9F7]/30 text-xs tracking-wider">
            © {new Date().getFullYear()} D'Vida Spa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://dvidaspa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[#F9F9F7]/30 text-xs tracking-wider hover:text-primary transition-colors"
            >
              dvidaspa.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}