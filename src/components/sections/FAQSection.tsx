'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqData = [
  { q: 'How easy is it to get started with Crow?', a: 'Getting started is simple! Sign up for a free account or paid plan, follow the quick setup guide (add services, availability), and share your unique booking link. Most users are ready to accept bookings within 10-15 minutes. We also have helpful guides and support if you need assistance.' },
  { q: 'Can I use Crow on my phone and computer?', a: 'Absolutely! Crow is designed as a web application that works seamlessly across desktops, tablets, and mobile browsers. We also offer dedicated mobile apps for iOS and Android (included with Pro and Business plans) for the best on-the-go experience.' },
  { q: 'How does Crow help reduce no-shows?', a: "Crow's Pro and Business plans include several features to combat no-shows: automated email/SMS reminders, the ability to require deposits or save client card details, and customizable cancellation policies with automatic fee enforcement. Users typically see a significant reduction in missed appointments." },
  { q: 'What if I already use Google Calendar or Outlook?', a: 'No problem! Crow offers two-way calendar sync (available on paid plans) with Google Calendar and Outlook Calendar. This prevents double bookings by blocking off time in Crow when you have external events, and vice-versa.' },
  { q: 'What kind of support do you offer?', a: 'We offer comprehensive support! All users have access to our extensive online Help Center 24/7. Email support is available for all plans, while Pro and Business plan users benefit from priority email and chat support channels during business hours.' }
]

// FAQ Item Component
interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // Sync internal state with external prop
  useEffect(() => {
    if (detailsRef.current && detailsRef.current.open !== isOpen) {
      detailsRef.current.open = isOpen
    }
  }, [isOpen])

  // Handle direct click on summary to toggle state via parent
  const handleSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault() // Prevent default details toggle
    onToggle()
  }

  return (
    <div className="faq-item">
      <details ref={detailsRef} open={isOpen}>
        {/* Use button inside summary for better accessibility */}
        <summary
          onClick={handleSummaryClick}
          className="list-none cursor-pointer py-6 px-2 font-semibold flex justify-between items-center transition-colors duration-200 ease-in-out hover:bg-bx-secondary"
        >
          <span>{question}</span>
          <span className={`faq-icon transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </summary>
        {/* Content: Use a div for padding and border */}
        <div className="px-2 pb-6 pt-2 text-text-secondary text-sm leading-relaxed">
          {answer}
        </div>
      </details>
    </div>
  )
}

// Main FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollReveal();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Basic smooth scroll handler
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId.substring(1))
    if (element) {
      const headerOffset = 80 // Adjust as needed
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 bg-white">
      <div ref={sectionRef} className="max-w-4xl mx-auto reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            <span className="block">Got Questions?</span>
            <span className="text-gradient">We Have Answers.</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Find answers to common questions about Crow.
          </p>
        </div>
        <div className="faq-list space-y-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        <p className="text-center mt-12 text-text-secondary">
          Still have questions? <a href="#support" onClick={(e) => handleScrollLink(e, '#support')} className="font-medium text-[var(--gradient-start)] hover:text-[var(--gradient-hover-start)] hover:underline">Contact our friendly support team</a>.
        </p>
      </div>
    </section>
  )
}

export default FAQSection