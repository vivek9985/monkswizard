import Faq from "@/Components/Section/Faq/Faq";
import PageHeader from "@/Components/Utils/PageHeader";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Faq",
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader subtitle="FAQ" title="Frequently Asked Questions" paragraph="Our Frequently Asked Questions (FAQ) section is designed to provide quick and helpful answers to common inquiries about our services, processes, and policies. Whether you're curious about our pricing, turnaround times." />
      
      <Faq />
    </main>
  );
}
