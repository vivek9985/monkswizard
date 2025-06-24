import Badge from "@/Components/Utils/Badge/Badge";
import Heading from "@/Components/Utils/Heading/Heading";
import Image from "next/image";
import BlogThumbnail from "../../../../public/images/blog-1.png";
import ListImage from "../../../../public/images/list-image.png";
import ClientImage from "../../../../public/images/blog-client-image.png";
import profile from "@/assets/images/reviewer-one.png";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Link from "next/link";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiVimeoFill } from "@remixicon/react";
import type { Metadata } from "next";
import Container from "@/Components/Utils/Container/Container";
import BlogWidget from "@/Components/Widget/BlogWidget";
import Data from "@/db/data.json";

export const metadata: Metadata = {
    title: "MonksWizard - Blog Details",
};

export default function BlogDetailsPage() {
    return (
        <main className="py-26 md:py-32 xl:pt-[160px] xl:pb-[110px] px-4 xl:px-0">
            <div className="max-w-[800px] mx-auto">
                <Badge variant="light" className="mx-auto md:ml-0">February 10, 2024</Badge>
                <Heading variant="h2" className="mt-3 mb-9 md:mb-12 text-center md:text-left">A Marketing Campaign Based on Experiential Learning</Heading>
                <div className="w-full h-[300px] md:h-[456px] rounded-3xl overflow-hidden">
                    <Image className="w-full h-full object-cover" src={BlogThumbnail} alt="" width={776} height={456} />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b-[1px] border-neutral-300">
                    <div className="flex items-center gap-5">
                        <div className="w-12 md:w-16 lg:w-[74px] h-12 md:h-16 lg:h-[74px] rounded-full overflow-hidden">
                            <Image className="w-full h-full object-cover" src={profile} alt="" width={74} height={74} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Paragraph variant="para-1" className="text-black">Adnan Chowdhury</Paragraph>
                            <Paragraph variant="para-13" className="text-neutral-500">Businessman</Paragraph>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                        <Link href="https://x.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-neutral-400 duration-300 text-neutral-400 hover:bg-success-500 hover:border-success-500 hover:text-neutral-200">
                            <RiTwitterFill size={16} />
                        </Link>
                        <Link href="https://vimeo.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-neutral-400 duration-300 text-neutral-400 hover:bg-success-500 hover:border-success-500 hover:text-neutral-200">
                            <RiVimeoFill size={16} />
                        </Link>
                        <Link href="https://www.linkedin.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-neutral-400 duration-300 text-neutral-400 hover:bg-success-500 hover:border-success-500 hover:text-neutral-200">
                            <RiLinkedinFill size={16} />
                        </Link>
                        <Link href="https://www.facebook.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-neutral-400 duration-300 text-neutral-400 hover:bg-success-500 hover:border-success-500 hover:text-neutral-200">
                            <RiFacebookFill size={16} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5 my-9 md:my-12">
                    <Heading variant="h5">The most common business debate isn’t as black and white as you might think</Heading>
                    <Paragraph variant="para-11" className="text-neutral-700">We&apos;re dedicated to helping businesses thrive in the ever-evolving digital landscape. As a leading digital agency, we specialize in providing comprehensive solutions that drive results and exceed expectations. Our team of skilled professionals brings together expertise in web design, development, digital marketing, and branding to deliver tailored strategies that align with our clients&apos; goals and objectives. Whether you&apos;re looking to enhance your online presence, increase brand awareness, or drive conversions, we have the knowledge, experience, and creativity to make it happen.</Paragraph>
                    <Paragraph variant="para-11" className="text-neutral-700">From innovative website designs that captivate audiences to data-driven marketing campaigns that generate leads, we&apos;re committed to delivering measurable results that propel our clients&apos; success. At [Agency Name], we&apos;re more than just a service provider – we&apos;re your trusted partner in navigating the digital realm and achieving your business goals. Let&apos;s embark on this journey together and unlock the full potential of your digital presence.Digital marketing is a multifaceted approach to promoting businesses and brands online, reaching and engaging with target audiences through various digital channels. At we specialize in providing comprehensive digital marketing solutions tailored to meet the unique needs and objectives of our clients.</Paragraph>
                    <Paragraph variant="para-11" className="text-neutral-700">Product designer plays a pivotal role in creating innovative and user-centric solutions that meet the needs and expectations of customers. With a keen understand of design principles, market trends, and user behavior, a product designer collaborates closely with cross-functional teams to conceptualize, develop, and iterate on product designs. They conduct extensive research to gain insights into user needs, pain points, and preferences, leveraging techniques such as user interviews, surveys, and usability testing to inform their design decisions. By employing user-centered design methodologies, prototyping tools, and design thinking principles, product designers transform concepts into intuitive and visually appealing designs.</Paragraph>
                </div>
                <div className="w-full h-[320px] rounded-3xl overflow-hidden">
                    <Image className="w-full h-full object-cover" src={ListImage} alt="" width={800} height={300} />
                </div>
                <div className="my-14">
                    <Heading variant="h5">Understanding brand potential : Going Beyond The Logo</Heading>
                    <div className="flex flex-col gap-3 mt-5">
                        <div className="w-full flex gap-2">
                            <div className="bg-success-500 w-2 h-2 rounded-full mt-2"></div>
                            <Paragraph variant="para-11" className="w-[95%] text-neutral-700">The rise of digital technology has revolutionized the way businesses operate, communicate, and connect with their audiences. By employing user-centered design methodologies, prototyping tools.</Paragraph>
                        </div>
                        <div className="w-full flex gap-2">
                            <div className="bg-success-500 w-2 h-2 rounded-full mt-2"></div>
                            <Paragraph variant="para-11" className="w-[95%] text-neutral-700">The world of digital production, meticulous planning, expertise are paramount to delivering high-quality. Product designers transform concepts into intuitive and visually appealing designs that enhance.</Paragraph>
                        </div>
                        <div className="w-full flex gap-2">
                            <div className="bg-success-500 w-2 h-2 rounded-full mt-2"></div>
                            <Paragraph variant="para-11" className="w-[95%] text-neutral-700">A well-designed website not only looks visually bt also enhances usability, overall user experience. Product designer plays a pivotal role in creating innovative and user-centric solutions that meet the needs and expectations of customers.</Paragraph>
                        </div>
                        <div className="w-full flex gap-2">
                            <div className="bg-success-500 w-2 h-2 rounded-full mt-2"></div>
                            <Paragraph variant="para-11" className="w-[95%] text-neutral-700">The rise of digital technology has revolutionized the way businesses operate, communicate, and connect with their audiences. .Digital marketing is a multifaceted approach to promoting businesses and brands online, reaching and engaging with target audiences through various digital channels.</Paragraph>
                        </div>
                        <div className="w-full flex gap-2">
                            <div className="bg-success-500 w-2 h-2 rounded-full mt-2"></div>
                            <Paragraph variant="para-11" className="w-[95%] text-neutral-700">The rise of digital technology has revolutionized the way businesses operate, communicate, and connect with their audiences. Whether you&apos;re looking to enhance your online presence, increase brand awareness.</Paragraph>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-[467px] rounded-3xl overflow-hidden">
                        <Image className="w-full h-full object-cover" src={ClientImage} alt="" width={800} height={467} />
                    </div>
                    <Paragraph variant="para-11" className="text-neutral-700 mt-5">From innovative website designs that captivate audiences to data-driven marketing campaigns that generate leads, we&apos;re committed to delivering measurable results that propel our client&apos;s success. At [Agency Name], we&apos;re more than just a service provider - we&apos;re your trusted partner in navigating the digital realm and achieving your business goals. Let&apos;s embark on this journey together and unlock the full potential of your digital presence.Digital marketing is a multifaceted approach to promoting businesses and brands online, reaching and engaging with target audiences through various digital channels. At we specialize in providing comprehensive digital marketing solutions tailored to meet the unique needs and objectives of our clients.</Paragraph>
                </div>
                <div className="text-center py-8 md:py-10 lg:py-[50px] px-12 md:px-16 lg:px-20 xl:px-[89px] rounded-lg overflow-hidden border-l-[4px] border-success-500 bg-neutral-100 mt-9 md:mt-14">
                    <Heading variant="h5m">
                        “Unleashing your brand&apos;s potential and leaving a lasting impression on your audience begins with a deep understanding of your brand identity and what distinguished you from competitors.”
                    </Heading>
                </div>
            </div>
            <Container className="mt-9 md:mt-12">
                <Heading variant="h2" className="text-center">Recent Blog</Heading>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mt-12">
                    {
                        Data?.blog?.slice(0, 3).map((item, i) => (
                            <BlogWidget key={i}
                                image={item?.images?.blog_image}
                                title={item?.title?.blog_title}
                                category={item?.category}
                                date={item?.date}
                                link={item?.slug}
                                authorProfile={item?.author?.profile}
                                authorName={item?.author?.name}
                            />
                        ))
                    }
                </div>
            </Container>
        </main>
    );
}
