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
    <section id="packages" className="py-20 px-[8%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Handpicked Adventures</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Our most popular tours designed to give you the ultimate Kenyan experience.
            </p>
          </div>
          <Link href="/packages">
            <Button variant="outline" className="border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white">
              View All Packages
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div 
                className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-[#e67e22] text-sm font-medium mb-1">
                  <MapPin size={14} />
                  {pkg.location}
                </div>
                <CardTitle className="text-xl group-hover:text-[#e67e22] transition-colors">{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock size={14} />
                  {pkg.duration}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <span className="text-xl font-bold text-[#e67e22]">{pkg.price}</span>
                <Link href={`/book-now?dest=${pkg.location.toLowerCase().replace(' ', '-')}&pkg=${pkg.id === 2 ? 'beach' : 'safari'}`}>
                  <Button size="sm" className="bg-[#e67e22] hover:bg-[#d67219] text-white">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
