import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Link from "next/link";
import OurBenefitCard from "@/Components/Card/OurBenefitCard";
import IconOne from "../../../../public/images/icons/light.svg";
import IconTwo from "../../../../public/images/icons/three-triangle.svg";
import IconThree from "../../../../public/images/icons/car.svg";
import IconFour from "../../../../public/images/icons/document.svg";

export default function OurBenefits() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-[60px] xl:gap-y-0 xl:flex-row items-center justify-between">
                    <div className="w-11/12 md:w-9/12 xl:max-w-[509px]">
                        <Badge variant="light" className="mx-auto xl:ml-0 rounded-lg">Our Benefits</Badge>
                        <Heading variant="h2" className="text-primary-900 text-center xl:text-left my-4">
                            Pioneering Your Digital Success with Strengths
                        </Heading>
                        <Paragraph variant="para-11" className="text-center xl:text-left text-neutral-700">
                            Explore the foundational pillars of our services, meticulously designed to empower and redefine your digital narrative. Our expertise spans Creativity.
                        </Paragraph>
                        <Link href="/about" className="block w-fit mx-auto translate-x-[-17px] xl:translate-x-0 xl:ml-0 mt-10">
                            <PrimaryButton><span className="text-neutral-700">View Details</span></PrimaryButton>
                        </Link>
                    </div>
                    <div className="w-9/12 lg:max-w-[532px] grid sm:grid-cols-2 gap-6">
                        <OurBenefitCard
                            icon={IconOne}
                            title="Creativity"
                            description="Bold & Artistic"
                        />
                        <OurBenefitCard
                            icon={IconTwo}
                            title="Strategy"
                            description="Smart & Targeted"
                        />
                        <OurBenefitCard
                            icon={IconThree}
                            title="Timely Delivery"
                            description="Distinct & Memorable"
                        />
                        <OurBenefitCard
                            icon={IconFour}
                            title="Expertise"
                            description="Cutting-Edge"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
