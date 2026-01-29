import { ShieldCheck, Compass, Users, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: <Compass className="w-10 h-10 text-[#e67e22]" />,
    title: "Expert Local Guides",
    description: "Our guides are born and raised in Kenya, offering deep insights and hidden gems you won't find in guidebooks."
  },
  {
    icon: <Users className="w-10 h-10 text-[#e67e22]" />,
    title: "Tailored Itineraries",
    description: "No two travelers are the same. We create custom journeys that match your interests, budget, and pace."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#e67e22]" />,
    title: "Safe & Reliable",
    description: "Your safety is our priority. We use well-maintained vehicles and reputable accommodations for a worry-free trip."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-[#e67e22]" />,
    title: "Sustainable Travel",
    description: "We are committed to preserving Kenya's wildlife and supporting the communities that make this land special."
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-100 to-transparent" />
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#e67e22] font-bold tracking-widest uppercase text-sm">Why Beyond Tours?</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Expertise You Can <span className="text-[#e67e22]">Trust</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We go above and beyond to ensure your Kenyan adventure is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-50 bg-gray-50/30 hover:bg-white group">
              <div className="mb-8 p-5 bg-orange-50 rounded-2xl group-hover:bg-[#e67e22] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {/* Clone the icon to change its color on hover if it's a simple Lucide component */}
                <div className="group-hover:text-white transition-colors duration-500">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#e67e22] transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
