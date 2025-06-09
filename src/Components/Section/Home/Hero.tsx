"use client";

import { useState } from "react";
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import HeroBgImage from "@/assets/images/home-one-hero-bg.svg";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import HappyCustomerWidget from "@/Components/Widget/HappyCustomerWidget";
import Image from "next/image";
import HeroImage from "@/assets/images/home-one-hero.png";
import HalfCircle from "@/assets/images/half-circle.png";
import CircleButton from "@/Components/Utils/Button/CircleButton";
import LogoipsumOne from "@/assets/images/logoipsum.svg";
import LogoipsumTwo from "@/assets/images/logoipsum-2.svg";
import LogoipsumThree from "@/assets/images/logoipsum-3.svg";
import LogoipsumFour from "@/assets/images/logoipsum-4.svg";
import LogoipsumFive from "@/assets/images/logoipsum-5.svg";
import { RiCloseLargeLine } from "@remixicon/react";
import ShinyText from "@/animation/ShinyText";
import AnimatedCharacters from "@/animation/AnimatedCharacters";
import { motion } from "framer-motion";

export default function Hero() {
    const [openVideo, setOpenVideo] = useState<boolean>(false);

    return (
        <section
            className="bg-primary-600 pt-[160px] pb-[64px] bg-no-repeat bg-cover bg-top"
            style={{ backgroundImage: `url(${HeroBgImage.src})` }}
        >
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="w-10/12 md:w-9/12 xl:max-w-[610px]">
                        <motion.div
                            initial={{ y: 40, opacity: 0, rotate: 10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mx-auto xl:ml-0">
                                <ShinyText text="Best Digital Agency & Development" speed={2} />
                            </Badge>
                        </motion.div>

                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 0.2, staggerChildren: 0.015 } } }}
                        >
                            <Heading variant="h1" className="text-white text-center xl:text-left mt-4 mb-3">
                                <AnimatedCharacters text="Transforming Ideas into⚡️Digital Success Stories with us ✨" type="heading" />
                            </Heading>
                        </motion.span>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 1.3, staggerChildren: 0.005 } } }}
                        >
                            <Paragraph
                                variant="para-7"
                                className="text-center xl:text-left text-neutral-300"
                            >
                                <AnimatedCharacters
                                    text="We specialize in crafting dynamic digital solutions that propel businesses forward in the ever-evolving digital landscape. Our team of experts."
                                />
                            </Paragraph>
                        </motion.div>

                        <motion.div initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.5 }}>
                            <PrimaryButton className="mx-auto translate-x-[-17px] xl:translate-x-0 xl:ml-0 mt-7 xl:mt-8">
                                Get Started
                            </PrimaryButton>
                        </motion.div>
                        <motion.div initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 3, duration: 0.5 }}>
                            <HappyCustomerWidget className="w-fit mx-auto xl:ml-0 mt-[50px]" />
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3.3, duration: 0.3 }}
                        className="max-w-[280px] sm:max-w-[320px] md:max-w-[400px] xl:max-w-[440px] flex items-center justify-center relative">
                        <Image src={HeroImage} alt="Hero" width={445} height={533} priority />
                        <Image
                            className="w-[50px] sm:w-[60px] md:w-[80px] xl:w-[92px] absolute -right-[9%] bottom-[11%] animate-bounce"
                            src={HalfCircle}
                            alt="Decorative Half Circle"
                            width={92}
                            height={92}
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.7, duration: 0.5 }}
                            onClick={() => setOpenVideo(true)}
                            className="scale-[0.65] md:scale-[0.85] xl:scale-100 absolute -left-[23%] sm:-left-[20%] md:-left-[15%] xl:-left-[14%] top-[10%] cursor-pointer"
                        >
                            <CircleButton />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Logos */}
            <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-11/12 max-w-[1240px] mx-auto">
                <div className="bg-[#ffffff33] w-full h-px mt-[90px]" />
                <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { delayChildren: 1.3, staggerChildren: 0.005 } } }}>
                    <Heading variant="h6" className="text-neutral-200 text-center mt-12">
                            <AnimatedCharacters
                            text="More than 2000+ companies trusted us and collaborate with us"
                    />
                    </Heading>
                </motion.div>
                <div className="flex items-center justify-center xl:justify-between flex-wrap gap-x-5 lg:gap-x-12 gap-y-4 md:gap-y-5 mt-10">
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumOne} alt="Logo 1" width={224} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumTwo} alt="Logo 2" width={187} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumThree} alt="Logo 3" width={158} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumFour} alt="Logo 4" width={155} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumFive} alt="Logo 5" width={182} height={40} />
                </div>
            </div>

            {/* Video Modal */}
            {
                openVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                        <div className="w-11/12 md:w-8/12 xl:w-[1010px]">
                            <video
                                className="w-full" controls autoPlay loop muted >
                                <source
                                    src="https://framerusercontent.com/assets/jiTEi6tiCiabzCOkSxzCTWnwwE.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute top-10 right-12 text-white cursor-pointer"
                                onClick={() => setOpenVideo(false)}
                            >
                                <RiCloseLargeLine size={24} />
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
}
