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
    <section className="py-20 px-[8%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to ensure your Kenyan adventure is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mb-6 p-4 bg-orange-50 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
