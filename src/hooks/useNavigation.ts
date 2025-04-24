import { useEffect } from 'react'

export function useNavigation() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const link = e.target as HTMLAnchorElement
      if (link.hash && link.href.includes(window.location.pathname)) {
        e.preventDefault()
        
        const headerHeight = 80 // Height of sticky header
        const targetElement = document.querySelector(link.hash)
        
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })

          // Update URL without scrolling
          history.pushState(null, '', link.hash)
        }
      }
    }

    document.addEventListener('click', handleScroll)
    return () => document.removeEventListener('click', handleScroll)
  }, [])
}