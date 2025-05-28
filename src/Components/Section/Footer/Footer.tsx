"use client";
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Mail from "@/assets/images/icons/mail.svg";
import Link from "next/link";
import { RiFacebookFill, RiLinkedinFill, RiMailLine, RiPhoneLine, RiTwitterFill, RiVimeoFill } from "@remixicon/react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname()
    return (
        <section className="bg-primary-700 pt-[60px]">
            <Container className={`${pathname === "/404" && "hidden"}`}>
                <div className="w-10/12 sm:w-7/12 md:w-7/12 lg:w-8/12 xl:max-w-[718px] mx-auto">
                    <Heading variant="h2" className="text-white text-center">
                        Get The Best Customer Service Possible
                    </Heading>
                    <Paragraph variant="para-7" className="max-w-[460px] mx-auto text-center text-neutral-300 mt-3">
                        Building a page with unique blocks is easy without coding. You can easily create a landing page.
                    </Paragraph>
                    <Link href="/services" className="block w-fit mx-auto translate-x-[-17px] mt-10">
                        <PrimaryButton>View Services</PrimaryButton>
                    </Link>
                </div>
            </Container>
            <div className={`bg-primary-500 w-full h-px my-[60px] md:my-[70px] xl:my-[100px] ${pathname === "/404" && "hidden"}`}></div>
            <Container>
                <div className="flex flex-col gap-y-12 xl:flex-row justify-between">
                    <div className="max-w-[316px]">
                        <Link href="/" className="w-fit block">
                            <Image src={Logo} alt="" width={160} height={36} />
                        </Link>
                        <Paragraph variant="para-7" className="max-w-[274px] text-neutral-400 mt-3">
                            An digital agency plays a crucial role in transforming digital spaces
                        </Paragraph>
                        <form className="w-full border-[1px] border-neutral-700 text-neutral-400 rounded-[8px] px-3 py-2.5 relative mt-8 xl:mt-11">
                            <input className="w-full focus:outline-none" placeholder="Your Email" type="email" required />
                            <button type="submit" className="absolute right-3 top-0 bottom-0 my-auto cursor-pointer">
                                <Image src={Mail} alt="" width={20} height={20} />
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-between xl:w-[729px]">
                        <div className="flex flex-col gap-3">
                            <Paragraph variant="para-9" className="text-white">
                                Quick Link
                            </Paragraph>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link href="/" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Home 01
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-two" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Home 02
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-study" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Case Study
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Services
                                        </Paragraph>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Paragraph variant="para-9" className="text-white">
                                Quick Link
                            </Paragraph>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link href="/faq" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Faq
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Privacy Policy
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-condtion" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Terms & Condition
                                        </Paragraph>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Paragraph variant="para-9" className="text-white">
                                Information
                            </Paragraph>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link href="/about" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            About Us
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Contact
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            Blog
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/404" className="text-neutral-400 hover:text-success-600 block w-fit">
                                        <Paragraph variant="para-11">
                                            404
                                        </Paragraph>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Paragraph variant="para-9" className="text-white">
                                Contact Us
                            </Paragraph>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link href="tel:+880 196 2424 967" className="flex items-center gap-2 text-neutral-400 hover:text-success-600 w-fit">
                                        <RiPhoneLine size={18} />
                                        <Paragraph variant="para-11" className="">
                                            +880 196 2424 967
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:hello@designmonks.co" className="flex items-center gap-2 text-neutral-400 hover:text-success-600 w-fit">
                                        <RiMailLine size={18} />
                                        <Paragraph variant="para-11" className="">
                                            hello@designmonks.co
                                        </Paragraph>
                                    </Link>
                                </li>
                                <li className="flex items-center flex-wrap gap-2 mt-6">
                                    <Link href="https://x.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-primary-400 duration-300 text-white hover:bg-secondary-500 hover:border-secondary-500 hover:text-primary-800">
                                        <RiTwitterFill size={16} />
                                    </Link>
                                    <Link href="https://vimeo.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-primary-400 duration-300 text-white hover:bg-secondary-500 hover:border-secondary-500 hover:text-primary-800">
                                        <RiVimeoFill size={16} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-primary-400 duration-300 text-white hover:bg-secondary-500 hover:border-secondary-500 hover:text-primary-800">
                                        <RiLinkedinFill size={16} />
                                    </Link>
                                    <Link href="https://www.facebook.com/" className="w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-primary-400 duration-300 text-white hover:bg-secondary-500 hover:border-secondary-500 hover:text-primary-800">
                                        <RiFacebookFill size={16} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-primary-500 w-full h-px mt-10 xl:mt-[69px]"></div>
                <div className="flex flex-col md:flex-row-reverse gap-y-3 items-center justify-between pt-6 pb-7">
                    <div className="flex items-center gap-2">
                        <Link href="/terms-condition">
                            <Paragraph variant="para-11" className="text-neutral-400">
                                Terms & Condition
                            </Paragraph>
                        </Link>
                        <Paragraph variant="para-11" className="text-neutral-400">
                            .
                        </Paragraph>
                        <Link href="/privacy-policy">
                            <Paragraph variant="para-11" className="text-neutral-400">
                                Privacy Policy
                            </Paragraph>
                        </Link>
                    </div>
                    <Paragraph variant="para-11" className="text-neutral-400">
                        © 2024 MonksWizard. All rights reserved.
                    </Paragraph>
                </div>
            </Container>
        </section>
    );
}
