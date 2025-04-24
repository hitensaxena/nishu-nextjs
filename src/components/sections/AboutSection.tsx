import React, { useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Chip from '@/components/ui/Chip';

// Update the image path to include the full path from public directory
const IMAGE_URL = "/images/about-us.png";  // This is correct if the image is in public/images/
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x450/e2e8f0/94a3b8?text=About+Us+Image';

const AboutSection = () => {
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 px-6 lg:px-8 bg-white">
      {/* Removed items-center on mobile to allow natural flow, added back on md */}
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 md:items-center">
        {/* Combined Content Wrapper - Order 2 on md+ (Text content) */}
        <div className="md:order-2 flex flex-col w-full">
          {/* Title Block - Order 1 on mobile */}
          <div ref={textContentRef} className="order-1 md:order-none reveal-on-scroll text-left">
            <Chip className="mb-4 uppercase tracking-wide inline-flex">About Us</Chip>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Empowering Service Professionals Since 2023</h2>
          </div>

          {/* Image Block - Order 2 on mobile */}
          <div ref={imageRef} className="order-2 md:order-none reveal-on-scroll my-6 md:my-0 md:hidden">
            <Image
              src={IMAGE_URL}
              alt="Diverse team collaborating on the Crow project - Mobile"
              width={600}
              height={450}
              className="mx-auto transform perspective-1000 rotate-y-[3deg] hover:rotate-y-0 transition-transform duration-500 no-shadow object-cover w-full h-auto max-h-[480px] rounded-lg"
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
            <p className="text-lg text-text-secondary mb-6">
              At Crow, we're dedicated to revolutionizing how service professionals manage their businesses. Our platform combines cutting-edge technology with user-friendly design to create the most efficient business management solution available.
            </p>
            <p className="text-lg text-text-secondary mb-8">
              Founded by a team of industry experts and innovative developers, we understand the unique challenges service professionals face. Our mission is to eliminate administrative burdens, allowing you to focus on what truly matters - delivering exceptional service to your clients.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center p-6 bg-bg-light rounded-xl border border-gray-200">
                <p className="text-4xl font-bold text-gradient mb-2">10K+</p>
                <p className="text-sm text-text-secondary font-medium">Active Users</p>
              </div>
              <div className="text-center p-6 bg-bg-light rounded-xl border border-gray-200">
                <p className="text-4xl font-bold text-gradient mb-2">98%</p>
                <p className="text-sm text-text-secondary font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Order 1 on md+ (Separate div for grid layout) */}
        <div ref={imageRef} className="hidden md:block md:order-1 reveal-on-scroll">
          <Image
            src={IMAGE_URL}
            alt="Diverse team collaborating on the Crow project"
            width={600}
            height={450}
            className="mx-auto transform perspective-1000 rotate-y-[3deg] hover:rotate-y-0 transition-transform duration-500 no-shadow object-cover w-full h-auto max-h-[480px] rounded-lg"
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

export default AboutSection;
