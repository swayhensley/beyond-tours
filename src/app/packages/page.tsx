import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const packages = [
  {
    id: 1,
    name: "Maasai Mara Safari",
    duration: "3 Days, 2 Nights",
    price: "KSh 45,000",
    description: "Experience the Great Migration and witness the Big Five in their natural habitat.",
    highlights: ["Game drives", "Maasai village visit", "All meals included", "Professional guide"]
  },
  {
    id: 2,
    name: "Coastal Escape",
    duration: "5 Days, 4 Nights",
    price: "KSh 65,000",
    description: "Relax on pristine beaches and explore the rich Swahili culture of Mombasa and Diani.",
    highlights: ["Beach resort", "Old town tour", "Water sports", "Seafood dinner"]
  },
  {
    id: 3,
    name: "Nairobi City Tour",
    duration: "1 Day",
    price: "KSh 12,000",
    description: "Discover the vibrant capital city where modern life meets wildlife.",
    highlights: ["National Park visit", "Giraffe Centre", "Elephant Orphanage", "City landmarks"]
  },
  {
    id: 4,
    name: "Rift Valley Adventure",
    duration: "4 Days, 3 Nights",
    price: "KSh 55,000",
    description: "Explore the stunning Rift Valley with lakes, volcanoes, and incredible biodiversity.",
    highlights: ["Lake Naivasha boat ride", "Hell's Gate cycling", "Crescent Island walk", "Hot springs"]
  },
  {
    id: 5,
    name: "Mt. Kenya Expedition",
    duration: "7 Days, 6 Nights",
    price: "KSh 95,000",
    description: "Challenge yourself with a trek to Africa's second-highest peak.",
    highlights: ["Professional guides", "Camping equipment", "All permits", "Summit attempt"]
  },
  {
    id: 6,
    name: "Amboseli Wildlife Explorer",
    duration: "3 Days, 2 Nights",
    price: "KSh 48,000",
    description: "Photograph elephants with Mt. Kilimanjaro as your backdrop.",
    highlights: ["Game drives", "Bird watching", "Sunset views", "Luxury lodge"]
  }
]

export default function PackagesPage() {
  return (
    <div className="py-28 md:py-40 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">Our Packages</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
            Handpicked <span className="text-[#e67e22]">Adventures</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Choose from our carefully crafted tour packages designed to give you 
            the best Kenya experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="flex flex-col border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden hover:-translate-y-2 bg-gray-50/50">
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-2xl font-black text-gray-900">{pkg.name}</CardTitle>
                <CardDescription className="text-base font-bold text-[#e67e22] mt-1 uppercase tracking-wider">{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-8">
                <p className="mb-6 text-gray-600 leading-relaxed">{pkg.description}</p>
                <div className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e67e22] rounded-full"></span>
                    Package Highlights:
                  </p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-[#e67e22]">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pb-10 px-8">
                <div className="w-full flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-400">STARTING FROM</span>
                  <span className="text-2xl font-black text-gray-900">{pkg.price}</span>
                </div>
                <Link href={`/book-now?dest=${pkg.name.toLowerCase().includes('mara') ? 'maasai-mara' : pkg.name.toLowerCase().includes('nairobi') ? 'nairobi' : pkg.name.toLowerCase().includes('coastal') ? 'mombasa' : 'custom'}&type=${pkg.name.toLowerCase().includes('safari') ? 'safari' : pkg.name.toLowerCase().includes('coastal') ? 'beach' : 'custom'}`} className="w-full">
                  <Button size="xl" className="w-full bg-[#e67e22] hover:bg-[#d67219] text-white rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-95 leading-none">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center bg-gray-900 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e67e22]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Need a Custom <span className="text-[#e67e22]">Itinerary?</span></h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              Don't see exactly what you're looking for? We specialize in creating 
              one-of-a-kind travel experiences tailored specifically to you.
            </p>
            <Link href="/contact">
              <Button size="xl" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 rounded-2xl font-black px-16 shadow-xl transition-all hover:-translate-y-1 active:scale-95 leading-none">
                Request Custom Package
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
