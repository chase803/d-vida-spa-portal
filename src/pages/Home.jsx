import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsTicker from '../components/StatsTicker';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import LocationsSection from '../components/LocationsSection';
import FooterSection from '../components/FooterSection';
import VideoSection from '../components/VideoSection';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/e8fa2c754_generated_fae6f2c0.png',
  interior: 'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/3267cc123_generated_078d5030.png',
  portrait: 'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/6e57171e0_generated_a5bd94e8.png',
  services: [
    'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/7c47eb5e4_generated_c6fa90b2.png',
    'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/cd88c4e8d_generated_642b0925.png',
    'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/1bdfecae8_generated_19ff1b0f.png',
    'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/017f6b163_generated_15627f01.png',
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <StatsTicker />
      <VideoSection />
      <AboutSection interiorImage={IMAGES.interior} portraitImage={IMAGES.portrait} />
      <ServicesSection images={IMAGES.services} />
      <LocationsSection />
      <FooterSection />
    </div>
  );
}