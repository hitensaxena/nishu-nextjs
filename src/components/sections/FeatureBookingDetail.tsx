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
      {/* Changed to flex column on mobile, grid on md+ */}
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-16 md:items-center">
        {/* Combined Content Wrapper - Order 1 on md+ */}
        <div className="md:order-1 flex flex-col w-full">
          {/* Title Block - Order 1 on mobile */}
          <div ref={textContentRef} className="order-1 md:order-none reveal-on-scroll text-left">
            <Chip className="mb-4 uppercase tracking-wide inline-flex">Booking Bliss</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Your Calendar Fills Itself, Magically</h2>
          </div>

          {/* Image Block - Order 2 on mobile */}
          {/* NOTE: The image is now structurally within the first column for flex ordering, but visually appears in the second column on md+ due to the grid definition on the parent */}
          <div ref={imageRef} className="order-2 md:order-none reveal-on-scroll my-6 md:my-0 md:hidden">
            {/* Image visible only on mobile within this flow */}
            <Image
              src={IMAGE_URL}
              alt="Crow app interactive calendar view showing appointments - Mobile"
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

          {/* Description Block - Order 3 on mobile */}
          <div className="order-3 md:order-none reveal-on-scroll text-left">
            <p className="text-lg text-text-secondary mb-6 text-left">
              Imagine waking up to a fully booked day without endless back-and-forth. Crow's smart booking system works 24/7, letting clients choose times that work for them (and you!), reducing admin time dramatically.
            </p>
            <ul className="space-y-2 md:space-y-4 text-text-secondary mb-6 md:mb-8 text-left pl-0">
              <li className="flex items-start">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
                <span>Personalized booking page that looks great on any device.</span>
              </li>
              <li className="flex items-start">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
                <span>Automatic confirmations, reminders, and follow-ups reduce no-shows.</span>
              </li>
              <li className="flex items-start">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
                <span>Manage multiple staff & locations with ease (Business Plan).</span>
              </li>
            </ul>
            <a href="#pricing" onClick={(e) => handleScrollLink(e, '#pricing')} className="pro-button pro-button-secondary">See Plans & Pricing</a>
            {/* <ProButton href="#pricing" as="a" variant="secondary">See Plans & Pricing</ProButton> */}
          </div>
        </div>

        {/* Image - Order 2 on md+ (Separate div for grid layout) */}
        <div ref={imageRef} className="hidden md:block md:order-2 reveal-on-scroll">
          {/* Image visible only on md+ screens */}
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
