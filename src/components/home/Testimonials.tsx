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
    <section id="testimonials" className="py-24 md:py-32 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#e67e22] opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Stories From Our <span className="text-[#e67e22]">Travelers</span></h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#e67e22] text-[#e67e22]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-[#e67e22]/50 transition-all duration-500 relative group hover:-translate-y-2">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-white/5 group-hover:text-[#e67e22]/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e67e22] text-[#e67e22]" />
                ))}
              </div>
              <p className="text-lg md:text-xl italic text-gray-300 mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#e67e22] to-orange-400 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-lg group-hover:text-[#e67e22] transition-colors">{t.name}</p>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
