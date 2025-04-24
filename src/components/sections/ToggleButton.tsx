import { motion } from 'framer-motion'
import React from 'react'

interface ToggleButtonProps {
  isFreelancer: boolean
  onChange: (tab: 'freelancer' | 'business') => void
}

export const ToggleButton = ({ isFreelancer, onChange }: ToggleButtonProps) => {
  return (
    <div className="absolute top-4 md:top-0 left-0 right-0 z-10 bg-bg-light/95 backdrop-blur-sm py-2">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="bg-white p-1.5 rounded-full shadow-md border border-border-color inline-flex space-x-1">
            <button
              onClick={() => onChange('freelancer')}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 min-w-[140px]"
              aria-pressed={isFreelancer}
            >
              <span className={`relative z-10 ${isFreelancer ? 'text-white' : 'text-text-primary'}`}>
                For Freelancers
              </span>
              {isFreelancer && (
                <motion.span
                  layoutId="toggleBackground"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
                />
              )}
            </button>
            <button
              onClick={() => onChange('business')}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 min-w-[140px]"
              aria-pressed={!isFreelancer}
            >
              <span className={`relative z-10 ${!isFreelancer ? 'text-white' : 'text-text-primary'}`}>
                For Businesses
              </span>
              {!isFreelancer && (
                <motion.span
                  layoutId="toggleBackground"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}