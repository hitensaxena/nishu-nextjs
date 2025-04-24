'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Chip from '@/components/ui/Chip';

const IMAGE_URL = "/images/feature-booking.png";
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=Booking+Calendar';

const FeatureBookingDetail = () => {
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  // Basic smooth scroll handler
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
    <section id="feature-booking-detail" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div ref={textContentRef} className="reveal-on-scroll">
          <Chip className="mb-4 uppercase tracking-wide">Booking Bliss</Chip>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Calendar Fills Itself, Magically</h2>
          <p className="text-lg text-text-secondary mb-6">
            Imagine waking up to a fully booked day without endless back-and-forth. Crow's smart booking system works 24/7, letting clients choose times that work for them (and you!), reducing admin time dramatically.
          </p>
          <ul className="space-y-4 text-text-secondary mb-8">
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Personalized booking page that looks great on any device.</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Automatic confirmations, reminders, and follow-ups reduce no-shows.</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Manage multiple staff & locations with ease (Business Plan).</span>
            </li>
          </ul>
          <a href="#pricing" onClick={(e) => handleScrollLink(e, '#pricing')} className="pro-button pro-button-secondary">See Plans & Pricing</a>
          {/* <ProButton href="#pricing" as="a" variant="secondary">See Plans & Pricing</ProButton> */}
        </div>

        {/* Image */}
        <div ref={imageRef} className="reveal-on-scroll">
          <Image
            src={IMAGE_URL}
            alt="Crow app interactive calendar view showing appointments"
            width={600}
            height={450}
            className="mx-auto transform perspective-1000 rotate-y-[-3deg] hover:rotate-y-0 transition-transform duration-500 no-shadow object-cover w-full h-auto max-h-[480px]"
            style={{ transitionDelay: '0.15s', perspective: '1000px' }}
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = PLACEHOLDER_IMAGE;
            }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBookingDetail;
