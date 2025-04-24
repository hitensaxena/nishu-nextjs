'use client';

import React, { useRef } from 'react';
import Image from 'next/image'; // Or use standard img for external URLs
import { useScrollReveal } from '@/hooks/useScrollReveal'; // Assuming hook exists
// import ProButton from '@/components/ui/ProButton'; // Assuming component exists

// Placeholder image URL if the original fails
const PLACEHOLDER_IMAGE = 'https://placehold.co/500x600/e2e8f0/94a3b8?text=App+Screenshot';

const HeroSection = () => {
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);

  useScrollReveal();

  // Basic smooth scroll handler (can be improved/centralized)
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const element = document.getElementById(targetId.substring(1));
      if (element) {
          const headerOffset = 80; // Adjust as needed
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
  };


  return (
    <section id="hero" className="pt-8 pb-20 md:pt-16 md:pb-28 px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background SVGs - Kept as inline SVG for simplicity */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none z-0">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="url(#grad1_hero)" />
          <defs><radialGradient id="grad1_hero" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)"><stop stopColor="var(--gradient-end)" /><stop offset="1" stopColor="var(--gradient-start)" stopOpacity="0" /></radialGradient></defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10 pointer-events-none z-0">
        <svg width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="url(#grad2_hero)" />
          <defs><radialGradient id="grad2_hero" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)"><stop stopColor="var(--gradient-start)" /><stop offset="1" stopColor="var(--gradient-end)" stopOpacity="0" /></radialGradient></defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div ref={textContentRef} className="reveal-on-scroll text-center md:text-left pt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Stop Chasing Paperwork. <br /> <span className="text-gradient">Start Growing Your Passion.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-lg mx-auto md:mx-0">
            Crow streamlines your bookings, payments, and client management, freeing you up to do what you do best. Perfect for ambitious stylists, therapists, cleaners, and service pros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Using standard anchor tags styled by global CSS */}
            <a href="#download-app" onClick={(e) => handleScrollLink(e, '#download-app')} className="pro-button pro-button-primary text-lg px-8 py-3">Download Now</a>
            <a href="#features" onClick={(e) => handleScrollLink(e, '#features')} className="pro-button pro-button-secondary">Explore Features</a>
             {/* Example using ProButton component if created:
             <ProButton href="#download-app" as="a" variant="primary" className="text-lg px-8 py-3">Download Now</ProButton>
             <ProButton href="#features" as="a" variant="secondary">Explore Features</ProButton>
             */}
          </div>
          <p className="text-sm text-gray-500 mt-6">Join thousands already saving hours every week.</p>
        </div>

        {/* Image */}
        <div ref={imageContentRef} className="reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            {/* Using standard img tag for external URL */}
            <img
              src="/images/hero-image.png" // Replace with actual image URL or import statement
              alt="Crow app interface showing expense management on iPhone"
              className="w-full h-auto mx-auto transform transition duration-500 hover:scale-105 relative z-10 no-shadow" // Added no-shadow class
              onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
              loading="eager" // Eager load for hero image
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
