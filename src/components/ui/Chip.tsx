import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

const Chip = ({ children, className = '', variant = 'light' }: ChipProps) => {
  const baseStyles = "inline-block px-3 py-1 rounded-full text-sm font-semibold";
  const variantStyles = variant === 'dark' 
    ? "bg-white/10 text-white border border-white/30" 
    : "text-[#006E5E] bg-[#E6FCF9]";

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Chip;