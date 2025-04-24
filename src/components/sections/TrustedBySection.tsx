'use client';

import React, { useRef } from 'react';
import Image from 'next/image'; // Import next/image
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Placeholder for logo images
const LOGO_PLACEHOLDER = (text: string) => `https://placehold.co/100x40/e2e8f0/94a3b8?text=${encodeURIComponent(text)}`;

const logos = [
  { src: "/images/trustedbycompanies/spotify.png", alt: "Spotify Logo", placeholder: LOGO_PLACEHOLDER('Logo 1') },
  { src: "/images/trustedbycompanies/amazon.png", alt: "Amazon Logo", placeholder: LOGO_PLACEHOLDER('Logo 2') },
  { src: "/images/trustedbycompanies/google.png", alt: "Google Logo", placeholder: LOGO_PLACEHOLDER('Logo 3') },
  { src: "/images/trustedbycompanies/netflix.png", alt: "Netflix Logo", placeholder: LOGO_PLACEHOLDER('Logo 4') },
  { src: "/images/trustedbycompanies/youtube.png", alt: "YouTube Logo", placeholder: LOGO_PLACEHOLDER('Logo 5') },
];

const TrustedBySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="trusted-by" className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-bg-light">
      <div ref={sectionRef} className="max-w-6xl mx-auto text-center reveal-on-scroll">
        <p className="text-base font-semibold text-gray-500 uppercase tracking-wider mb-10">Powering Growth for Professionals Nationwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-8">
          {logos.map((logo, index) => (
            // Replace <img> with next/image
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={100} // Provide appropriate width
              height={40} // Provide appropriate height
              className="h-8 sm:h-9 w-auto grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100 no-shadow" // Adjust classes as needed (w-auto might be useful)
              // loading="lazy" // next/image handles lazy loading by default unless priority={true}
              unoptimized // Keep this if you don't want Next.js optimization, consistent with config
              onError={(e) => { (e.target as HTMLImageElement).src = logo.placeholder; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
