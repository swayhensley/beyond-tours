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
    <section id="testimonials" className="py-24 md:py-32 bg-secondary text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#e67e22] opacity-20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary opacity-30 rounded-full blur-[100px] animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#e67e22] font-black tracking-[0.3em] uppercase text-sm flex justify-center items-center gap-3">
            <span className="w-12 h-[1px] bg-[#e67e22]" />
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
            Stories From Our <span className="text-[#e67e22] italic font-serif">Travelers</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#e67e22] text-[#e67e22]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-[#e67e22]/50 transition-all duration-700 relative group hover:-translate-y-2">
              <Quote className="absolute top-10 right-10 w-16 h-16 text-white/5 group-hover:text-[#e67e22]/10 transition-colors duration-700" />
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e67e22] text-[#e67e22]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic text-gray-200 mb-10 leading-relaxed font-serif">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e67e22] to-orange-400 rounded-2xl flex items-center justify-center font-black text-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-xl group-hover:text-[#e67e22] transition-colors duration-500">{t.name}</p>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

