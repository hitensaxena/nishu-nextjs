interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`
        animate-spin rounded-full
        border-b-2 border-bx-primary
        ${sizeClasses[size]}
        ${className}
      `} />
    </div>
  )
}