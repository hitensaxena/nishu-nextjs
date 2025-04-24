'use client'

import React, { useState, useRef, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

// Utility function for combining class names
const cn = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Types and interfaces
type Step = {
  title: string;
  description: string;
  quote?: string;
  img: string;
  placeholder: string;
};

// Data definitions
const freelancerSteps: Step[] = [
  {
    title: "Quick Personal Setup",
    description: "Create your professional profile in minutes. Add your services, define your working hours, and get your unique booking link ready to share.",
    quote: "\"Seriously, I went from signup to taking my first booking in less than 10 minutes!\" - Freelance User",
    img: "images/how-it-works-step1.png",
    placeholder: "https://placehold.co/600x400/d1fae5/10b981?text=Freelancer+Setup"
  },
  {
    title: "Share Your Link & Get Booked",
    description: "Add your booking link to your social media bio, website, or email signature. Clients can easily view your availability and book appointments 24/7.",
    quote: "\"My clients love how simple it is. No more back-and-forth messages trying to find a time.\" - Freelance User",
    img: "images/how-it-works-step2.png",
    placeholder: "https://placehold.co/600x400/a7f3d0/059669?text=Freelancer+Booking"
  },
  {
    title: "Manage & Grow",
    description: "Focus on your craft while Crow handles the admin. Manage appointments, track client history, process payments, and watch your independent business thrive.",
    quote: "\"Crow gives me back hours every week. It's like having a personal assistant for my business!\" - Freelance User",
    img: "images/how-it-works-step3.png",
    placeholder: "https://placehold.co/600x400/6ee7b7/047857?text=Freelancer+Growth"
  }
];

const businessSteps: Step[] = [
  {
    title: "Set Up Your Team & Services",
    description: "Easily add multiple staff members, assign services, manage individual schedules, and configure different locations if needed.",
    quote: "\"Onboarding our whole team was surprisingly straightforward. Huge time saver!\" - Business Owner",
    img: "images/how-it-works-business-step1.png",
    placeholder: "https://placehold.co/600x400/cffafe/06b6d4?text=Business+Setup"
  },
  {
    title: "Streamline Operations",
    description: "Manage bookings across your entire team from a central dashboard. Assign roles, track performance, and ensure smooth day-to-day operations.",
    quote: "\"Having a unified view of all appointments and staff availability is invaluable.\" - Business Owner",
    img: "images/how-it-works-business-step2.png",
    placeholder: "https://placehold.co/600x400/a5f3fc/0891b2?text=Business+Operations"
  },
  {
    title: "Scale Your Business",
    description: "Leverage advanced analytics to understand booking trends, revenue streams, and client behavior. Make informed decisions to grow efficiently.",
    quote: "\"The insights from Crow's analytics have directly impacted our growth strategy.\" - Business Owner",
    img: "images/how-it-works-business-step3.png",
    placeholder: "https://placehold.co/600x400/67e8f9/0e7490?text=Business+Scaling"
  }
];

// Main Section Component
const HowItWorksSection = () => {
  const [isFreelancer, setIsFreelancer] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);
  const [showToggle, setShowToggle] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(true);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Adjust threshold slightly if needed
      const threshold = 0.05;
      setShowToggle(latest < threshold);
      setShowSubtitle(latest < threshold);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentSteps = useMemo(() =>
    isFreelancer ? freelancerSteps : businessSteps,
    [isFreelancer]
  );

  const numSteps = currentSteps.length;
  const sectionHeight = useMemo(() => `${(numSteps + 1.5) * 100}vh`, [numSteps]); // Keep dynamic height

  return (
    <section
      ref={targetRef}
      className="relative bg-bg-light"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* REMOVED max-w-7xl and mx-auto from here, moved it down */}
        <div className="h-full flex flex-col min-h-screen">
          {/* Header Wrapper: Title, Subtitle, and Toggle */}
          {/* Animate height, padding, and opacity */}
          <motion.div
            className="text-center z-10 relative overflow-hidden" // Added overflow-hidden
            initial={{ height: 'auto', paddingTop: '2rem', paddingBottom: '1rem', opacity: 1 }} // Initial state based on original padding
            animate={{
              height: showToggle ? 'auto' : 0,
              paddingTop: showToggle ? ['0.5rem', '2rem'] : 0, // Adjusted md padding timing
              paddingBottom: showToggle ? ['0.5rem', '1rem'] : 0, // Adjusted md padding timing
              opacity: showToggle ? 1 : 0,
              transition: { duration: 0.3 } // Smooth transition for collapse
            }}
            // Apply md specific padding adjustments within the animation if needed,
            // but animating padding directly might be simpler.
            // Consider using variants if complexity increases.
          >
            {/* Added max-w-7xl mx-auto px-4 here to constrain header content */}
            <div className="max-w-7xl mx-auto px-4">
              {/* Title */}
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: showToggle ? 1 : 0 }}>
                <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-3 md:mb-5">
                  How Crow Works For You
                </h1>
              </motion.div>
              {/* Subtitle */}
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: showSubtitle ? 1 : 0 }}>
                <p className="text-base md:text-lg text-text-secondary text-center mb-4 md:mb-0">
                  Choose your path and see how Crow adapts to your needs
                </p>
              </motion.div>

              {/* Toggle Buttons */}
              <motion.div
                className="flex justify-center items-center pt-4" // Adjusted padding timing via parent
                initial={{ opacity: 1 }}
                animate={{ opacity: showToggle ? 1 : 0 }} // Animate toggle visibility
              >
                <div className="inline-flex rounded-full bg-white p-1 shadow-md border border-border-color">
                  <button
                    onClick={() => setIsFreelancer(true)}
                    className={cn(
                      "px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors",
                      isFreelancer
                        ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md'
                        : 'text-text-secondary hover:bg-gray-100'
                    )}
                  >
                    For Freelancers
                  </button>
                  <button
                    onClick={() => setIsFreelancer(false)}
                    className={cn(
                      "px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors",
                      !isFreelancer
                        ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md'
                        : 'text-text-secondary hover:bg-gray-100'
                    )}
                  >
                    For Businesses
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content Area - Render each step individually */}
          <div className="relative flex-grow max-w-7xl mx-auto w-full px-4">
            {currentSteps.map((step, index) => {
              const start = index / numSteps;
              const end = (index + 1) / numSteps;
              // Define fade-in/out points slightly inside the step's scroll range
              const fadeInStart = start + 0.05;
              const fadeOutEnd = end - 0.05;

              // Reintroduce opacity based on scroll progress for the step container
              const opacity = useTransform(
                scrollYProgress,
                // Fade in quickly near the start, fade out quickly near the end
                [start, fadeInStart, fadeOutEnd, end],
                [0, 1, 1, 0]
              );

              // Vertical scroll for text - Keep the full viewport scroll
              const textY = useTransform(
                scrollYProgress,
                [start, end],
                ["-50vh", "50vh"] // Keep this range
              );

              // Determine layout order based on index
              const isEven = index % 2 === 0;
              const textOrder = isEven ? "md:order-1" : "md:order-2";
              const imageOrder = isEven ? "md:order-2" : "md:order-1";

              return (
                // Apply the opacity animation to the step container
                <motion.div
                  key={`step-${index}-${isFreelancer ? 'f' : 'b'}`}
                  className="absolute inset-0 flex"
                  style={{ opacity }} // Apply opacity style
                  // No initial opacity needed here, useTransform handles it
                >
                  {/* Inner container for flex layout - Add conditional padding-top */}
                  <div className={cn(
                      "flex flex-col md:flex-row gap-4 md:gap-8 w-full h-full items-center",
                      // Add padding-top when header is shown (showToggle is true)
                      // Adjust pt-40 (10rem/160px) or pt-48 (12rem/192px) if needed based on actual header height
                      showToggle ? "pt-40 md:pt-48" : "pt-0" 
                  )}>

                    {/* Text Content Wrapper - Handles vertical scroll */}
                    <div className={cn(
                      "w-full md:w-1/2 flex flex-col justify-center",
                      "text-center md:text-left",
                      "order-2",
                      textOrder,
                      "overflow-hidden",
                      // Adjust height calculation if needed due to padding
                      "h-1/2 md:h-full" 
                    )}>
                      {/* Inner motion div for text scrolling */}
                      <motion.div
                        className="w-full"
                        style={{ y: textY }}
                        // Keep initial position matching scroll start
                        initial={{ y: "-50vh" }}
                      >
                        {/* Add padding for text content */}
                        <div className="max-w-md px-4 py-4 md:py-0 md:px-8 lg:px-12">
                          <h2 className="text-xl md:text-3xl font-bold mb-2 text-text-primary">
                            {step.title}
                          </h2>
                          <p className="text-sm md:text-lg text-text-secondary mb-2">
                            {step.description}
                          </p>
                          {step.quote && (
                            <p className="text-xs md:text-base text-gray-600 italic">
                              {step.quote}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Image Content - Remains static */}
                    <div className={cn(
                      "w-full md:w-1/2 flex items-center justify-center",
                      "order-1",
                      imageOrder,
                       // Adjust height calculation if needed due to padding
                      "h-1/2 md:h-full"
                    )}>
                       {/* No changes needed here for zoom, as none was applied via scroll */}
                      <div className="relative w-full h-full">
                         <div className="relative w-full h-full">
                            <Image
                              src={step.img}
                              alt={step.title}
                              fill
                              sizes="(max-width: 768px) 90vw, 50vw"
                              // Change object-cover to object-contain
                              className="rounded-lg object-contain shadow-xl" 
                              priority={index === 0}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = step.placeholder;
                                target.srcset = "";
                              }}
                            />
                         </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;