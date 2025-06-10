"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from '@/Components/Utils/Container/Container';
import { RiArrowDownSLine, RiCloseLargeLine, RiMenu3Line, RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import LogoDark from "@/assets/images/logo-dark.svg"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface TnestedSubItem {
    nav_item: string;
    link?: string;
}
interface TsubItem {
    nav_item: string;
    link?: string;
    class?: string;
    nested_sub_item?: TnestedSubItem[];
}
interface TmainNav {
    nav_item: string;
    link?: string;
    sub_item?: TsubItem[];
}


const mainNav: TmainNav[] = [
    {
        nav_item: "Home",
        link: "/",
        sub_item: [
            { nav_item: "Home 01", link: "/" },
            { nav_item: "Home 02", link: "home-2" },
        ],
    },
    {
        nav_item: "Pages",
        link: "/",
        sub_item: [
            { nav_item: "About Us", link: "about" },
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
        link: "services",
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
    const pathname = usePathname()
    const router = useRouter()
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
                        <div onClick={() => router.push("/")} className="cursor-pointer">
                            {(pathname === "/" || pathname === "/about" || pathname === "/case-study" || pathname === "/faq" || pathname === "/privacy" || pathname === "/terms" || pathname === "/services" || pathname === "/blog" || pathname === "/contact") ?
                                <Image src={Logo} alt="" width={150} height={20} />
                                :
                                <Image src={LogoDark} alt="" width={150} height={20} />}
                        </div>
                        <nav className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center justify-center gap-6 xl:gap-8 text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal">
                                {mainNav.map((item, index) => (
                                    <li key={index} className={`relative group py-2  cursor-pointer hover:text-success-500 ${(pathname === "/" || pathname === "/about" || pathname === "/case-study" || pathname === "/faq" || pathname === "/privacy" || pathname === "/terms" || pathname === "/case-study" || pathname === "/services" || pathname === "/blog" || pathname === "/contact") ? "text-neutral-300" : "text-neutral-700"}`}>
                                        <span onClick={() => router.push(`/${item?.link}`)} className="flex items-center justify-center group gap-1">

                                            <span>{item?.nav_item}</span>
                                            {item?.sub_item && (
                                                <span className="translate-y-[1.5px] group-hover:rotate-180 duration-500">
                                                    <RiArrowDownSLine />
                                                </span>
                                            )}
                                        </span>
                                        {item?.sub_item && (
                                            <ul className="absolute left-0 invisible mt-2 p-5 bg-neutral-100 rounded-xl w-[180px] shadow-lg group-hover:visible flex flex-col gap-3 opacity-0 translate-y-10 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 border-b-[4px] border-success-500 cursor-default">
                                                <div className="w-4 h-4 bg-neutral-100 rotate-45 absolute left-4 -top-1.5"></div>
                                                {item?.sub_item?.map((subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="group relative"
                                                    >
                                                        <span
                                                            className="group flex items-center justify-between"
                                                        >
                                                            <span
                                                                onClick={() => router.push(`/${subItem?.link}`)}
                                                                className="group relative cursor-pointer text-primary-800 hover:text-success-500"
                                                            >
                                                                {subItem?.nav_item}
                                                            </span>
                                                            {subItem?.nested_sub_item && (
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
                            <button className={`text-neutral-300 hover:text-success-500 cursor-pointer ${(pathname === "/" || pathname === "/about" || pathname === "/case-study" || pathname === "/faq" || pathname === "/privacy" || pathname === "/terms" || pathname === "/case-study" || pathname === "/services" || pathname === "/blog" || pathname === "/contact") ? "text-neutral-300" : "text-neutral-700"}`}>
                                <RiSearchLine size={20} />
                            </button>
                        </nav>
                        <div className="flex lg:hidden items-center justify-center gap-2">
                            <button className={`w-9 h-9 text-neutral-300 flex items-center justify-center cursor-pointer ${(pathname === "/" || pathname === "/about" || pathname === "/case-study" || pathname === "/faq" || pathname === "/privacy" || pathname === "/terms" || pathname === "/case-study" || pathname === "/services" || pathname === "/blog" || pathname === "/contact") ? "text-neutral-300" : "text-neutral-700"}`}>
                                <RiSearchLine size={25} />
                            </button>
                            <div
                                onClick={navHandler}
                                className={`w-9 h-9 text-neutral-300 flex items-center justify-center cursor-pointer ${(pathname === "/" || pathname === "/about" || pathname === "/case-study" || pathname === "/faq" || pathname === "/privacy" || pathname === "/terms" || pathname === "/case-study" || pathname === "/services" || pathname === "/blog" || pathname === "/contact") ? "text-neutral-300" : "text-neutral-700"}`}
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
                <div className="w-[65%] md:w-[50%] bg-neutral-100 px-2 md:px-5 py-5 overflow-y-scroll">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <Image src={LogoDark} alt="" width={150} height={20} />
                        </Link>
                    </div>
                    <nav className="my-12">
                        <ul className="flex flex-col gap-2 text-lg font-medium">
                            {mainNav.map((item, index) => (
                                <li key={index} className="py-1 px-2 bg-neutral-200 rounded-lg text-primary-800">
                                    <span
                                        className="flex items-center justify-between group"
                                    >
                                        <span onClick={() => {
                                            router.push(`/${item?.link}`)
                                            setActive(false)
                                        }} className="cursor-pointer">{item?.nav_item}</span>
                                        {item?.sub_item && (
                                            <span className="translate-y-[1px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                            </span>
                                        )}
                                    </span>
                                    {item?.sub_item && (
                                        <ul className="mt-2.5 w-full flex-col pl-5">
                                            {item?.sub_item.map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className={`my-2.5 relative pl-5`}
                                                >
                                                    <span onClick={() => {
                                                        router.push(`/${subItem?.link}`)
                                                        setActive(false)
                                                    }}
                                                        className="group relative hover:text-primary-800 cursor-pointer"
                                                    >
                                                        {subItem?.nav_item}
                                                    </span>
                                                    <span className="w-2 h-2 rounded-full absolute top-0 bottom-0 left-0 my-auto bg-success-400"></span>
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
