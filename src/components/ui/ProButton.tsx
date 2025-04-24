'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

// Utility function for combining class names
const cn = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

interface ProButtonProps {
  children: ReactNode
  variant: 'primary' | 'secondary'
  href?: string | Record<string, any>
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void // Added event type
  type?: 'button' | 'submit' | 'reset'
}


export default function ProButton({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button'
}: ProButtonProps) {
  const baseClasses = variant === 'primary'
    ? 'pro-button-primary' // Assuming this class applies the shimmer animation
    : 'pro-button-secondary'

  // Use hover:[animation:none] for primary variant to stop all animations directly
  const hoverClasses = variant === 'primary' ? 'hover:[animation:none]' : '';

  // Combine classes using a utility like classnames for better handling
  const classes = cn(baseClasses, hoverClasses, className);

  // Check if href is valid (not an object or undefined)
  const isValidHref = (href?: any): href is string => {
    return typeof href === 'string' && href.length > 0 && href !== '[object Object]';
  }

  // If href exists and is valid
  if (href) {
    const linkHref = isValidHref(href) ? href : '#';

    return (
      <Link href={linkHref} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}