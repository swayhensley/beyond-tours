import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 px-[8%] bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image side */}
        <div className="w-full lg:w-1/2">
          <div 
            className="h-[400px] md:h-[500px] rounded-2xl bg-cover bg-center shadow-2xl"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=80')" 
            }}
          />
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Story: Crafting Unforgettable <span className="text-[#e67e22]">Kenyan Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Beyond Tours was born from a passion for the untamed beauty and rich cultural heritage of Kenya. We believe that travel should be more than just a destination; it should be a transformative journey that connects you with the heart of a place.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From the crimson sunsets of the Maasai Mara to the turquoise waters of the Swahili Coast, our team of local experts is dedicated to curating authentic adventures that go beyond the ordinary. We prioritize sustainable travel and meaningful encounters that support local communities.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#e67e22] hover:bg-[#d67219] text-white px-8">
                Get to Know Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
