'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
}: OptimizedImageProps) {
  const [error, setError] = useState(false)
  const fallbackSrc = '/images/placeholder.jpg'

  const imageProps = {
    src: error ? fallbackSrc : src,
    alt,
    className,
    priority,
    fill,
    onError: () => setError(true),
    ...(fill ? {} : { width, height }),
  }

  return <Image {...imageProps} />
}