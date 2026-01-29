import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    content: "The Maasai Mara safari was beyond my wildest dreams. Our guide was so knowledgeable and we saw the Big Five on our first day! Beyond Tours really knows Kenya.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Family Traveler",
    content: "Planning a family trip to Mombasa can be stressful, but Beyond Tours handled everything. The beach resort they recommended was perfect for the kids and us.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Solo Traveler",
    content: "As a solo traveler, I felt safe and well-cared for. The Nairobi city tour was fantastic—I loved visiting the Giraffe Centre and the Elephant Orphanage.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-[8%] bg-gray-900 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#e67e22] opacity-10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#e67e22] text-[#e67e22]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#e67e22] transition-colors duration-300 relative">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-700" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e67e22] text-[#e67e22]" />
                ))}
              </div>
              <p className="text-lg italic text-gray-300 mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
