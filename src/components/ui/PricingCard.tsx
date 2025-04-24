import { useRef } from 'react';
import Image from 'next/image';

// Icon components
const CheckIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg" 
      alt=""
      width={16}
      height={16}
      className="text-[var(--gradient-start)]"
      unoptimized
    />
  </div>
);

const CheckCheckIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check-check.svg" 
      alt=""
      width={16}
      height={16}
      className="text-[var(--gradient-start)]"
      unoptimized
    />
  </div>
);

const XIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0">
    <Image 
      src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg" 
      alt=""
      width={16}
      height={16}
      className="text-gray-400"
      unoptimized
    />
  </div>
);

interface PricingFeature {
  text: string
  included: boolean
  highlight?: boolean
}

interface PricingPlan {
  name: string
  price: string
  description: string
  priceDetail?: string
  priceSubDetail?: string
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
  features: PricingFeature[]
  popular?: boolean
  delay: number
  href: string
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col p-8 bg-white rounded-xl border shadow-md reveal-on-scroll h-full ${
        plan.popular ? 'border-2 border-[var(--gradient-start)] shadow-2xl relative transform lg:scale-105' : 'border-border-color'
      }`}
      style={{ transitionDelay: `${plan.delay}ms` }}
    >
      {plan.popular && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-medium px-6 py-1.5 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'mt-4' : ''}`}>
        {plan.name}
      </h3>
      <p className="text-text-secondary text-base mb-6 min-h-[48px]">
        {plan.description}
      </p>
      <div className="mb-2">
        <span className="text-5xl font-extrabold">{plan.price}</span>
        {plan.priceDetail && (
          <span className="text-text-secondary ml-1">{plan.priceDetail}</span>
        )}
      </div>
      {plan.priceSubDetail && (
        <p className="text-sm text-text-secondary mb-8">{plan.priceSubDetail}</p>
      )}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className={`flex items-start ${!feature.included ? 'text-gray-400' : ''} ${feature.highlight ? 'font-medium text-text-primary' : ''}`}>
            {feature.included ? (
              feature.highlight ? (
                <CheckCheckIcon />
              ) : (
                <CheckIcon />
              )
            ) : (
              <XIcon />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href={plan.href}
        className={`w-full py-3 rounded-lg font-semibold text-center transition-all mt-auto ${
          plan.buttonVariant === 'primary'
            ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90'
            : 'bg-white text-text-primary border-2 border-[var(--gradient-start)] hover:bg-gray-50'
        }`}
      >
        {plan.buttonText}
      </a>
    </div>
  )
}