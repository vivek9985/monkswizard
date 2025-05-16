import Hero from "@/Components/Section/About/Hero";
import OurBenefits from "@/Components/Section/Common/OurBenefits";
import Team from "@/Components/Section/Common/Team";
import Testimonial from '@/Components/Section/Common/Testimonial';

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
