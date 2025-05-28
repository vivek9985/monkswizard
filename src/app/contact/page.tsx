import Contact from "@/Components/Section/Contact/Contact";
import PageHeader from "@/Components/Utils/PageHeader";
import Maps from "@/Components/Section/Contact/Maps";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader subtitle="Contact Us" title="Reach Out to Us & Get in Touch" paragraph="Our Frequently Asked Questions (FAQ) section is designed to provide quick and helpful answers to common inquiries about our services, processes, and policies. Whether you're curious about our pricing, turnaround times." />
      <Contact />
      <Maps />
    </main>
  );
}
