'use client'; // Using client component for potential future interactions and dynamic year

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scrolling for navigation links within the footer
  // (Similar to the one in Header, could be extracted to a utility if needed)
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
    }
    // If it's not a hash link, Link component will handle navigation
  };


  return (
    <footer id="support" className="py-16 md:py-20 px-6 lg:px-8 bg-white border-t border-border-color"> {/* Added bg and border */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-12 text-sm pl-2 md:pl-4">
        {/* Column 1: Logo, Description, Social Links */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-6 lg:mb-0 pr-8">
          <Link href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
            <Image
              src="/images/company-icon.png"
              alt="Bookxon Logo"
              width={180}
              height={90}
              priority
            />
          </Link>
          <p className="mt-2 text-xs leading-relaxed mb-6 text-text-secondary">
            Empowering service professionals worldwide to build thriving businesses with less stress and more success.
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-5 social-links">
            {/* Replace '#' with actual social media profile URLs */}
            <a href="#" aria-label="Facebook" className="transition duration-200 text-text-secondary hover:text-[var(--gradient-start)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="transition duration-200 text-text-secondary hover:text-[var(--gradient-start)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372.527-.205.973-.478 1.417-.923.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231s.008-2.389.046-3.232c.035-.78.166-1.204.275-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg>
            </a>
            <a href="#" aria-label="Twitter" className="transition duration-200 text-text-secondary hover:text-[var(--gradient-start)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .79 13.58a6.32 6.32 0 0 1-.79-.045A9.344 9.344 0 0 0 5.026 15z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="transition duration-200 text-text-secondary hover:text-[var(--gradient-start)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Product Links */}
        <div>
          <h5 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Product</h5>
          {/* Added pl-0 and list-none to align list items */}
          <ul className="space-y-3 text-text-secondary pl-0 list-none">
            <li><Link href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-[var(--gradient-start)] hover:underline">Features</Link></li>
            <li><Link href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-[var(--gradient-start)] hover:underline">Pricing</Link></li>
            <li><Link href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-[var(--gradient-start)] hover:underline">How It Works</Link></li>
            <li><Link href="#download-app" onClick={(e) => handleNavClick(e, '#download-app')} className="hover:text-[var(--gradient-start)] hover:underline">Mobile App</Link></li>
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Security</a></li> {/* Placeholder */}
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h5 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Company</h5>
          {/* Added pl-0 and list-none to align list items */}
          <ul className="space-y-3 text-text-secondary pl-0 list-none">
            <li><Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[var(--gradient-start)] hover:underline">About Us</Link></li>
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Careers</a></li> {/* Placeholder */}
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Contact Us</a></li> {/* Placeholder */}
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Blog</a></li> {/* Placeholder */}
          </ul>
        </div>

        {/* Column 4: Resources Links */}
        <div>
          <h5 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Resources</h5>
          {/* Added pl-0 and list-none to align list items */}
          <ul className="space-y-3 text-text-secondary pl-0 list-none">
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Help Center</a></li> {/* Placeholder */}
            <li><Link href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-[var(--gradient-start)] hover:underline">FAQ</Link></li>
            <li><Link href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-[var(--gradient-start)] hover:underline">Testimonials</Link></li>
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Guides</a></li> {/* Placeholder */}
          </ul>
        </div>

        {/* Column 5: Legal Links */}
        <div>
          <h5 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Legal</h5>
          {/* Added pl-0 and list-none to align list items */}
          <ul className="space-y-3 text-text-secondary pl-0 list-none">
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Privacy Policy</a></li> {/* Placeholder */}
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Terms of Service</a></li> {/* Placeholder */}
            <li><a href="#" className="hover:text-[var(--gradient-start)] hover:underline">Cookie Policy</a></li> {/* Placeholder */}
          </ul>
        </div>

        {/* Column 6: Empty placeholder for grid layout */}
        <div></div>
      </div>

      {/* Copyright Section */}
      <div className="copyright mt-16 pt-8 border-t border-border-color text-center text-xs text-text-secondary">
        <p>&copy; {currentYear} Crow Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
