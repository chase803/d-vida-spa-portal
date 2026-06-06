import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LOCATIONS = [
  {
    name: 'Chicago, IL',
    address: '677 N Clark St, Chicago, IL 60654',
    phone: '(312) 374-3352',
    phoneHref: 'tel:+13123743352',
    mapUrl: 'https://maps.app.goo.gl/sHBjuhK1JXDYtin26',
    bookUrl: 'https://dvidaspa.zenoti.com/webstoreNew/services/69f99900-9980-418c-8d23-ed36e1aadcbb',
    lat: 41.8937,
    lng: -87.6310,
    hours: [
      'Sun: Closed',
      'Mon: 10am – 4pm',
      'Tue – Fri: 10am – 7pm',
      'Sat: 9am – 4pm',
    ],
  },
  {
    name: 'Cary, NC',
    address: '123 Weston Pkwy, Cary, NC 27513',
    phone: '(984) 253-3377',
    phoneHref: 'tel:+19842533377',
    mapUrl: 'https://maps.app.goo.gl/ESf5eqRtXi4sivVQ9',
    bookUrl: 'https://dvidaspa.zenoti.com/webstoreNew/services/82ae2827-a44d-401f-97e1-7af19487b895',
    lat: 35.7796,
    lng: -78.7813,
    hours: [
      'Sun: Closed',
      'Mon: 10am – 4pm',
      'Tue: 10am – 7pm',
      'Wed: 9am – 5pm',
      'Thu: 10am – 7pm',
      'Fri: 9am – 5pm',
      'Sat: 10am – 4pm',
    ],
  },
];

function LocationCard({ location, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 md:p-8 border transition-all duration-500 ${
        isActive
          ? 'border-primary bg-white'
          : 'border-[#E2E2E2] bg-white/50 hover:border-primary/40'
      }`}
    >
      <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-body mb-3">
        Location
      </p>
      <h3 className="font-display text-2xl md:text-3xl font-light text-[#1A1A1A] mb-6">
        {location.name}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-[#1A1A1A]/60 hover:text-primary transition-colors"
          >
            {location.address}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
          <a
            href={location.phoneHref}
            className="font-body text-sm text-[#1A1A1A]/60 hover:text-primary transition-colors"
          >
            {location.phone}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div className="font-body text-sm text-[#1A1A1A]/60 space-y-1">
            {location.hours.map((h, i) => (
              <p key={i}>{h}</p>
            ))}
          </div>
        </div>
      </div>
      <a
        href={location.bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-2.5 bg-primary text-primary-foreground text-[10px] tracking-[0.3em] uppercase font-body hover:bg-[#b8933f] transition-colors"
      >
        Book at {location.name}
      </a>
    </div>
  );
}

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = LOCATIONS[activeLocation];

  return (
    <section id="locations" className="py-24 md:py-48 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-6">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-tight">
            Two <span className="italic">Destinations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {LOCATIONS.map((location, i) => (
            <LocationCard
              key={location.name}
              location={location}
              isActive={activeLocation === i}
              onClick={() => setActiveLocation(i)}
            />
          ))}
        </div>

        {/* Map */}
        <motion.div
          key={activeLocation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[400px] md:h-[500px] border border-[#E2E2E2] overflow-hidden"
        >
          <MapContainer
            center={[loc.lat, loc.lng]}
            zoom={15}
            className="w-full h-full z-0"
            key={`${loc.lat}-${loc.lng}`}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[loc.lat, loc.lng]}>
              <Popup>
                <strong className="font-body">D'Vida Spa — {loc.name}</strong>
                <br />
                <span className="text-sm">{loc.address}</span>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
}