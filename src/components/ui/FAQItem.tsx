'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="faq-item border-b border-[var(--border-color)] last:border-b-0">
      <details open={isOpen} className="group">
        <summary 
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          className="py-5 px-2 cursor-pointer flex justify-between items-center font-medium text-[var(--text-primary)] hover:text-[var(--gradient-start)] list-none"
        >
          {question} <span className="faq-icon transition-transform duration-300 text-xl">{isOpen ? '−' : '+'}</span>
        </summary>
        <div className="pb-5 px-2 text-[var(--text-secondary)]">
          {answer}
        </div>
      </details>
    </div>
  )
}