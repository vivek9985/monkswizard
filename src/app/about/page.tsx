import Hero from "@/Components/Section/About/Hero";
import OurBenefits from "@/Components/Section/Common/OurBenefits";
import Team from "@/Components/Section/Common/Team";
import Testimonial from '@/Components/Section/Common/Testimonial';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - About",
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Team />
      <Testimonial />
      <OurBenefits />
    </main>
  );
}
