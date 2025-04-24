'use client'

import { useState, useEffect } from 'react'

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const handleScroll = () => {
      const headerOffset = 100 // Header height + some padding
      const scrollPosition = window.scrollY + headerOffset

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id') || ''

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}