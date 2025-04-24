'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
// import ProButton from '@/components/ui/ProButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data for pricing plans
const plans = [
  {
    name: "Starter",
    description: "Perfect for solo professionals just getting started.",
    price: "Free",
    priceDetail: "Basic booking essentials",
    buttonText: "Get Started Free",
    buttonVariant: "secondary",
    features: [
      { text: "Online Booking Page", included: true },
      { text: "Calendar Management", included: true },
      { text: "Basic Client Records (up to 50)", included: true },
      { text: "Payment Processing", included: false },
      { text: "Automated Reminders", included: false },
    ],
    popular: false,
    delay: 0,
    href: "#download-app" // Example link
  },
  {
    name: "Pro",
    description: "For established pros looking to streamline & grow.",
    price: "$29",
    priceDetail: "/ month",
    priceSubDetail: "(Billed annually, or $35 month-to-month)",
    buttonText: "Choose Pro Plan",
    buttonVariant: "primary",
    features: [
      { text: "Everything in Starter, plus:", included: true, highlight: true },
      { text: "Unlimited Clients & Bookings", included: true },
      { text: "Secure Payment Processing", included: true },
      { text: "No-Show Protection Tools", included: true },
      { text: "Automated Reminders & Follow-ups", included: true },
      { text: "Basic Marketing Tools", included: true },
    ],
    popular: true,
    delay: 100,
    href: "#download-app" // Example link
  },
  {
    name: "Business",
    description: "For teams and businesses ready to scale operations.",
    price: "$59+",
    priceDetail: "/ month",
    priceSubDetail: "(Based on team size)",
    buttonText: "Contact Sales",
    buttonVariant: "secondary",
    features: [
      { text: "Everything in Pro, plus:", included: true, highlight: true },
      { text: "Multi-Staff Management", included: true },
      { text: "Multiple Location Support", included: true },
      { text: "Advanced Analytics & Reporting", included: true },
      { text: "Staff Roles & Permissions", included: true },
      { text: "Priority Support", included: true },
    ],
    popular: false,
    delay: 200,
    href: "#contact-sales" // Example link
  },
];

// Icon components (replace with actual SVGs or library)
// Icon components with proper Next.js Image configuration
const CheckIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg" 
      alt=""
      width={16}
      height={16}
      className="text-[var(--gradient-start)]"
      unoptimized
    />
  </div>
);

const CheckCheckIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-check.svg" 
      alt=""
      width={16}
      height={16}
      className="text-[var(--gradient-start)]"
      unoptimized
    />
  </div>
);

const XIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg" 
      alt=""
      width={16}
      height={16}
      className="text-gray-400"
      unoptimized
    />
  </div>
);


// Pricing Card Component
const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    // useScrollReveal(); // Keep commented if not actively using its JS

    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(targetId.substring(1));
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    return (
        <div
            ref={cardRef}
            // Simplified transition, removed reveal-on-scroll temporarily
            className={`flex flex-col p-8 bg-white rounded-xl border shadow-md h-full relative 
                transition duration-300 ease-in-out 
                hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:z-20 
                ${
                // Keep border and shadow emphasis for popular
                plan.popular ? 'border-2 border-[var(--gradient-start)] shadow-xl z-10' : 'border-border-color' 
            }`}
            // style={{ transitionDelay: `${plan.delay}ms` }} // Keep commented unless scroll reveal needs it
        >
            {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-10">
                    Most Popular
                </span>
            )}
            {/* Add margin-top if popular to account for the badge space */}
            <h3 className={`text-2xl font-semibold mb-2 ${plan.popular ? 'mt-3' : ''}`}>{plan.name}</h3>
            <p className="text-text-secondary text-sm mb-6 min-h-[40px]">{plan.description}</p>
            <div className="mb-1 flex flex-col">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                {plan.priceDetail && <span className="text-sm text-gray-500 mt-1">{plan.priceDetail}</span>}
            </div>
            {plan.priceSubDetail && <p className="text-xs text-gray-500 mb-8 -mt-1">{plan.priceSubDetail}</p>}
            {/* Ensure consistent spacing below price details */}
            {!plan.priceSubDetail && <div className="h-[36px] mb-8"></div>} 

            <ul className="space-y-3 text-sm text-text-secondary mb-8"> {/* Added mb-8 for spacing before button */}
                {plan.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${!feature.included ? 'text-gray-400' : ''} ${('highlight' in feature && feature.highlight) ? 'font-medium text-text-primary' : ''}`}>
                        {feature.included
                            ? ('highlight' in feature && feature.highlight) // Check if highlight exists and is true
                                ? <CheckCheckIcon />
                                : <CheckIcon />
                            : <XIcon />
                        }
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>
            <a
              href={plan.href}
              onClick={(e) => handleScrollLink(e, plan.href)}
              // Ensure button styles are correctly applied (assuming pro-button classes exist elsewhere)
              className={`pro-button ${plan.buttonVariant === 'primary' ? 'pro-button-primary' : 'pro-button-secondary'} w-full mt-auto`} 
            >
                {plan.buttonText}
            </a>
        </div>
    );
};

const PricingSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            <span className="block">Transparent Pricing.</span>
            <span className="text-gradient">Start Growing Your Passion.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Find the perfect plan to fuel your growth. Simple, affordable, and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
