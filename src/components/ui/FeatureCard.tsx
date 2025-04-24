interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="text-bx-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}