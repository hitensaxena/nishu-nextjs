interface SectionLoaderProps {
  title?: string
}

export default function SectionLoader({ title }: SectionLoaderProps) {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {title && (
            <div className="animate-pulse bg-gray-200 h-12 w-3/4 max-w-xl mx-auto rounded" />
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-64 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}