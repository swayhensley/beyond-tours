interface DestinationCardProps {
  name: string
  description: string
  imageUrl: string
}

export default function DestinationCard({ name, description, imageUrl }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-3 transition-transform duration-300">
      {/* Image */}
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
