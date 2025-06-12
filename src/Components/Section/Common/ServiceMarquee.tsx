import Heading from "@/Components/Utils/Heading/Heading";
import Image from "next/image";
import Star from "@/assets/images/icons/star.svg";
import Marquee from "react-fast-marquee";

const services = [
  "Web Development",
  "Digital Marketing",
  "Branding & Identity",
  "UI/UX Design",
  "Content Creation",
  "UI Commerce Solution",
  "Web Development",
  "Digital Marketing",
  "Branding & Identity",
  "UI/UX Design",
  "Content Creation",
  "UI Commerce Solution",
  "Web Development",
  "Digital Marketing",
  "Branding & Identity",
  "UI/UX Design",
  "Content Creation",
  "UI Commerce Solution",
  "Web Development",
];

export default function ServiceMarquee() {
  return (
    <section className="bg-primary-700 py-6 md:py-8 overflow-x-hidden">
      <Marquee speed={60}>
        {services?.map((item, i) => (
          <div key={i} className="flex items-center">
            <Heading variant="h6" className="text-white">
              {item}
            </Heading>
            <Image className="mx-8" src={Star} alt="" width={30} height={30} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
