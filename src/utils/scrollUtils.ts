/**
 * Initializes basic scroll effects on the page
 */
export function initPage() {
  if (typeof window === 'undefined') {
    return () => {};
  }
  
  // Set up scroll reveal
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

  // Handle sticky header
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  };
  
  // Set up smooth scrolling
  const setupSmoothScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');
        
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        // Calculate header height for offset
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        
        // Calculate target position with offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        // Scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
          mobileMenu.classList.remove('mobile-menu-open');
          mobileMenu.classList.add('mobile-menu-closed');
        }
      });
    });
  };
  
  // Initialize all components
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
  
  // Set up reveal animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(element => {
    observer.observe(element);
  });
  
  // Set up smooth scrolling
  setupSmoothScroll();
  
  // Set current year if needed
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear().toString();
  }
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    revealElements.forEach(element => {
      observer.unobserve(element);
    });
  };
} 