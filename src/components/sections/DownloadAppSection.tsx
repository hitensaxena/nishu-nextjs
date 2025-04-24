'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Chip from '@/components/ui/Chip';

const APP_IMAGE_URL = "/images/app-preview.png";
const APP_PLACEHOLDER = 'https://placehold.co/320x600/e2e8f0/94a3b8?text=App+Screenshot';
const QR_CODE_URL = "/images/qr-code.png"; // Replace with actual URL
const QR_PLACEHOLDER = 'https://placehold.co/80x80/ffffff/333333?text=QR';
const APP_STORE_BADGE = "/images/app-store-badge.png"; // Replace with actual URL
const APP_STORE_PLACEHOLDER = 'https://placehold.co/180x50/000000/ffffff?text=App+Store';
const PLAY_STORE_BADGE = '/images/play-store-badge.png'; // Replace with actual URL
const PLAY_STORE_PLACEHOLDER = 'https://placehold.co/180x50/000000/ffffff?text=Google+Play';


const DownloadAppSection = () => {
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="download-app" className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]"></div>
      {/* Background Pattern - Using Tailwind utility for bg-image */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-pattern-cta"></div> {/* Ensure bg-pattern-cta is defined in tailwind.config.js */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text and Download Links */}
          <div ref={textContentRef} className="text-center lg:text-left reveal-on-scroll order-2 lg:order-1">
            <Chip variant="dark" className="mb-6 uppercase tracking-wider">Mobile App Available</Chip>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-white">Your Business,</span><br />
              <span className="text-white">Always in Your Pocket.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0">
              Manage your schedule, connect with clients, process payments, and track performance on the go with the Crow mobile app. Available on iOS and Android.
            </p>

            <div className="space-y-8 flex flex-col items-center lg:items-start">
              {/* App Store Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#" className="transform hover:scale-105 transition duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg">
                  <Image
                    src={APP_STORE_BADGE}
                    alt="Download on the App Store"
                    width={180}
                    height={50}
                    className="h-12 md:h-14 w-auto no-shadow"
                    onError={(e) => { (e.target as HTMLImageElement).src = APP_STORE_PLACEHOLDER; }}
                  />
                </a>
                <a href="#" className="transform hover:scale-105 transition duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg">
                  <Image
                    src={PLAY_STORE_BADGE}
                    alt='Get it on Google Play'
                    width={180}
                    height={50}
                    className="h-12 md:h-14 w-auto no-shadow"
                    onError={(e) => { (e.target as HTMLImageElement).src = PLAY_STORE_PLACEHOLDER; }}
                  />
                </a>
              </div>

              {/* QR Code */}
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-xs w-full">
                <Image
                  src={QR_CODE_URL}
                  alt="QR Code to download Crow app"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md border border-white/20 no-shadow"
                  onError={(e) => { (e.target as HTMLImageElement).src = QR_PLACEHOLDER; }}
                  loading="lazy"
                />
                <div className="text-white text-left">
                  <p className="font-semibold text-sm mb-1">Scan to Download</p>
                  <p className="text-xs opacity-80 leading-snug">Point your camera at the code to get the app instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Image */}
          <div ref={imageContentRef} className="order-1 lg:order-2 reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="relative mx-auto max-w-xs lg:max-w-sm">
              <Image
                src={APP_IMAGE_URL}
                alt="Crow App Interface on a smartphone"
                width={320}
                height={600}
                className="w-full h-auto rounded-3xl transform perspective-1000 hover:scale-105 transition-transform duration-500 relative z-10 no-shadow"
                style={{ perspective: '1000px' }}
                onError={(e) => { (e.target as HTMLImageElement).src = APP_PLACEHOLDER; }}
                priority={false}
              />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
