import PageHeader from "@/Components/Utils/PageHeader";
import Terms from "@/Components/Section/Terms/Terms";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MonksWizard - Terms and Conditions",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader title="Company Policies Regarding Privacy" paragraph="Details the pricing structure, payment methods accepted, billing cycles, and any applicable taxes or fees. answers to common inquiries about our services, processes, and policies." />
      <Terms />
    </main>
  );
}
