'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Stats data
const stats = [
  { value: '10,000+', label: 'Service Pros Joined', delay: 0 },
  { value: '1M+', label: 'Appointments Booked', delay: 100 },
  { value: '4.8/5', label: 'Average User Rating', delay: 200 },
  { value: '25%', label: 'Avg. No-Show Reduction*', delay: 300 },
]

const StatItem = ({ stat }: { stat: typeof stats[0] }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(12660);
  const isFirstStat = stat.label === 'Service Pros Joined';

  useEffect(() => {
    if (!isFirstStat) return;

    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 3) + 1;
        // Removed the upper limit check
        return newCount;
      });
    }, 100); // Interval remains 100ms

    return () => clearInterval(interval);
  }, [isFirstStat]);

  useScrollReveal();

  return (
    <div ref={divRef} className="reveal-on-scroll" style={{ transitionDelay: `${stat.delay}ms` }}>
      <p className="text-4xl lg:text-5xl font-bold mb-2">
        {isFirstStat ? `${count.toLocaleString()}+` : stat.value}
      </p>
      <p className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</p>
    </div>
  )
}

const StatsSection = () => {
  return (
    <section id="stats" className="py-16 md:py-20 px-6 lg:px-8 bg-bx-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-center">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
        <p className="text-xs opacity-60 text-center mt-10">*Based on users enabling no-show protection features compared to manual booking.</p>
      </div>
    </section>
  )
}

export default StatsSection