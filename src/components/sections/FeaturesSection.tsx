'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Data for features
const features = [
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/calendar-check-2.svg", title: "Effortless 24/7 Booking", description: "Clients book themselves anytime, anywhere. Syncs instantly with your calendar. Say goodbye to phone tag!", delay: 0 },
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/smartphone-charging.svg", title: "Seamless Payments", description: "Accept online payments, take deposits, manage payouts. Secure, fast, and integrated directly.", delay: 100 },
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shield-check.svg", title: "No-Show Guard", description: "Protect your income. Enforce cancellation policies automatically with deposits or stored cards.", delay: 200 },
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/users.svg", title: "Smart Client Hub", description: "Track history, notes, preferences. Send targeted messages. Build lasting client loyalty.", delay: 50 },
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/send.svg", title: "Automated Marketing", description: "Run promotions, collect reviews, send automated reminders & thank-yous. Keep clients engaged.", delay: 150 },
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bar-chart-3.svg", title: "Insightful Analytics", description: "Understand your business better. Track bookings, revenue, client retention, and make data-driven decisions.", delay: 250 },
];

// Reusable Feature Card Component (Optional, defined inline here for simplicity)
const FeatureCard = ({ icon, title, description, delay }: typeof features[0]) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <div
      ref={cardRef}
      className="p-8 bg-white rounded-xl border border-border-color shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={icon} alt="" className="icon-feature no-shadow" /> {/* Added no-shadow */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
};


const FeaturesSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="features" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Your Business <span className="text-gradient">Supercharged</span></h2>
          <p className="text-lg text-text-secondary">
            Crow packs powerful features into a simple, intuitive interface designed to save you time and boost your revenue.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
