import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, ArrowRight } from "lucide-react"

import { packages } from "@/data/packages"

export default function FeaturedPackages() {
  const featuredPackages = packages.filter(p => p.type === "all-inclusive").slice(0, 3);

  return (
    <section id="packages" className="py-24 md:py-36 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 reveal-left">
            <span className="text-secondary font-black tracking-[0.2em] uppercase text-sm flex items-center gap-3">
              <span className="w-12 h-[2px] bg-secondary" />
              Our Packages
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Handpicked <span className="text-[#e67e22] italic font-serif">Adventures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Our most popular tours designed to give you the ultimate Kenyan experience.
            </p>
          </div>
          <Link href="/packages" className="hidden sm:inline-block">
            <Button variant="outline" size="xl" className="border-2 border-gray-200 text-gray-700 hover:bg-secondary hover:text-white hover:border-secondary rounded-full px-10 transition-all group">
              View All Packages
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group rounded-[2rem] flex flex-col h-full bg-white ring-1 ring-black/5 hover:ring-secondary/20 reveal !p-0">
              <Link href={`/packages/${pkg.id}`} className="block flex-grow group/link">
                <div className="relative overflow-hidden h-72 !p-0 bg-white">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover/link:scale-110 transition-transform duration-1000"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-black text-[#e67e22] shadow-xl">
                    {pkg.price}
                  </div>
                </div>
                <CardHeader className="pt-8 pb-4 px-8 space-y-4">
                  <div className="flex items-center gap-2 text-secondary text-sm font-black uppercase tracking-widest bg-secondary/5 w-fit px-4 py-1.5 rounded-full">
                    <MapPin size={14} className="fill-secondary/20" />
                    <span className="capitalize">{pkg.destination}</span>
                  </div>
                  <CardTitle className="text-2xl font-black group-hover:text-secondary transition-colors line-clamp-1">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-8 flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                    <Clock size={16} className="text-secondary" />
                    {pkg.duration}
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="pt-0 pb-10 px-8">
                <Link href={`/packages/${pkg.id}`} className="w-full">
                  <Button className="w-full bg-[#1a1a1a] hover:bg-secondary text-white font-black rounded-2xl py-7 transition-all shadow-xl hover:shadow-secondary/30 active:scale-[0.98]">
                    Book This Adventure
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/packages">
            <Button variant="outline" size="xl" className="w-full border-2 border-gray-200 text-gray-700 py-8 rounded-2xl font-black">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

