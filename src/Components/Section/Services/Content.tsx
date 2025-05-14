import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import ContentImage from "@/assets/images/service-content.png";
import Spring from "@/assets/images/spring.svg";
import Link from "next/link";

export default function Content() {
    return (
        <section className="bg-primary-600 py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    <div className="w-[80%] sm:w-[400px] md:w-[450px] xl:w-[537px] h-[380px] sm:h-[400px] md:h-[460px] xl:h-[515px] flex items-center justify-center relative">
                        <Image className="w-full h-full object-contain absolute top-0 left-0" src={ContentImage} alt="" width={410} height={418} />
                        <Image className="w-12 md:w-[65px] absolute left-[-12%] top-5" src={Spring} alt="" width={65} height={56} />
                    </div>
                    <div className="w-10/12 md:w-9/12 xl:max-w-[508px]">
                        <Badge className="mx-auto xl:ml-0">Out Approach</Badge>
                        <Heading variant="h2" className="text-white text-center xl:text-left my-4">
                            Pioneering Your Digital Success with Strengths
                        </Heading>
                        <Paragraph variant="para-7" className="text-center xl:text-left text-neutral-300">
                            Explore the foundational pillars of our services, meticulously designed to empower and redefine your digital narrative. Our expertise spans Creativity, where art meets innovation; Strategy, where data-driven decisions.
                        </Paragraph>
                        <Link href="/about" className="block w-fit mx-auto translate-x-[-17px] xl:translate-x-0 xl:ml-0 mt-10">
                            <PrimaryButton>View Details</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
