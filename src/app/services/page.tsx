import ServiceMarquee from "@/Components/Section/Common/ServiceMarquee";
import Content from "@/Components/Section/Services/Content";
import Faq from "@/Components/Section/Services/Faq";
import Hero from "@/Components/Section/Services/Hero";
import WhyChooseUs from "@/Components/Section/Services/WhyChooseUs";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Services",
};

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Content />
      <ServiceMarquee />
      <Faq />
    </main>
  );
}
