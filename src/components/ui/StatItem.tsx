interface StatItemProps {
  value: string
  label: string
  description: string
}

export default function StatItem({ value, label, description }: StatItemProps) {
  return (
    <div className="text-center p-8 bg-white rounded-xl border border-[var(--border-color)] hover:shadow-lg transition-shadow">
      <div className="text-4xl font-bold text-gradient mb-2">{value}</div>
      <h3 className="text-xl font-semibold mb-3">{label}</h3>
      <p className="text-[var(--text-secondary)] text-sm">{description}</p>
    </div>
  )
}