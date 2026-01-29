interface DestinationCardProps {
  name: string
  description: string
  imageUrl: string
}

export default function DestinationCard({ name, description, imageUrl }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      {/* Image */}
      <div 
        className="h-64 sm:h-56 lg:h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#e67e22] transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
