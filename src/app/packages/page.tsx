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
    <div className="py-20 px-[8%]">
      <h1 className="text-5xl font-bold text-center mb-6">
        Tour Packages
      </h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Choose from our carefully crafted tour packages designed to give you 
        the best Kenya experience. All packages are customizable to your preferences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <CardDescription className="text-base mt-2">{pkg.duration}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-gray-700">{pkg.description}</p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Package Highlights:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-[#e67e22]">{pkg.price}</span>
              <Link href={`/book-now?dest=${pkg.name.toLowerCase().includes('mara') ? 'maasai-mara' : pkg.name.toLowerCase().includes('nairobi') ? 'nairobi' : pkg.name.toLowerCase().includes('coastal') ? 'mombasa' : 'custom'}&pkg=${pkg.name.toLowerCase().includes('safari') ? 'safari' : pkg.name.toLowerCase().includes('coastal') ? 'beach' : 'custom'}`}>
                <Button className="bg-[#e67e22] hover:bg-[#d67219]">
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg mb-4">
          Don't see what you're looking for? We offer custom packages tailored to your needs.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="border-2 border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white">
            Request Custom Package
          </Button>
        </Link>
      </div>
    </div>
  )
}
