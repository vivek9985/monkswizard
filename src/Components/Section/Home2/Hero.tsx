"use client"
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import HeroImage from "@/assets/images/home-2-hero.png";
import CircleButton from "@/Components/Utils/Button/CircleButton";
import { useState } from "react";
import { RiCloseLargeLine } from "@remixicon/react";
import { motion } from 'framer-motion';
import AnimatedCharacters from "@/animation/AnimatedCharacters";

export default function Hero() {
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <section className="bg-warning-50 pt-24 md:pt-[120px] lg:pt-[132px] overflow-x-hidden">
            <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                <div className="w-11/12 md:w-9/12 lg:w-10/12 xl:max-w-[1150px] mx-auto mb-5">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.0100 } } }}>
                        <Heading variant="large" className="text-black text-center mb-2">
                            <AnimatedCharacters
                                text="Our⚡Mission Is to Craft✨ Exceptional Digital Experiences"
                            />
                        </Heading>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { delayChildren: 0.9, staggerChildren: 0.0035 } } }}>
                         <Paragraph variant="para-7" className="max-w-[1021px] mx-auto text-center text-neutral-700">
                            <AnimatedCharacters
                                text="We specialize in providing cutting-edge digital solutions tailored to meet the unique needs of our clients. With a team of skilled professionals adept in areas such as web design, development, digital marketing, and branding"
                            />
                        </Paragraph>
                    </motion.div>
                    <motion.div initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.5, duration: 0.3}}>
                        <PrimaryButton className="mx-auto mt-7 lg:mt-10 -translate-x-5">
                            <p className="text-neutral-700">
                                Get Started
                            </p>
                        </PrimaryButton>
                    </motion.div>
                </div>
            </div>
            <motion.div  
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{delay: 2.2, duration: 0.7 }}
             className="pt-10 md:pt-14 lg:pt-24 xl:pt-[90px] w-full relative">
                <motion.div initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 2.9, duration: 0.5}} onClick={() => setOpenVideo(true)} className="absolute w-fit rounded-full overflow-hidden top-[-10%] md:top-[-4%] lg:top-[3%] left-0 right-0 mx-auto bg-success-900 scale-50 md:scale-[0.66] lg:scale-[0.85] xl:scale-100 2xl:scale-110">
                    <CircleButton />
                </motion.div>
                <Image className="w-full h-full object-fill" src={HeroImage} alt="" />
            </motion.div>
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
