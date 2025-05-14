import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import AboutOne from "@/assets/images/home-two-about-one.png";
import AboutTwo from "@/assets/images/home-two-about-two.png";
import Link from "next/link";

export default function About() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <Badge variant="light" className="mx-auto">About Us</Badge>
                <Heading variant="h2" className="max-w-[548px] mx-auto text-primary-900 text-center mt-4">
                    Learn More About Our Digital Story
                </Heading>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row  justify-between mt-10">
                    <div className="max-w-[327px] flex flex-col gap-6">
                        <div>
                            <Heading variant="h6">Standard of Excellence</Heading>
                            <Paragraph variant="para-11" className="text-center xl:text-left text-neutral-700 mt-2">
                                High standard business solutions for the your business create solutions ever you think.
                            </Paragraph>
                        </div>
                        <div>
                            <Heading variant="h6">Standard of Excellence</Heading>
                            <Paragraph variant="para-11" className="text-center xl:text-left text-neutral-700 mt-2">
                                High standard business solutions for the your business create solutions ever you think.
                            </Paragraph>
                        </div>
                        <div>
                            <Heading variant="h6">Standard of Excellence</Heading>
                            <Paragraph variant="para-11" className="text-center xl:text-left text-neutral-700 mt-2">
                                High standard business solutions for the your business create solutions ever you think.
                            </Paragraph>
                        </div>
                        <Link href="/about" className="block w-fit mx-auto translate-x-[-17px] xl:translate-x-0 xl:ml-0 mt-4">
                            <PrimaryButton variant="green">View Details</PrimaryButton>
                        </Link>
                    </div>
                    <div className="w-[80%] sm:w-[400px] md:w-[450px] xl:w-[485px] h-[393px] flex items-center justify-center relative">
                        <Image className="w-9/12 md:w-[380px] xl:w-[420px] absolute top-0 left-0" src={AboutOne} alt="" width={410} height={418} />
                        <Image className="w-6/12 md:w-[250px] xl:w-[303px] absolute bottom-0 right-0" src={AboutTwo} alt="" width={303} height={235} />
                    </div>
                    <div className="max-w-[176px] flex flex-col gap-6">
                        <div className="rounded-xl bg-secondary-50 px-5 py-2">
                            <Heading variant="h3" className="text-primary-900">
                                47+
                            </Heading>
                            <Paragraph variant="para-11" className="text-neutral-700 mt-1">
                                Projects complete
                            </Paragraph>
                        </div>
                        <div className="rounded-xl bg-success-50 px-5 py-2">
                            <Heading variant="h3" className="text-primary-900">
                                27k
                            </Heading>
                            <Paragraph variant="para-11" className="text-neutral-700 mt-1">
                                Positive reviews
                            </Paragraph>
                        </div>
                        <div className="rounded-xl bg-red-50 px-5 py-2">
                            <Heading variant="h3" className="text-primary-900">
                                90%
                            </Heading>
                            <Paragraph variant="para-11" className="text-neutral-700 mt-1">
                                Clients satisfaction
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
