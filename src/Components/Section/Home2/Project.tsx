import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import ProjectOne from "@/assets/images/home-2-project-1.png";
import ProjectTwo from "@/assets/images/home-2-project-2.png";
import ProjectThree from "@/assets/images/home-2-project-3.png";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import LinkButton from "@/Components/Utils/Button/LinkButton";
import Link from "next/link";

export default function Project() {
    return (
        <section className="bg-primary-600 py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex items-end justify-between">
                    <div>
                        <Badge className="rounded-lg">Case Studies</Badge>
                        <Heading variant="h2" className="text-white mt-3">
                            Our Project
                        </Heading>
                    </div>
                    <Link href="/case-study" className="">
                        <LinkButton variant="secondary">
                            View Detais
                        </LinkButton>
                    </Link>
                </div>
                <div className="mt-10 md:mt-12 lg:mt-[60px]">
                    <div className="w-full h-[596px] rounded-[20px] group relative overflow-hidden">
                        <Image className="w-full h-full object-cover duration-300 group-hover:scale-105" src={ProjectOne} alt="" width={1140} height={596} />
                        <div className="w-fit md:max-w-[603px] p-5 lg:py-[26px] lg:px-[29px] border-[1px] border-[#E7E7E775] absolute left-3 bottom-3 right-3 mx-auto md:ml-0 md:left-8 md:bottom-7 bg-[#AFEEBA16] backdrop-blur-2xl rounded-[20px]">
                            <Heading variant="h3" className="text-white">Introducing Our Digital Success Stories</Heading>
                            <Paragraph variant="para-11" className="mt-1 mb-7 text-white">Development to digital marketing and beyond, we&apos;re dedicated to elevating your brand&apos;s online presence and driving.</Paragraph>
                            <PrimaryButton>Explore More</PrimaryButton>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 xl:gap-6 mt-5 xl:mt-6">
                        <div className="w-full h-[294px] rounded-[20px] rounded-br-none relative group overflow-hidden">
                            <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-500" src={ProjectTwo} alt="" width={558} height={294} />
                            <div className="absolute left-0 top-0 w-full h-full flex items-end pl-5 pb-7 bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                                <Heading variant="h5" className="text-white">
                                    Technical <br /> Solution
                                </Heading>
                            </div>
                            <div className="w-[54px] h-[54px] rounded-full bg-white duration-300 cursor-pointer hover:bg-secondary-500 flex items-center justify-center absolute top-5 right-6">
                                <RiArrowRightUpLongLine className="rotate-[10deg]" size={28} />
                            </div>
                        </div>
                        <div className="w-full h-[294px] rounded-[20px] rounded-br-none relative group overflow-hidden">
                            <Image className="w-full h-full object-cover object-center group-hover:scale-110 duration-500" src={ProjectThree} alt="" width={558} height={294} />
                            <div className="absolute left-0 top-0 w-full h-full flex items-end pl-5 pb-7 bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                                <Heading variant="h5" className="text-white">
                                    Online <br /> Managment
                                </Heading>
                            </div>
                            <Link href="/case-study">
                                <div className="w-[54px] h-[54px] rounded-full bg-white duration-300 cursor-pointer hover:bg-secondary-500 flex items-center justify-center absolute top-5 right-6">
                                    <RiArrowRightUpLongLine className="rotate-[10deg]" size={28} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
