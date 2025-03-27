import About from "@/Components/Section/Home/About";
import FeaturedProject from "@/Components/Section/Home/FeaturedProject";
import Hero from "@/Components/Section/Home/Hero";
import Team from "@/Components/Section/Common/Team";
import Video from "@/Components/Section/Home/Video";
import OurBenefits from "@/Components/Section/Common/OurBenefits";
import Testimonial from "@/Components/Section/Common/Testimonial";
import CaseStudy from "@/Components/Section/Home/CaseStudy";
import Services from "@/Components/Section/Home/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProject />
      <Services />
      <Video />
      <CaseStudy />
      <Team />
      <Testimonial />
      <OurBenefits />
    </main>
  );
}
