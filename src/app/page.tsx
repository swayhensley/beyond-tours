import Hero from "@/components/home/Hero"
import DestinationsSection from "@/components/home/DestinationsSection"
import AboutUs from "@/components/home/AboutUs"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import FeaturedPackages from "@/components/home/FeaturedPackages"

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <DestinationsSection />
      <FeaturedPackages />
    </div>
  )
}
