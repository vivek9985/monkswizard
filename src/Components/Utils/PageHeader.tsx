"use client"
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import GradientBg from "@/assets/images/page-header-bg.svg";
import HalfCircle from "@/assets/images/half-circle.png";
import ShinyText from "@/animation/ShinyText";
import { motion } from 'framer-motion';
import AnimatedCharacters from "@/animation/AnimatedCharacters";

interface TPageHeader {
    subtitle?: string;
    title: string;
    paragraph: string;
    className?: string;
}

export default function PageHeader({ subtitle, title, paragraph, className = "" }: TPageHeader) {
    return (
        <section className={`max-h-[450px] bg-primary-600 pt-[118px] pb-[117px] bg-no-repeat bg-cover bg-top ${className}`} style={{ backgroundImage: `url(${GradientBg.src})` }}>
            <Container className="relative">
                <div className="flex flex-col items-center gap-y-[60px]">
                    <div className="w-10/12 md:w-9/12 xl:w-[1015px]">
                        {subtitle &&
                            <motion.div
                                initial={{ y: 40, opacity: 0, rotate: 10 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="mx-auto"><ShinyText text={subtitle} /></Badge>
                            </motion.div>
                        }
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 0.2, staggerChildren: 0.015 } } }}
                        >
                            <Heading variant="h1" className="text-white text-center mt-4 mb-3">
                                <AnimatedCharacters text={title} type="heading" />
                            </Heading>
                        </motion.span>
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { delayChildren: 0.4, staggerChildren: 0.010 } } }}
                        >
                            <Paragraph variant="para-11" className="max-w-[750px] mx-auto text-center text-neutral-300">
                                <AnimatedCharacters text={paragraph} />
                            </Paragraph>
                        </motion.span>
                        <Image className="w-[50px] hidden lg:flex absolute right-0 bottom-[10%] animate-bounce" src={HalfCircle} alt="" width={50} height={50} />
                    </div>
                </div>
            </Container>
        </section>
    )
}