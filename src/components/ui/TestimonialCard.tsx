import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  content: string
}

export default function TestimonialCard({ name, role, company, image, content }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 48px, 48px"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-text-secondary">{role}, {company}</p>
        </div>
      </div>
      <p className="text-text-secondary">{content}</p>
    </div>
  )
}