import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import ServiceBg from "@/assets/images/service-bg.svg";
import ServiceImageOne from "@/assets/images/service-one.webp";
import ServiceImageTwo from "@/assets/images/service-two.png";
import ServiceImageThree from "@/assets/images/service-three.png";
import Link from "next/link";

export default function Services() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:pt-[120px] xl:pb-[180px]">
            <Container>
                <div className="w-10/12 sm:w-8/12 md:w-8/12 xl:max-w-[577px] mx-auto">
                    <Badge variant="light" className="mx-auto">Our Services</Badge>
                    <Heading variant="h2" className="text-primary-900 text-center my-4">
                        Our Business Services
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[577px] mx-auto text-center text-neutral-700">
                        We offer a comprehensive suite of digital services tailored to meet the diverse needs of our clients. From web design and development
                    </Paragraph>
                </div>
                <div className="w-full sm:w-9/12 md:w-8/12 lg:w-[95%] xl:w-full mx-auto flex flex-col lg:flex-row items-center gap-4 xl:gap-6 mt-10 md:mt-[60px]">
                    <div className="w-full xl:w-[461px] rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] bg-[linear-gradient(124deg,#eec800_0%,#b1f8b1_62%,rgb(177,248,177)_41%)] p-1 overflow-hidden">
                        <div className="w-full h-full rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] bg-primary-500">
                            <div className="bg-no-repeat bg-cover bg-center p-10 md:p-14 lg:p-12 xl:py-14 xl:px-[73px]" style={{ backgroundImage: `url(${ServiceBg.src})` }}>
                                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-success-500 overflow-hidden">
                                    <Image className="object-contain" src="./images/icons/light.svg" alt="" width={24} height={24} />
                                </div>
                                <Heading variant="h4" className="text-neutral-50 mt-6">
                                    Branding Design
                                </Heading>
                                <Paragraph variant="para-11" className="text-neutral-50 mt-3">
                                    SEO optimization, and targeted digital marketing campaigns, we helped Client & increase their online sales by 150% within the first six months. Our team &apos;s expertise in user experience.
                                </Paragraph>
                                <Link href="/services" className="mt-8 xl:mt-12">
                                    <PrimaryButton className="mt-12">View Details</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[655px]">
                        <Link href="/services">
                            <div className="w-full h-[230px] xl:h-[280px] rounded-[22px] rounded-br-none relative group overflow-hidden">
                                <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-500" src={ServiceImageOne} alt="" width={655} height={284} />
                                <div className="absolute left-0 top-0 w-full h-full flex items-end pl-5 pb-7 bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                                    <Heading variant="h6" className="text-white">
                                        Design & Development
                                    </Heading>
                                </div>
                            </div>
                        </Link>
                        <div className="grid sm:grid-cols-2 gap-4 xl:gap-4 mt-4 xl:mt-6">
                            <Link href="/services">
                                <div className="w-full h-[196px] rounded-[22px] rounded-br-none relative group overflow-hidden">
                                    <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-500" src={ServiceImageTwo} alt="" width={311} height={196} />
                                    <div className="absolute left-0 top-0 w-full h-full flex items-end pl-5 pb-7 bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                                        <Heading variant="h6" className="text-white">
                                            Digital Marketing
                                        </Heading>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/services">
                                <div className="w-full h-[196px] rounded-[22px] rounded-br-none relative group overflow-hidden">
                                    <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-500" src={ServiceImageThree} alt="" width={311} height={196} />
                                    <div className="absolute left-0 top-0 w-full h-full flex items-end pl-5 pb-7 bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                                        <Heading variant="h6" className="text-white">
                                            E-commerce
                                        </Heading>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
