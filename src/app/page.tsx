import About from "@/Components/Section/Home/About";
import FeaturedProject from "@/Components/Section/Home/FeaturedProject";
import Hero from "@/Components/Section/Home/Hero";
import Team from "@/Components/Section/Common/Team";
import Video from "@/Components/Section/Home/Video";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProject />
      <Video />
      <Team />
    </main>
  );
}
