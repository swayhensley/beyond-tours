import Hero from "@/components/home/Hero"
import DestinationsSection from "@/components/home/DestinationsSection"
import AboutUs from "@/components/home/AboutUs"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import FeaturedPackages from "@/components/home/FeaturedPackages"
import Testimonials from "@/components/home/Testimonials"
import FAQ from "@/components/home/FAQ"

export default function Home() {
  return (
    <div className="overflow-x-hidden !p-0 !m-0">
      <Hero />
      <AboutUs />
      <DestinationsSection />
      <WhyChooseUs />
      <FeaturedPackages />
      <Testimonials />
      <FAQ />
    </div>
  )
}

