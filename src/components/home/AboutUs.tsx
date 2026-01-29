import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section id="about-us" className="py-28 md:py-40 bg-gray-50/50">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image side */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-orange-100/50 rounded-3xl blur-2xl group-hover:bg-orange-200/50 transition-colors duration-500" />
          <div 
            className="relative h-[400px] md:h-[550px] rounded-3xl bg-cover bg-center shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=80')" 
            }}
          />
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div className="space-y-4">
            <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">About Beyond Tours</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Crafting Unforgettable <span className="text-[#e67e22]">Kenyan Experiences</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Beyond Tours was born from a passion for the untamed beauty and rich cultural heritage of Kenya. We believe that travel should be more than just a destination; it should be a transformative journey.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From the crimson sunsets of the Maasai Mara to the turquoise waters of the Swahili Coast, our team of local experts is dedicated to curating authentic adventures that go beyond the ordinary. We prioritize sustainable travel and meaningful encounters that support local communities.
          </p>
          <div className="pt-6">
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="bg-[#e67e22] hover:bg-[#d67219] text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-[#e67e22]/20 transition-all hover:-translate-y-1">
                Our Full Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
