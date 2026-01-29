import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header 
      className="h-[80vh] flex items-center justify-center text-center text-white relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <div className="z-10 px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Kenya, Beyond <span className="text-[#e67e22]">the Horizon</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Authentic Safaris. Coastal Escapes. Urban Adventures. 
          Discover the magic of East Africa with local experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/destinations" className="w-full sm:w-auto">
            <Button 
              size="lg"
              className="w-full bg-[#e67e22] hover:bg-[#d67219] text-white font-bold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-[#e67e22]/20 transition-all hover:-translate-y-1"
            >
              Explore Destinations
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg"
              variant="secondary"
              className="w-full bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 font-bold px-10 py-7 text-lg rounded-full transition-all hover:-translate-y-1"
            >
              Custom Trip
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
