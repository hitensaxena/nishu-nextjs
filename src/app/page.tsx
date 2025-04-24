'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import TrustedBySection from '@/components/sections/TrustedBySection'
import AboutSection from '@/components/sections/AboutSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import FeatureBookingDetail from '@/components/sections/FeatureBookingDetail'
import FeaturePaymentDetail from '@/components/sections/FeaturePaymentDetail'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StatsSection from '@/components/sections/StatsSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
import DownloadAppSection from '@/components/sections/DownloadAppSection'

export default function Home() {
  useEffect(() => {
    document.body.classList.add('page-loaded');
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
        <FeaturesSection />
        <FeatureBookingDetail />
        <FeaturePaymentDetail />
        <HowItWorksSection />
        <TestimonialsSection />
        <StatsSection />
        <PricingSection />
        <FAQSection />
        <DownloadAppSection />
      </main>
    </div>
  )
}
