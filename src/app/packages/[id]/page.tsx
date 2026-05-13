import { MapPin, Clock, CheckCircle, XCircle, Calendar, Users, Mail, Phone, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { packages } from "@/data/packages"
import { destinations } from "@/data/destinations"
import PackageGallery from "@/components/shared/PackageGallery"

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const pkg = packages.find(p => p.id.toString() === id)

  if (!pkg) {
    notFound()
  }

  const destination = destinations.find(d => d.slug === pkg.destination)
  const locationName = destination ? destination.name : pkg.destination

  return (
    <main className="bg-[#fdfaf6] min-h-screen pt-24 pb-20">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">{pkg.name}</h1>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <MapPin className="text-[#e67e22]" size={20} />
            <span className="capitalize">{locationName}, Kenya</span>
          </div>
        </div>
      </div>

      {/* Hero Image Gallery - Full Bleed */}
      <PackageGallery mainImage={pkg.image} gallery={pkg.gallery} />

      <div className="container-custom mt-8">
        {/* Quick Info Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-12 flex flex-wrap gap-8 md:gap-16 justify-center md:justify-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e67e22]/10 flex items-center justify-center text-[#e67e22]">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Duration</p>
              <p className="font-black text-secondary">{pkg.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e67e22]/10 flex items-center justify-center text-[#e67e22]">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Tour Type</p>
              <p className="font-black text-secondary capitalize">{pkg.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e67e22]/10 flex items-center justify-center text-[#e67e22]">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Location</p>
              <p className="font-black text-secondary capitalize">{locationName}</p>
            </div>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Tabs (Visual Mockup) */}
            <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
              <button className="bg-secondary text-white px-8 py-3 rounded-full font-black text-sm tracking-widest shadow-md">OVERVIEW</button>
              <button className="bg-white text-gray-600 hover:text-secondary px-8 py-3 rounded-full font-black text-sm tracking-widest border border-gray-200 hover:border-secondary transition-all">INCLUDED / EXCLUDED</button>
            </div>

            {/* Overview Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">Tour Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {pkg.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Join us for an unforgettable journey through {locationName}. Our expert guides will ensure you experience the very best this destination has to offer, combining adventure, relaxation, and authentic cultural immersion.
              </p>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={28} />
                  Included
                </h3>
                <ul className="space-y-4">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      {h}
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    Park entrance fees
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <XCircle className="text-red-500" size={28} />
                  Excluded
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    International Flights
                  </li>
                  <li className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    Personal Travel Insurance
                  </li>
                  <li className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    Visa Fees
                  </li>
                  <li className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-red-500 font-bold mt-1">✕</span>
                    Gratuities & Tips
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden !p-0">
                {/* Price Header */}
                <div className="bg-secondary p-8 text-center text-white">
                  <p className="text-sm font-black uppercase tracking-widest text-white/70 mb-2">Price From</p>
                  <p className="text-4xl font-black text-[#e67e22]">{pkg.price}</p>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Per Person</p>
                </div>
                
                {/* Booking Form */}
                <CardContent className="p-8 bg-white">
                  <h3 className="text-xl font-black text-gray-900 mb-6 text-center">Book This Tour</h3>
                  <form className="space-y-4">
                    <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                      <User size={18} className="text-gray-400 mr-3 shrink-0" />
                      <input type="text" placeholder="Full Name" className="w-full bg-transparent text-gray-700 font-medium focus:outline-none" />
                    </div>
                    
                    <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                      <Mail size={18} className="text-gray-400 mr-3 shrink-0" />
                      <input type="email" placeholder="Email Address" className="w-full bg-transparent text-gray-700 font-medium focus:outline-none" />
                    </div>
                    
                    <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                      <Phone size={18} className="text-gray-400 mr-3 shrink-0" />
                      <input type="tel" placeholder="Phone Number" className="w-full bg-transparent text-gray-700 font-medium focus:outline-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                        <Calendar size={18} className="text-gray-400 mr-3 shrink-0" />
                        <input type="date" className="w-full bg-transparent text-gray-700 font-medium focus:outline-none text-sm" />
                      </div>
                      <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-all">
                        <Users size={18} className="text-gray-400 mr-3 shrink-0" />
                        <input type="number" min="1" placeholder="Guests" className="w-full bg-transparent text-gray-700 font-medium focus:outline-none" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-[#e67e22] to-orange-600 hover:from-orange-600 hover:to-[#e67e22] text-white py-6 rounded-xl font-black text-lg shadow-xl shadow-orange-500/20 transition-all transform active:scale-95">
                        Submit Request
                      </Button>
                    </div>
                    <p className="text-center text-xs font-bold text-gray-400 mt-4 uppercase tracking-wider">
                      No payment required now
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

// Generate static params
export async function generateStaticParams() {
  return packages.map((p) => ({
    id: p.id.toString(),
  }))
}
