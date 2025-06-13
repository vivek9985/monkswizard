"use client";
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import GradientBg from "@/assets/images/page-header-bg.svg";
import HalfCircle from "@/assets/images/half-circle.png";
import Spring from "@/assets/images/spring.svg";
import IconOne from "@/assets/images/icons/service-icon-1.svg";
import IconTwo from "@/assets/images/icons/service-icon-2.svg";
import IconThree from "@/assets/images/icons/service-icon-3.svg";
import IconFour from "@/assets/images/icons/service-icon-4.svg";
import IconFive from "@/assets/images/icons/service-icon-5.svg";
import IconSix from "@/assets/images/icons/service-icon-6.svg";
import ServiceCard from "@/Components/Card/ServiceCard";
import ShinyText from "@/animation/ShinyText";
import { motion } from 'framer-motion';
import AnimatedCharacters from "@/animation/AnimatedCharacters";

export default function Hero() {
    return (
        <section className="bg-primary-600 pt-[118px] bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${GradientBg.src})` }}>
            <Container>
                <div className="flex flex-col items-center gap-y-[60px] relative">
                    <div className="w-10/12 md:w-9/12 xl:max-w-[874px]">
                        <motion.div
                            initial={{ y: 40, opacity: 0, rotate: 10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mx-auto"><ShinyText text="Services" /></Badge>
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
                                <AnimatedCharacters text="We are creative agency that specializes in web design, seo, and Social media management. Our experienced team works closely." />
                            </Paragraph>
                        </motion.div>
                        <Image className="w-[50px] absolute right-0 bottom-[10%] animate-bounce" src={HalfCircle} alt="" width={50} height={50} />
                        <Image className="w-[65px] absolute left-[-5%] bottom-[-20%] animate-bounce" src={Spring} alt="" width={65} height={56} />
                    </div>
                </div>
            </Container>
            <motion.div initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{delay: 1.2, duration: 0.5 }} className="mb-20 relative">
                <Container className="grid sm:grid-cols-2 lg:grid-cols-3 mt-20 relative z-10 shadow-[8px_12px_68px_rgba(0,0,0,0.05)]">
                    <ServiceCard className="lg:rounded-tl-2xl" underClassName="lg:rounded-tl-2xl" icon={IconOne} title="Development" paragraph="Thousands of Developer" />
                    <ServiceCard icon={IconTwo} title="Design" paragraph="Thousands of Developer" />
                    <ServiceCard className="lg:rounded-tr-2xl" underClassName="lg:rounded-tr-2xl" icon={IconThree} title="QA/Testing" paragraph="Thousands of Developer" />
                    <ServiceCard className="lg:rounded-bl-2xl" underClassName="lg:rounded-bl-2xl group-hover:rounded-bl-[0px]" icon={IconFour} title="Creatives" paragraph="Thousands of Developer" />
                    <ServiceCard icon={IconFive} title="Marketing" paragraph="Thousands of Developer" />
                    <ServiceCard className="lg:rounded-br-2xl" underClassName="lg:rounded-br-2xl group-hover:rounded-br-[0px]" icon={IconSix} title="Research" paragraph="Thousands of Developer" />
                </Container>
                <div className="w-full h-[50%] bg-white absolute left-0 bottom-0 z-0"></div>
            </motion.div>
        </section>
    );
}
