'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Image from 'next/image';

// Data for testimonials
const testimonials = [
    { img: "https://i.pravatar.cc/150?img=32", name: "Sarah Wilson", title: "Freelance Designer", quote: "\"Crow has completely transformed how I manage my design business. The automated booking system alone has saved me countless hours of back-and-forth emails.\"" },
    { img: "https://i.pravatar.cc/150?img=11", name: "Michael Chen", title: "Personal Trainer", quote: "\"The payment protection feature is a game-changer. No more chasing invoices, and my income is much more stable. Clients love the professional experience.\"" },
    { img: "https://i.pravatar.cc/150?img=26", name: "Emma Rodriguez", title: "Hair Stylist", quote: "\"Running my salon is so much easier. Automated reminders cut down no-shows, and the analytics help me make smarter business decisions. Highly recommend!\"" },
    { img: "https://i.pravatar.cc/150?img=45", name: "David Lee", title: "Marketing Consultant", quote: "\"Crow's analytics dashboard gives me the insights I need to grow my consultancy. Seeing booking trends and client retention data is invaluable.\"" },
    { img: "https://i.pravatar.cc/150?img=47", name: "Jessica Miller", title: "Massage Therapist", quote: "\"Switching to Crow was the best decision for my practice. The no-show protection has saved me so much lost income, and clients find it super easy to book.\"" },
    { img: "https://i.pravatar.cc/150?img=51", name: "Brian Clark", title: "Cleaner Services Owner", quote: "\"Managing multiple cleaners and schedules used to be chaotic. Crow Business Plan simplified everything. Highly recommended for teams.\"" },
    { img: "https://i.pravatar.cc/150?img=65", name: "Olivia Green", title: "Yoga Instructor", quote: "\"I love having a professional booking page! It makes my small studio look much more established. Plus, automated reminders are a lifesaver.\"" },
    { img: "https://i.pravatar.cc/150?img=68", name: "Kevin Harris", title: "Photographer", quote: "\"Taking payments upfront or deposits through Crow has streamlined my workflow significantly. Less admin, more time behind the camera.\"" },
    { img: "https://i.pravatar.cc/150?img=31", name: "Chloe Adams", title: "Nutritionist", quote: "\"The client hub is fantastic for keeping track of notes and progress. It helps me provide a much more personalized service.\"" },
    { img: "https://i.pravatar.cc/150?img=14", name: "Ryan Scott", title: "Tutor", quote: "\"Simple to set up, easy for parents to book sessions for their kids, and reliable. Crow takes the hassle out of scheduling.\"" }
];

// First TestimonialCard component (keep this one)
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="w-full lg:w-1/3 flex-shrink-0 px-4 testimonial-slide">
    <div className="bg-[#E5FFFB] p-8 rounded-2xl h-full flex flex-col">
      <div className="flex items-center mb-5">
        <Image
          src={testimonial.img}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full mr-4 object-cover border-2 border-white shadow-sm no-shadow"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-text-secondary">{testimonial.title}</p>
        </div>
      </div>
      <blockquote className="text-text-secondary mb-5 flex-grow">{testimonial.quote}</blockquote>
      <div className="flex text-yellow-400 mt-auto">★★★★★</div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [numDots, setNumDots] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useScrollReveal();

  const totalItems = testimonials.length;

  // Calculate items per view based on window width
  const calculateItems = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1; // Default mobile
  }, []);

  // Update state on resize and initial load
  useEffect(() => {
    const handleResize = () => {
        const newItemsPerView = calculateItems();
        const newNumDots = Math.ceil(totalItems / newItemsPerView);
        setItemsPerView(newItemsPerView);
        setNumDots(newNumDots);
        // Adjust currentIndex if it becomes invalid
        setCurrentIndex(prev => Math.min(prev, totalItems - newItemsPerView));
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateItems, totalItems]);


  // Update slider position
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate the effective index, preventing scroll past the last group
       const effectiveIndex = Math.min(currentIndex, Math.max(0, totalItems - itemsPerView));
       const slidePercentage = 100 / itemsPerView; // Assumes slides have equal flex basis/width
       sliderRef.current.style.transform = `translateX(-${effectiveIndex * slidePercentage}%)`;
    }
  }, [currentIndex, itemsPerView, totalItems]);

  // Autoplay logic
  const startAutoplay = useCallback(() => {
    stopAutoplay(); // Clear existing interval
    if (totalItems > itemsPerView) { // Only play if multiple pages
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextPageIndex = Math.floor(prevIndex / itemsPerView) + 1;
          const totalPages = Math.ceil(totalItems / itemsPerView);
          return (nextPageIndex % totalPages) * itemsPerView;
        });
      }, 5000); // Change slide every 5 seconds
    }
  }, [itemsPerView, totalItems]);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay; // Cleanup on unmount
  }, [startAutoplay]); // Restart if itemsPerView changes

  // Handlers for buttons/dots
  const move = (direction: 'prev' | 'next') => {
    stopAutoplay();
    const currentPageIndex = Math.floor(currentIndex / itemsPerView);
    const totalPages = Math.ceil(totalItems / itemsPerView);
    let nextPageIndex;
    if (direction === 'next') {
        nextPageIndex = (currentPageIndex + 1) % totalPages;
    } else {
        nextPageIndex = (currentPageIndex - 1 + totalPages) % totalPages;
    }
    setCurrentIndex(nextPageIndex * itemsPerView);
    startAutoplay(); // Restart autoplay after manual interaction
  };

  // Remove or use these variables
  // Remove these lines as they're causing the duplicate declaration
  // Remove these commented out lines completely
  /*
  const currentDotIndex = activeIndex;
  const goTo = (index: number) => {
    setActiveIndex(index);
  };
  */

  const currentDotIndex = Math.floor(currentIndex / itemsPerView);

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">What Our Users <span className="text-gradient">Are Saying</span></h2>
          <p className="text-lg text-text-secondary">
            Real stories from real professionals who transformed their business with Crow.
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="testimonial-carousel relative reveal-on-scroll">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              onMouseEnter={stopAutoplay} // Optional: pause on hover
              onMouseLeave={startAutoplay} // Optional: resume on leave
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Controls - Only show if needed */}
          {totalItems > itemsPerView && (
            <>
              <button
                aria-label="Previous Testimonial"
                className="absolute top-1/2 -left-3 sm:-left-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] ring-offset-1 z-10"
                onClick={() => move('prev')}
              >
                <ChevronLeft className="w-5 h-5 text-[var(--gradient-start)]" />
              </button>
              <button
                aria-label="Next Testimonial"
                className="absolute top-1/2 -right-3 sm:-right-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] ring-offset-1 z-10"
                onClick={() => move('next')}
              >
                <ChevronRight className="w-5 h-5 text-[var(--gradient-start)]" />
              </button>
            </>
          )}
        </div>
    </div>
    </section>
  );
};

export default TestimonialsSection;

// Remove this duplicate TestimonialCard component completely
/*
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <Image
        src={testimonial.avatar}
        alt={`${testimonial.name}'s photo`}
        width={60}
        height={60}
        className="rounded-full"
      />
    </div>
  );
};
*/