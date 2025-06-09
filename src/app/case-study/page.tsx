import CaseStudy from "@/Components/Section/CaseStudy/CaseStudy";
import PageHeader from "@/Components/Utils/PageHeader";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Case Study",
};

export default function CaseStudyPage() {
  return (
    <main>
      <PageHeader subtitle="Case Studies" title="Selected Work" paragraph="We are creative agency that specializes in web design, seo, and Social media management. Our experienced team works closely." />
      <CaseStudy />
    </main>
  );
}
