import DestinationCard from "@/components/shared/DestinationCard"

const allDestinations = [
  {
    name: "Nairobi",
    description: "The City in the Sun: Where wildlife meets the skyline. Visit Nairobi National Park, Giraffe Centre, and experience urban safari adventures.",
    imageUrl: "https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?auto=format&fit=crop&w=500"
  },
  {
    name: "Maasai Mara",
    description: "The Great Wild: Witness the Eighth Wonder of the World. Experience the Great Migration and see the Big Five in their natural habitat.",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=500"
  },
  {
    name: "Naivasha",
    description: "Rift Valley Serenity: Freshwater lakes and volcanic craters. Boat rides, Hell's Gate National Park, and Crescent Island adventures.",
    imageUrl: "https://images.unsplash.com/photo-1627313361012-706788484646?auto=format&fit=crop&w=500"
  },
  {
    name: "Mombasa",
    description: "The Swahili Coast: White sands and turquoise waters. Explore Fort Jesus, old town, and pristine beaches.",
    imageUrl: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=500"
  },
  {
    name: "Amboseli",
    description: "Home of the African Elephant: Stunning views of Mount Kilimanjaro and incredible wildlife viewing opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=500"
  },
  {
    name: "Diani Beach",
    description: "Tropical Paradise: Crystal-clear waters, white sand beaches, and world-class diving and snorkeling.",
    imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500"
  },
  {
    name: "Tsavo",
    description: "The Red Elephants: One of the world's largest game reserves with diverse landscapes and abundant wildlife.",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500"
  },
  {
    name: "Lamu Island",
    description: "Cultural Heritage: A UNESCO World Heritage Site with Swahili architecture and pristine beaches.",
    imageUrl: "https://images.unsplash.com/photo-1590137517308-e61e5b8da8c9?auto=format&fit=crop&w=500"
  }
]

export default function DestinationsPage() {
  return (
    <div className="py-20 px-[8%]">
      <h1 className="text-5xl font-bold text-center mb-6">
        Our Destinations
      </h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Explore the diverse beauty of Kenya. From wildlife safaris to coastal retreats, 
        discover your next adventure with Beyond Tours.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allDestinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            description={destination.description}
            imageUrl={destination.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
