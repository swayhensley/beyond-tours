import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

const featuredPackages = [
  {
    id: 1,
    name: "Classic Maasai Mara Safari",
    duration: "3 Days, 2 Nights",
    location: "Maasai Mara",
    price: "KSh 45,000",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Coastal Relaxation Escape",
    duration: "5 Days, 4 Nights",
    location: "Diani Beach",
    price: "KSh 65,000",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Amboseli Elephant Explorer",
    duration: "3 Days, 2 Nights",
    location: "Amboseli",
    price: "KSh 48,000",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=800&q=80"
  }
]

export default function FeaturedPackages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">Our Packages</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Handpicked <span className="text-[#e67e22]">Adventures</span></h2>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Our most popular tours designed to give you the ultimate Kenyan experience.
            </p>
          </div>
          <Link href="/packages" className="hidden sm:inline-block">
            <Button variant="outline" className="border-2 border-orange-100 text-[#e67e22] hover:bg-[#e67e22] hover:text-white hover:border-[#e67e22] px-8 py-6 text-lg rounded-xl transition-all font-bold">
              View All Packages
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group rounded-3xl flex flex-col h-full hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden h-72">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-[#e67e22] shadow-sm">
                  {pkg.price}
                </div>
              </div>
              <CardHeader className="pt-8 pb-4 space-y-2">
                <div className="flex items-center gap-2 text-[#e67e22] text-sm font-bold uppercase tracking-wider">
                  <MapPin size={16} />
                  {pkg.location}
                </div>
                <CardTitle className="text-2xl font-black group-hover:text-[#e67e22] transition-colors line-clamp-1">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-8 flex-grow">
                <div className="flex items-center gap-2 text-gray-500 font-medium bg-gray-50 w-fit px-4 py-2 rounded-lg">
                  <Clock size={16} />
                  {pkg.duration}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-8 px-6">
                <Link href={`/book-now?dest=${pkg.location.toLowerCase().replace(/\s+/g, '-')}&type=${pkg.id === 2 ? 'beach' : 'safari'}`} className="w-full">
                  <Button className="w-full bg-gray-900 hover:bg-[#e67e22] text-white font-bold py-7 text-lg rounded-2xl transition-all shadow-lg hover:shadow-orange-200">
                    Book This Adventure
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/packages">
            <Button variant="outline" className="w-full border-2 border-[#e67e22] text-[#e67e22] py-6 rounded-xl font-bold">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
