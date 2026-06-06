import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEO_URL = 'https://media.base44.com/videos/public/6a2442c8cdd388c1867c7a33/ba9c02e57_dvida_-_homepage_video-1080p.mp4';
const THUMBNAIL = 'https://media.base44.com/images/public/6a2442c8cdd388c1867c7a33/e8fa2c754_generated_fae6f2c0.png';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-4">
            Experience D'Vida
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F9F9F7] tracking-tight">
            See Our <span className="italic">Story</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video cursor-pointer group overflow-hidden"
          onClick={!playing ? handlePlay : undefined}
        >
          {/* Thumbnail + Play overlay */}
          {!playing && (
            <>
              <img
                src={THUMBNAIL}
                alt="D'Vida Spa video preview"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-body">
                  Click to play
                </p>
              </div>
            </>
          )}

          {/* Actual video */}
          {playing && (
            <video
              ref={videoRef}
              src={VIDEO_URL}
              controls
              autoPlay
              className="w-full h-full object-cover bg-black"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}