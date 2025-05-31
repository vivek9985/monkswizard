import About from "@/Components/Section/Home2/About";
import Hero from "@/Components/Section/Home2/Hero";
import OurBenefits from "@/Components/Section/Home2/OurBenefits";
import Project from "@/Components/Section/Home2/Project";
import FeaturedProject from "@/Components/Section/Home2/FeaturedProject";
import Service from "@/Components/Section/Home2/Service";
import OurTeam from "@/Components/Section/Home2/OurTeam";
import type { Metadata } from "next";
import ServiceMarquee from "@/Components/Section/Common/ServiceMarquee";


export const metadata: Metadata = {
  title: "MonksWizard - Home 02",
};

export default function HomeTwoPage() {
  return (
    <main>
      <Hero />
      <About />
      <ServiceMarquee />
      <FeaturedProject />
      <OurBenefits />
      <Project />
      <Service />
      <OurTeam />
    </main>
  );
}
