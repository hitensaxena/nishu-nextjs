'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Chip from '@/components/ui/Chip';

const IMAGE_URL = "/images/feature-payment.png";
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=Payment+Flow';

const FeaturePaymentDetail = () => {
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
    <section id="feature-payment-detail" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
      {/* Removed items-center for mobile, added md:items-center */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 md:items-center">
        {/* Image - Order 1 on mobile, Order 1 on md+ (as it's the first element in source for md+) */}
        {/* Corrected order classes: image first on mobile */}
        <div ref={imageRef} className="order-1 md:order-1 reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <Image
            src={IMAGE_URL}
            alt="Crow app secure payment flow visual representation"
            width={600}
            height={450}
            // Added rounded-lg for consistency
            className="mx-auto transform perspective-1000 rotate-y-[3deg] hover:rotate-y-0 transition-transform duration-500 no-shadow object-cover w-full h-auto max-h-[480px] rounded-lg"
            style={{ perspective: '1000px' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = PLACEHOLDER_IMAGE;
            }}
            priority={false}
          />
        </div>

        {/* Text Content - Order 2 on mobile, Order 2 on md+ */}
        {/* Corrected order classes: text second on mobile */}
        <div ref={textContentRef} className="order-2 md:order-2 reveal-on-scroll">
          <Chip className="mb-4 uppercase tracking-wide">Cashflow Confidence</Chip>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Paid Promptly, Protect Your Time</h2>
          <p className="text-lg text-text-secondary mb-6">
            No more awkward payment chases or lost revenue from no-shows. Crow integrates secure payments and customizable cancellation policies, ensuring you get paid for your valuable time.
          </p>
          <ul className="space-y-4 text-text-secondary mb-8">
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Take deposits or full payment upfront securely via Stripe.</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Automate cancellation fees based on your custom policy rules.</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-circle-2.svg" alt="Check" className="w-5 h-5 mr-3 text-[var(--gradient-start)] flex-shrink-0 mt-1" />
              <span>Easy tracking of income and quick, reliable bank payouts.</span>
            </li>
          </ul>
          <a href="#download-app" onClick={(e) => handleScrollLink(e, '#download-app')} className="pro-button pro-button-primary">Secure Your Income Today</a>
          {/* <ProButton href="#download-app" as="a" variant="primary">Secure Your Income Today</ProButton> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturePaymentDetail;
