import About from "@/Components/Section/Home/About";
import FeaturedProject from "@/Components/Section/Home/FeaturedProject";
import Hero from "@/Components/Section/Home/Hero";
import Team from "@/Components/Section/Common/Team";
import Video from "@/Components/Section/Home/Video";
import OurBenefits from "@/Components/Section/Common/OurBenefits";
import Testimonial from "@/Components/Section/Common/Testimonial";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProject />
      <Video />
      <Team />
      <Testimonial />
      <OurBenefits />
    </main>
  );
}
