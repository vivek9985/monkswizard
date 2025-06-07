import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import AboutOne from "@/assets/images/home-one-about-one.png";
import AboutTwo from "@/assets/images/home-one-about-two.png";
import HalfCircle from "@/assets/images/half-circle.png";
import Spring from "@/assets/images/spring.svg";
import Lines from "@/assets/images/lines.svg";
import Link from "next/link";
import CountUp from "@/animation/CountUp";

export default function About() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    <div className="w-[80%] sm:w-[400px] md:w-[450px] xl:w-[537px] h-[380px] sm:h-[400px] md:h-[460px] xl:h-[515px] flex items-center justify-center relative">
                        <Image className="w-9/12 md:w-[380px] xl:w-[420px] absolute top-0 left-0" src={AboutOne} alt="" width={410} height={418} />
                        <Image className="w-6/12 md:w-[250px] xl:w-[303px] absolute bottom-0 right-0" src={AboutTwo} alt="" width={303} height={235} />
                        <Image className="w-[50px] sm:w-[60px] md:w-[80px] absolute right-[16%] md:right-[8%] xl:right-[16%] top-[20%]" src={HalfCircle} alt="" width={80} height={80} />
                        <Image className="w-12 md:w-[65px] absolute left-[20%] bottom-0" src={Spring} alt="" width={65} height={56} />
                    </div>
                    <div className="w-10/12 md:w-9/12 xl:max-w-[508px]">
                        <Badge variant="light" className="mx-auto xl:ml-0 mt-5">About Us</Badge>
                        <Heading variant="h2" className="text-primary-900 text-center xl:text-left my-4">
                            Digital Triumph Team
                        </Heading>
                        <Paragraph variant="para-11" className="text-center xl:text-left text-neutral-700">
                            We are creative agency that specializes in web design, seo, and Social media management. Our experienced team works closely with clients to deliver customized solutions that meet their specific needs to your unique goals and objectives.
                        </Paragraph>
                        <div className="flex items-center justify-center xl:justify-start gap-8 mt-8">
                            <div>
                                <Heading variant="h4m" className="text-neutral-900">
                                    <CountUp
                                        from={0}
                                        to={47}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        className="count-up-text"
                                    />
                                    +
                                </Heading>
                                <Paragraph variant="para-11" className="text-neutral-600">
                                    Design
                                </Paragraph>
                            </div>
                            <Image className="w-[15px] h-[62px]" src={Lines} alt="" width={15} height={62} />
                            <div>
                                <Heading variant="h4m" className="text-neutral-900">
                                    <CountUp
                                        from={0}
                                        to={27}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        className="count-up-text"
                                    />
                                    +
                                </Heading>
                                <Paragraph variant="para-11" className="text-neutral-600">
                                    Review
                                </Paragraph>
                            </div>
                            <Image className="w-[15px] h-[62px]" src={Lines} alt="" width={15} height={62} />
                            <div>
                                <Heading variant="h4m" className="text-neutral-900">
                                    <CountUp
                                        from={0}
                                        to={90}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                        className="count-up-text"
                                    />
                                    K
                                </Heading>
                                <Paragraph variant="para-11" className="text-neutral-600">
                                    Clients
                                </Paragraph>
                            </div>
                        </div>
                        <Link href="/about" className="block w-fit mx-auto translate-x-[-17px] xl:translate-x-0 xl:ml-0 mt-10">
                            <PrimaryButton variant="green">View Details</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
