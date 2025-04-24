'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (!link) return
      const href = link.getAttribute('href')
      
      if (href?.startsWith('#')) {
        e.preventDefault()
        const targetId = href.slice(1)
        const element = document.getElementById(targetId)
        
        if (element) {
          const headerOffset = 80 // Height of sticky header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
}