"use client";
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import HeroBgImage from "@/assets/images/about-hero.svg";
import HalfCircle from "@/assets/images/half-circle.png";
import Spring from "@/assets/images/spring.svg";
import CircleButton from "@/Components/Utils/Button/CircleButton";
import HeroOne from "@/assets/images/about-hero-1.png";
import HeroTwo from "@/assets/images/about-hero-2.png";
import HeroThree from "@/assets/images/about-hero-3.png";
import { useState } from "react";
import { RiCloseLargeLine } from "@remixicon/react";
import ShinyText from "@/animation/ShinyText";
import { motion } from 'framer-motion';
import AnimatedCharacters from "@/animation/AnimatedCharacters";

export default function Hero() {
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <section className="bg-primary-600 pt-[120px] md:pt-[155px] pb-[64px] overflow-x-hidden bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${HeroBgImage.src})` }}>
            <Container>
                <div className="flex flex-col items-center gap-y-[60px]">
                    <div className="w-10/12 md:w-9/12 xl:max-w-[874px] relative">
                        <motion.div
                            initial={{ y: 40, opacity: 0, rotate: 10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mx-auto"><ShinyText text="About us" /></Badge>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 0.2, staggerChildren: 0.015 } } }}
                        >
                            <Heading variant="h1" className="text-white text-center mt-4 mb-5">
                                <AnimatedCharacters text="The Passionate People Powering Our Digital Agency" type="heading" />
                            </Heading>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 0.4, staggerChildren: 0.010 } } }}
                        >
                            <Paragraph variant="para-7" className="text-center text-neutral-300">
                                <AnimatedCharacters text="We are creative agency that specializes in web design, seo, and Social media management. Our experienced team works closely." type="heading" />
                            </Paragraph>
                        </motion.div>
                        <Image className="w-[50px] hidden lg:block rotate-[65deg] absolute right-0 lg:-right-[5%] xl:-right-[20%] bottom-[-5%] animate-bounce" src={HalfCircle} alt="" width={50} height={50} />
                        <Image className="w-[65px] hidden lg:block absolute left-0 lg:-left-[10%] bottom-[-7%] animate-bounce" src={Spring} alt="" width={65} height={56} />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-y-7 items-center justify-center gap-x-[34px]">
                        <motion.div initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}>
                            <Image src={HeroOne} alt="" width={294} height={307} />
                        </motion.div>
                        <motion.div initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.5 }} className="max-w-[280px] sm:max-w-[320px] md:max-w-[400px] xl:max-w-[484px] flex items-center justify-center relative">
                            <Image src={HeroTwo} alt="" width={445} height={533} />
                            <div onClick={() => setOpenVideo(true)}>
                                <CircleButton className="scale-50 md:scale-90 absolute -right-[23%] sm:-right-[20%] md:-right-[15%] xl:-right-[6%] top-[-13%]" />
                            </div>
                        </motion.div>
                        <motion.div initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.1, duration: 0.5 }}>
                            <Image src={HeroThree} alt="" width={294} height={307} />
                        </motion.div>
                    </div>
                </div>
            </Container>
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
