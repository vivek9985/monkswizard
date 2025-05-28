import Content from "@/Components/Section/Services/Content";
import Faq from "@/Components/Section/Services/Faq";
import Hero from "@/Components/Section/Services/Hero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Services",
};

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <Content />
      <Faq />
    </main>
  );
}
