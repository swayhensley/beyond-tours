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
      <div className="z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          Kenya, Beyond the Horizon
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Authentic Safaris. Coastal Escapes. Urban Adventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/destinations">
            <Button 
              size="lg"
              className="bg-[#e67e22] hover:bg-[#d67219] text-white font-bold px-8 py-6 text-base rounded-md"
            >
              Explore Destinations
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-6 text-base rounded-md"
            >
              Custom Trip
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
