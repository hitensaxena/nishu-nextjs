'use client'; // This component uses client-side hooks (useState, useEffect)

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// If using lucide-react for icons:
// import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow if scrolled more than 50px, otherwise remove
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll listener when component mounts
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll();

    // Cleanup function to remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle smooth scrolling for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Check if it's an internal hash link
    if (targetId.startsWith('#')) {
      e.preventDefault(); // Prevent default anchor jump
      const targetElement = document.getElementById(targetId.substring(1)); // Get target element
      if (targetElement) {
        const headerOffset = 70; // Adjust this value based on your actual header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Perform smooth scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Close mobile menu after clicking a link
      setIsMenuOpen(false);
    }
    // If it's not a hash link, Link component will handle navigation
  };

  // Toggle mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header element with dynamic classes for sticky behavior and shadow
    <header
      id="main-header"
      className={`sticky-header flex items-center h-16 md:h-20 ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto w-full pl-2 pr-6 md:pl-4 md:pr-10 flex items-center justify-between">
        <Link href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
          <Image
            src="/images/company-icon.png"
            alt="Bookxon Logo"
            width={180}
            height={90}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          <Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-sm font-medium text-gray-700 hover:text-[var(--gradient-start)] transition duration-200 flex items-center h-full">About</Link>
          <Link href="#features" onClick={(e) => handleNavClick(e, '#features')} className="text-sm font-medium text-gray-700 hover:text-[var(--gradient-start)] transition duration-200 flex items-center h-full">Features</Link>
          <Link href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-sm font-medium text-gray-700 hover:text-[var(--gradient-start)] transition duration-200 flex items-center h-full">Pricing</Link>
          <Link href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-sm font-medium text-gray-700 hover:text-[var(--gradient-start)] transition duration-200 flex items-center h-full">Reviews</Link>
          <Link href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-sm font-medium text-gray-700 hover:text-[var(--gradient-start)] transition duration-200 flex items-center h-full">FAQ</Link>
        </nav>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Download Button (visible on sm screens and up) */}
          {/* Using standard <a> styled globally */}
          <a
            href="#download-app"
            onClick={(e) => handleNavClick(e, '#download-app')}
            className="pro-button pro-button-primary text-sm hidden sm:inline-flex"
          >
            Download Now
          </a>
          {/* Mobile Menu Button (visible below md screens) */}
          <button
            id="mobile-menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-[var(--gradient-start)] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)]"
          >
            {/* Simple SVG Icon - Replace with <Menu /> / <X /> from lucide-react if preferred */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                 // Close icon (X) - corrected SVG structure
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <> {/* Menu icon (Hamburger) */}
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        // Conditional rendering based on state
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 border-t border-[var(--border-color)] z-40`} // Ensure z-index is below header if needed
      >
        <nav className="flex flex-col space-y-3">
          <Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="mobile-nav-link block text-base font-medium text-gray-700 hover:text-[var(--gradient-start)] py-2">About</Link>
          <Link href="#features" onClick={(e) => handleNavClick(e, '#features')} className="mobile-nav-link block text-base font-medium text-gray-700 hover:text-[var(--gradient-start)] py-2">Features</Link>
          <Link href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="mobile-nav-link block text-base font-medium text-gray-700 hover:text-[var(--gradient-start)] py-2">Pricing</Link>
          <Link href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="mobile-nav-link block text-base font-medium text-gray-700 hover:text-[var(--gradient-start)] py-2">Reviews</Link>
          <Link href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="mobile-nav-link block text-base font-medium text-gray-700 hover:text-[var(--gradient-start)] py-2">FAQ</Link>
          {/* Mobile Download Button */}
          <a
            href="#download-app"
            onClick={(e) => handleNavClick(e, '#download-app')}
            className="mobile-nav-link block w-full mt-4 pro-button pro-button-primary text-sm text-center" // Added text-center
          >
            Download Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
