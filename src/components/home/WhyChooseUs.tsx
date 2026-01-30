import { ShieldCheck, Compass, Users, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: <Compass className="w-12 h-12" />,
    title: "Expert Local Guides",
    description: "Our guides are born and raised in Kenya, offering deep insights and hidden gems you won't find in guidebooks."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tailored Itineraries",
    description: "No two travelers are the same. We create custom journeys that match your interests, budget, and pace."
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Safe & Reliable",
    description: "Your safety is our priority. We use well-maintained vehicles and reputable accommodations for a worry-free trip."
  },
  {
    icon: <HeartHandshake className="w-12 h-12" />,
    title: "Sustainable Travel",
    description: "We are committed to preserving Kenya's wildlife and supporting the communities that make this land special."
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <span className="text-secondary font-black tracking-[0.2em] uppercase text-sm flex justify-center items-center gap-3">
            <span className="w-12 h-[1px] bg-secondary" />
            Why Beyond Tours?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Expertise You Can <span className="text-[#e67e22] italic font-serif">Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            We go above and beyond to ensure your Kenyan adventure is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-10 rounded-[2.5rem] transition-all duration-700 bg-white shadow-xl shadow-black/5 hover:shadow-secondary/10 group border border-transparent hover:border-secondary/20 hover:-translate-y-2">
              <div className="mb-8 p-6 bg-secondary/5 rounded-3xl group-hover:bg-secondary text-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-secondary transition-colors duration-500 tracking-tight">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[15px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

