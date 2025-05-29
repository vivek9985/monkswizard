"use client";
import { useState } from "react";
import GreenButton from "@/Components/Utils/Button/GreenButton";
import Container from "@/Components/Utils/Container/Container";
import Data from "@/db/data.json";
import BlogWidget from "@/Components/Widget/BlogWidget";
import Heading from "@/Components/Utils/Heading/Heading";
import { RiSearch2Line } from "@remixicon/react";

const buttonOptions = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Design", value: "design" },
    { label: "Development", value: "development" },
    { label: "Marketing", value: "marketing" },
    { label: "Photography", value: "photography" },
];


export default function Blog() {
    const [activeButton, setActiveButton] = useState("all");
    const [activeBlog, setActiveBlog] = useState(Data?.blog);

    return (
        <section className="my-[110px]">
            <Container>
                <div className="flex items-center justify-between">
                    <Heading variant="h1" className="text-black">Blog/Articles</Heading>
                    <form className="w-[275px] flex justify-between border-[2px] border-neutral-100 rounded-[34px] p-1 pl-4">
                        <input type="serch" placeholder="Search here" required className="w-[calc(100%-45px)] focus:outline-none text-neutral-700 text-lg leading-[150%] font-[family-name:var(--font-outfit)] pr-1" />
                        <button type="submit" className="w-11 h-11 bg-success-500 flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                            <RiSearch2Line size={24} className="text-white" />
                        </button>
                    </form>
                </div>
                <div className="flex items-center gap-1 my-12">
                    {buttonOptions?.map(({ label, value }) => (
                        <div
                            onClick={() => {
                                setActiveButton(value);
                                setActiveBlog(label === "All" ? Data?.blog : Data?.blog?.filter((blog) => blog?.category === label));
                            }}
                            key={value}
                        >
                            <GreenButton
                                className={`${activeButton === value ? "bg-success-500 text-white" : ""
                                    }`}
                            >
                                {label}
                            </GreenButton>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {
                        activeBlog?.map((item, i) => (
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
        </section>
    );
}
