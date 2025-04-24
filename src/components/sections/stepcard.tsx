import { motion, MotionValue, useTransform } from 'framer-motion'
import React from 'react'

interface StepCardProps {
  step: {
    title: string
    description: string
    quote: string
  }
  index: number
  totalSteps: number
  activeProgress: MotionValue<number>
}

export const StepCard = ({ step, index, totalSteps, activeProgress }: StepCardProps) => {
  const stepStart = index / totalSteps
  const stepEnd = (index + 1) / totalSteps
  
  const textOpacity = useTransform(
    activeProgress,
    [
      stepStart,
      stepStart + 0.1,
      stepEnd - 0.1,
      stepEnd
    ],
    [index === 0 ? 1 : 0, 1, 1, 0]
  )

  const textY = useTransform(
    activeProgress,
    [
      stepStart,
      stepStart + 0.1,
      stepEnd - 0.1,
      stepEnd
    ],
    [index === 0 ? '0%' : '100%', '0%', '-50%', '-100%']
  )

  return (
    <motion.div
      style={{
        opacity: textOpacity,
        y: textY,
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        width: '100%',
        transform: 'translateY(-50%)'
      }}
      className="flex flex-col px-0 md:px-4"
    >
      <span className="inline-block bg-white/80 backdrop-blur-sm text-gradient text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider shadow-sm border border-border-color self-start">
        Step {index + 1}
      </span>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{step.title}</h3>
      <p className="text-text-secondary text-base md:text-lg mb-6">{step.description}</p>
      <p className="text-gray-600 text-sm md:text-base italic border-l-2 border-border-color pl-4">{step.quote}</p>
    </motion.div>
  )
}