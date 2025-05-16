import PageHeader from "@/Components/Utils/PageHeader";
import Privacy from "@/Components/Section/Privacy/Privacy";

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader title="Company Policies Regarding Privacy" paragraph="Details the pricing structure, payment methods accepted, billing cycles, and any applicable taxes or fees. answers to common inquiries about our services, processes, and policies." />
      <Privacy />
    </main>
  );
}
