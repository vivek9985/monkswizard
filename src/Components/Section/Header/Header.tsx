"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from '@/Components/Utils/Container/Container';
import { RiArrowDownSLine, RiCloseLargeLine, RiMenu3Line, RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import LogoDark from "@/assets/images/logo-dark.svg"

interface TnestedSubItem {
    nav_item: string;
    link: string;
}
interface TsubItem {
    nav_item: string;
    link: string;
    class?: string;
    nested_sub_item?: TnestedSubItem[];
}
interface TmainNav {
    nav_item: string;
    link: string;
    sub_item?: TsubItem[];
}


const mainNav: TmainNav[] = [
    {
        nav_item: "Home",
        link: "/",
        sub_item: [
            { nav_item: "Home 01", link: "home" },
            { nav_item: "Home 02", link: "home-2" },
        ],
    },
    {
        nav_item: "Pages",
        link: "#",
        sub_item: [
            { nav_item: "About Us", link: "about-us" },
            {
                nav_item: "Case Study",
                link: "case-study",
            },
            { nav_item: "Faq", link: "faq" },
            { nav_item: "Privacy", link: "privacy" },
            { nav_item: "Terms", link: "terms" },
            { nav_item: "404", link: "404" },
        ],
    },
    {
        nav_item: "Services",
        link: "seervice",
    },
    {
        nav_item: "Blog",
        link: "blog",
    },
    {
        nav_item: "Contact",
        link: "contact",
    },
];

const Header = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (active) {
            document.body.classList.add("menu-active");
        } else {
            document.body.classList.remove("menu-active");
        }
        return () => document.body.classList.remove("menu-active");
    }, [active]);

    const navHandler = () => {
        setActive((prev) => !prev);
    };
    const closeNavHandler = () => {
        setActive(false);
    }

    return (
        <header className="w-[100%] sm:w-full mx-auto relative select-none">
            <div className="px-5 md:px-0 w-full h-[75px] flex items-center justify-center absolute z-10 left-auto right-auto top-0">
                <Container>
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image src={Logo} alt="" width={150} height={20} />
                        </Link>
                        <nav className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center justify-center gap-6 xl:gap-8 text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal">
                                {mainNav.map((item, index) => (
                                    <li key={index} className="relative group py-2 text-neutral-300 hover:text-success-500">
                                        <Link
                                            href={item.link}
                                            className="flex items-center justify-center group gap-1"
                                        >
                                            <span>{item.nav_item}</span>
                                            {item.sub_item && (
                                                <span className="translate-y-[1.5px] group-hover:rotate-180 duration-500">
                                                    <RiArrowDownSLine />
                                                </span>
                                            )}
                                        </Link>
                                        {item.sub_item && (
                                            <ul className="absolute left-0 invisible mt-2 p-5 bg-white rounded-xl w-[180px] shadow-lg group-hover:visible flex flex-col gap-3 opacity-0 translate-y-10 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20">
                                                <div className="w-4 h-4 bg-white rotate-45 absolute left-4 -top-1.5"></div>
                                                {item.sub_item.map((subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className={`${subItem.class} group relative `}
                                                    >
                                                        <span
                                                            className={`${subItem.class ? "cursor-pointer" : ""
                                                                } "group flex items-center justify-between"`}
                                                        >
                                                            <Link
                                                                href={subItem.link}
                                                                className="group relative text-primary-800 hover:text-success-500"
                                                            >
                                                                {subItem.nav_item}
                                                            </Link>
                                                            {subItem.nested_sub_item && (
                                                                <span className="translate-y-[1px] duration-500">
                                                                    <RiArrowDownSLine />
                                                                </span>
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <button className="text-neutral-300 hover:text-success-500 cursor-pointer">
                                <RiSearchLine size={20} />
                            </button>
                        </nav>
                        <div className="flex lg:hidden items-center justify-center gap-5">
                            <button className="text-neutral-300 cursor-pointer">
                                <RiSearchLine size={20} />
                            </button>
                            <div
                                onClick={navHandler}
                                className="w-9 h-9 text-neutral-300 flex items-center justify-center cursor-pointer"
                            >
                                {active ? (
                                    <RiCloseLargeLine size={25} />
                                ) : (
                                    <RiMenu3Line size={25} />
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile menu here */}
            <div
                className={`w-full h-[100vh] flex z-20 absolute top-0 text-black duration-700 ease-out ${active ? "left-0" : "left-[-100%]"
                    }`}
            >
                <div className="w-[65%] md:w-[50%] bg-white px-2 md:px-5 py-5">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <Image src={LogoDark} alt="" width={150} height={20} />
                        </Link>
                    </div>
                    <nav className="my-12">
                        <ul className="flex flex-col gap-2 text-lg font-medium">
                            {mainNav.map((item, index) => (
                                <li key={index} className="relative group py-1 px-2 text-primary-800">
                                    <span
                                        className="flex items-center justify-between group"
                                    >
                                        <Link href={item.link}>{item.nav_item}</Link>
                                        {item.sub_item && (
                                            <span className="translate-y-[1px] group-hover:rotate-180 duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                            </span>
                                        )}
                                    </span>
                                    {item.sub_item && (
                                        <ul className="absolute left-0 invisible mt-0 p-5 bg-success-500 w-full rounded-xl shadow-lg group-hover:visible flex flex-col gap-0 opacity-0 translate-y-10 group-hover:translate-y-3 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20">
                                            <div className="w-5 h-5 bg-success-500 rotate-45 absolute right-[1.5%] -top-1"></div>
                                            {item.sub_item.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className={`${subItem.class}  py-2 px-4 flex items-center justify-between text-neutral-200 group relative `}
                                                >
                                                    <span
                                                        className={`${subItem.class ? "cursor-pointer" : ""
                                                            } "group flex items-center justify-between text-black"`}
                                                    >
                                                        <Link href={subItem.link}
                                                            className="group relative hover:text-primary-800"
                                                        >
                                                            {subItem.nav_item}
                                                        </Link>
                                                    </span>
                                                    {subItem.nested_sub_item && (
                                                        <span className="translate-y-[1px] duration-500 arrow">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                                        </span>
                                                    )}

                                                    {
                                                        subItem.nested_sub_item && (
                                                            <ul className="bg-neutral1 p-5 absolute left-0 right-0 mx-auto top-[53px] invisible w-full shadow-lg flex flex-col gap-2 opacity-0 transition-all duration-200 ease-in-out -ml-[10px] z-10">
                                                                {subItem.nested_sub_item.map(
                                                                    (nestedItem, nestedIndex) => (
                                                                        <Link
                                                                            key={nestedIndex}
                                                                            href={nestedItem.link}
                                                                            className="text-white transition-all duration-300 py-3 px-4 hover:bg-secondary"
                                                                        >
                                                                            <span

                                                                                className="group text-white relative"
                                                                            >
                                                                                <span className="relative">
                                                                                    {nestedItem.nav_item}
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div onClick={closeNavHandler} className="w-[35%] md:w-[50%] bg-transparent cursor-pointer"></div>
            </div>
        </header >
    );
};

export default Header;
