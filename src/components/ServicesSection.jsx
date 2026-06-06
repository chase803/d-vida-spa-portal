import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TreatmentModal from './TreatmentModal';

const SERVICES = [
  {
    title: 'Botox & Fillers',
    subtitle: 'Injectables',
    tagline: 'The Wrinkle Whisperer',
    results: [
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Botox-1a.jpeg', label: 'Botox — Patient 1' },
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Botox-2a.jpeg', label: 'Botox — Patient 2' },
    ],
    description: 'Embrace your wrinkle-free era. At Dvida Spa, we diminish fine lines and refresh your look by merging expert techniques with renowned injectable wrinkle relaxers like Botox. A smoother, youthful complexion awaits. It\'s not just a procedure; it\'s an investment in timeless beauty, ensuring you wear your age with pride and poise.',
    link: 'https://dvidaspa.com/treatment/botox-in-chicago/',
    glance: [
      { label: 'Consultation', value: 'Required' },
      { label: 'Treatment Type', value: 'Injectable' },
      { label: 'Length', value: '30+ minutes' },
      { label: 'Brands', value: 'Botox, Dysport, Xeomin' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results Duration', value: '3 to 6 months' },
    ],
    treats: ['Forehead Lines', '11\'s (Glabellar)', 'TMJ', 'Masseters', 'Crow\'s Feet'],
    experience: [
      { title: 'Consistent Results', detail: 'You benefit from our expert touch and receive the same consistent, amazing results every time.' },
      { title: 'Targeted Treatment', detail: 'Completely customized to your skin\'s unique anatomy. No 2 Botox appointments are the same.' },
      { title: 'Minimal Downtime', detail: 'Botox doesn\'t require any downtime. Easy to fit into your on-the-go lifestyle.' },
    ],
    care: {
      pre: [
        'Come to your appointment with clean, makeup-free skin.',
        'Drink plenty of water and get good sleep the night before.',
        'Avoid any harsh skincare products for the week prior.',
      ],
      post: [
        'Keep your head elevated for at least 4 hours after your injections.',
        'Do not massage or rub the injection sites to avoid displacing the Botox.',
        'Use only a gentle cleanser and moisturize on your skin for 48 hours.',
      ],
    },
  },
  {
    title: 'Skin Tightening',
    subtitle: 'Body Contouring',
    tagline: 'Lift, Tighten & Sculpt',
    results: [
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-1-768x341.jpeg', label: 'CoolSculpting — Patient 1' },
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Coolsculpting-2-768x628.jpeg', label: 'CoolSculpting — Patient 2' },
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Dysport-1a-768x311.jpeg', label: 'Dysport — Patient 1' },
    ],
    description: 'Advanced radiofrequency, ultrasound, and laser technologies to lift, tighten, and sculpt your skin without surgery. Our team of experts uses the latest technology to deliver visible, lasting results tailored to your body\'s unique needs.',
    link: 'https://dvidaspa.com/treatment-category/skin-tightening/',
    glance: [
      { label: 'Consultation', value: 'Required' },
      { label: 'Treatment Type', value: 'Body Contouring' },
      { label: 'Downtime', value: 'Minimal' },
      { label: 'Results', value: 'Long-lasting' },
      { label: 'Locations', value: 'Chicago & Cary, NC' },
      { label: 'Approach', value: 'Non-invasive' },
    ],
    treats: ['Loose Skin', 'Fine Lines & Wrinkles', 'Cellulite', 'Body Contouring', 'Skin Laxity'],
    options: [
      { name: 'Sylfirm X RF Microneedling', detail: 'Radiofrequency microneedling that creates a controlled injury to stimulate collagen and elastin production, delivering firmer, tighter skin.' },
      { name: 'T-Shape 2', detail: 'Non-invasive body sculpting to tighten skin, reduce cellulite, and contour your body for smoother, toned results with no downtime.' },
      { name: 'Moxi Fraxel Laser', detail: 'A gentle laser treatment that resurfaces skin, improving tone, texture, and tightness for a radiant, youthful appearance.' },
      { name: 'CoolSculpting Elite', detail: 'FDA-cleared fat-freezing technology that permanently eliminates stubborn fat cells through controlled cooling.' },
    ],
    experience: [
      { title: 'Non-Surgical', detail: 'Achieve dramatic skin tightening results without surgery or extended recovery time.' },
      { title: 'Customized Plan', detail: 'Our providers design a treatment plan matched specifically to your skin concerns and goals.' },
      { title: 'Lasting Results', detail: 'Stimulates your body\'s natural collagen production for results that continue improving over time.' },
    ],
    care: {
      pre: [
        'Come to your appointment with clean skin, free of lotions or oils.',
        'Avoid sun exposure and tanning for at least 2 weeks before treatment.',
        'Stay well-hydrated in the days leading up to your appointment.',
      ],
      post: [
        'Avoid direct sun exposure and wear SPF 30+ daily.',
        'Keep skin moisturized and avoid harsh skincare products for 48 hours.',
        'Follow your provider\'s specific aftercare instructions based on your treatment.',
      ],
    },
  },
  {
    title: 'IV Therapy',
    subtitle: 'Wellness',
    tagline: 'Nourish & Energize Your Body',
    results: [
      { before: 'https://dvidaspa.com/wp-content/uploads/2024/10/Dvida-Spa-IV-therapy-0404-1024x682.jpg', label: 'IV Therapy Session' },
      { before: 'https://dvidaspa.com/wp-content/uploads/2024/10/Dvida-Spa-IV-therapy-0448-682x1024.jpg', label: 'IV Therapy Treatment' },
    ],
    description: 'At Dvida Spa, we believe that looking good and feeling good are equally important. The foods we eat do not provide the same nutrients they did 50 years ago, so our bodies often lack what they need to function well. With IV therapy, we deliver nutrients directly to your bloodstream for 100% absorption so you can live every day at 100%.',
    link: 'https://dvidaspa.com/treatment/iv-therapy-in-chicago/',
    glance: [
      { label: 'Consultation', value: 'Required' },
      { label: 'Treatment Type', value: 'Health & Wellness' },
      { label: 'Length', value: '30 min – 1 hour' },
      { label: 'Treatments', value: 'As needed' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results Duration', value: 'Varies' },
    ],
    treats: ['Poor Metabolism', 'Decreased Energy', 'Stubborn Fat', 'Low Immune Function', 'Hangovers'],
    experience: [
      { title: 'Relaxing Treatment', detail: 'The only discomfort is the IV insertion. Once done, sit back and relax while your body receives what it needs.' },
      { title: 'Immediate Results', detail: 'Many clients notice an immediate improvement in energy and mood. Results can last up to 1 week.' },
      { title: 'Personalized Care', detail: 'Our providers find the right IV cocktail for your unique needs, targeting your specific symptoms and goals.' },
    ],
    care: {
      pre: [
        'Drink plenty of water on the day of your appointment.',
        'Avoid exposing your skin to direct sunlight for 1 week prior.',
        'Do not drink alcohol or use tobacco products for at least 24 hours.',
      ],
      post: [
        'Continue to drink water and keep your body hydrated.',
        'Move your arm regularly to avoid sore muscles.',
        'Avoid smoking and drinking alcohol for another 24 hours.',
      ],
    },
  },
  {
    title: 'Hair Restoration',
    subtitle: 'Regenerative',
    tagline: 'Restore Your Luscious Locks',
    results: [
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-PRP-Hair-Restoration-1.jpeg', label: 'PRP Hair Restoration' },
      { before: 'https://dvidaspa.com/wp-content/uploads/2025/01/Dvida-Spa-BA-Non-Surgical-Hair-Restoration-1a.jpeg', label: 'Non-Surgical Hair Restoration' },
    ],
    description: 'At Dvida Spa, we offer multiple options for hair restoration. Hair loss impacts an estimated 80 million people in the U.S. today, affecting both men and women. Our team provides personalized, non-surgical solutions to slow hair loss, strengthen existing hair, and encourage natural regrowth using the latest technologies.',
    link: 'https://dvidaspa.com/treatment/hair-restoration-in-chicago/',
    glance: [
      { label: 'Consultation', value: 'Required' },
      { label: 'Treatment Type', value: 'Health & Wellness' },
      { label: 'Length', value: '1 hour' },
      { label: '# of Treatments', value: '3 to 4' },
      { label: 'Downtime', value: '24 to 48 hours' },
      { label: 'Results Duration', value: 'Up to 1 year' },
    ],
    treats: ['Hair Thinning', 'Hair Loss'],
    options: [
      { name: 'PRP Hair Restoration', detail: 'We draw a small amount of blood and process it to extract platelet-rich plasma (PRP), then inject it into the scalp to stimulate hair growth.' },
      { name: 'JetPeel Non-Invasive Treatment', detail: 'A high-pressure jet system that stimulates the scalp, enhances blood circulation, and encourages the growth of healthier, thicker hair — with no needles.' },
      { name: 'Injectables', detail: 'Supplement missing nutrients directly into your scalp to provide the building blocks for thick, healthy hair growth.' },
      { name: 'Sylfirm X RF Microneedling', detail: 'Creates a controlled scalp injury to stimulate healing, increasing collagen and elastin production while delivering oxygen and nutrients to hair follicles.' },
    ],
    experience: [
      { title: 'Customized Treatment', detail: 'There is no "one size fits all" plan. Our team personalizes your treatment to accomplish your personal hair restoration goals.' },
      { title: 'Minimal Downtime', detail: 'Whether you choose JetPeel or PRP, you can expect to return to normal activities quickly after treatment.' },
      { title: 'Expert Care', detail: 'Our passion and expertise guide your care, providing high-quality results from experienced professionals dedicated to your goals.' },
    ],
    care: {
      pre: [
        'Drink plenty of water the day of your appointment.',
        'Arrive with a clean, dry scalp.',
        'Avoid drinking alcohol or smoking for at least 48 hours.',
      ],
      post: [
        'Do not take anti-inflammatory medications or supplements.',
        'Continue avoiding alcohol and tobacco products for an additional 48 hours.',
        'Follow any additional instructions given to you by your provider.',
      ],
    },
  },
];

export default function ServicesSection({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  return (
    <>
      <section id="services" className="py-24 md:py-48 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
              Treatment Curation
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F9F7] tracking-tight">
              Our <span className="italic">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedTreatment(service)}
              >
                <img
                  src={images[i]}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === i ? 'scale-95' : 'scale-100'
                  }`}
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Hover frosted overlay */}
                <div
                  className={`absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center ${
                    hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-[#F9F9F7]/70 font-body text-sm leading-relaxed">
                    {service.description.slice(0, 120)}...
                  </p>
                  <span className="mt-6 text-primary text-[10px] tracking-[0.3em] uppercase font-body border-b border-primary pb-1">
                    Learn More
                  </span>
                </div>

                {/* Default bottom label */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 ${
                    hoveredIndex === i ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-body mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-2xl text-[#F9F9F7] font-light">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
        />
      )}
    </>
  );
}