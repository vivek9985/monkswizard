import About from "@/Components/Section/Home/About";
import FeaturedProject from "@/Components/Section/Home/FeaturedProject";
import Hero from "@/Components/Section/Home/Hero";
import Team from "@/Components/Section/Common/Team";
import Video from "@/Components/Section/Home/Video";
import OurBenefits from "@/Components/Section/Common/OurBenefits";
import Testimonial from "@/Components/Section/Common/Testimonial";
import CaseStudy from "@/Components/Section/Home/CaseStudy";
import Services from "@/Components/Section/Home/Services";
import type { Metadata } from "next";
import ServiceMarquee from "@/Components/Section/Common/ServiceMarquee";


export const metadata: Metadata = {
  title: "MonksWizard - Home",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProject />
      <ServiceMarquee />
      <Services />
      <Video />
      <CaseStudy />
      <Team />
      <Testimonial />
      <OurBenefits />
    </main>
  );
}
