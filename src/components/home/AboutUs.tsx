import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e67e22]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-orange-500/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=80')" 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-10 -left-10 hidden md:block animate-bounce-slow">
              <div className="bg-white p-8 rounded-3xl shadow-2xl glass-morphism border border-white/40">
                <p className="text-[#e67e22] text-4xl font-black mb-1">10+</p>
                <p className="text-gray-600 font-bold uppercase tracking-wider text-xs">Years of <br />Expertise</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-secondary font-black tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                <span className="w-12 h-[2px] bg-secondary" />
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.2] tracking-tight">
                Crafting <span className="text-[#e67e22] italic font-serif">Unforgettable</span> <br />
                Experiences
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Beyond Tours was born from a passion for the untamed beauty and rich cultural heritage of Kenya. We believe that travel should be more than just a destination; it should be a transformative journey.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                From the crimson sunsets of the Maasai Mara to the turquoise waters of the Swahili Coast, our team of local experts is dedicated to curating authentic adventures that go beyond the ordinary. We prioritize sustainable travel and meaningful encounters that support local communities.
              </p>
            </div>

            <div className="pt-6">
              <Link href="/contact" className="inline-block">
                <Button size="xl" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 transition-all shadow-xl hover:shadow-secondary/20 group">
                  Learn More About Us
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

