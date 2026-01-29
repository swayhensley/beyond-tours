import DestinationCard from "@/components/shared/DestinationCard"

const destinations = [
  {
    name: "Nairobi",
    description: "The City in the Sun: Where wildlife meets the skyline.",
    imageUrl: "https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?auto=format&fit=crop&w=500"
  },
  {
    name: "Maasai Mara",
    description: "The Great Wild: Witness the Eighth Wonder of the World.",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=500"
  },
  {
    name: "Naivasha",
    description: "Rift Valley Serenity: Freshwater lakes and volcanic craters.",
    imageUrl: "https://images.unsplash.com/photo-1627313361012-706788484646?auto=format&fit=crop&w=500"
  },
  {
    name: "Mombasa",
    description: "The Swahili Coast: White sands and turquoise waters.",
    imageUrl: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=500"
  }
]

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-32 md:py-48 bg-gray-50/30 border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">Destinations</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Where Do You Want <span className="text-[#e67e22]">to Go?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most breathtaking locations across Kenya with our local expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            description={destination.description}
            imageUrl={destination.imageUrl}
          />
        ))}
        </div>
      </div>
    </section>
  )
}
