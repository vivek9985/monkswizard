"use client";
import { useState } from "react";
import GreenButton from "@/Components/Utils/Button/GreenButton";
import Container from "@/Components/Utils/Container/Container";
import Data from "@/db/data.json";
import BlogWidget from "@/Components/Widget/BlogWidget";
import Heading from "@/Components/Utils/Heading/Heading";

const buttonOptions = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Design", value: "design" },
    { label: "Development", value: "development" },
    { label: "Marketing", value: "marketing" },
    { label: "Photography", value: "photography" },
];


export default function Blog () {
    const [activeButton, setActiveButton] = useState("sales&billings");

    // const activeAccordion = Data?.accordion?.filter(
    //     (item) => item.type === activeButton
    // );

    return (
        <section className="my-[110px]">
            <Container>
                <div className="flex items-center justify-between">
                    <Heading variant="h1" className="text-black">Blog/Articles</Heading>
                </div>
                <div className="flex items-center gap-1 my-12">
                    {buttonOptions.map(({ label, value }) => (
                        <div
                            onClick={() => setActiveButton(value)}
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
                        Data?.blog?.map((item, i) => (
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
