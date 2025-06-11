"use client";
import { useState } from "react";
import GreenButton from "@/Components/Utils/Button/GreenButton";
import Container from "@/Components/Utils/Container/Container";
import Data from "@/db/data.json";
import Heading from "@/Components/Utils/Heading/Heading";
import { RiSearch2Line } from "@remixicon/react";
import Image from "next/image";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";

const buttonOptions = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Design", value: "design" },
    { label: "Development", value: "development" },
    { label: "Art", value: "art" },
];


export default function CaseStudy() {
    const [activeButton, setActiveButton] = useState("all");
    const [activeCaseStudy, setActiveCaseStudy] = useState(Data?.caseStudiesData);

    return (
        <section className="py-20 lg:py-24 xl:py-[110px]">
            <Container>
                <div className="flex items-center flex-col-reverse gap-y-5 lg:flex-row lg:justify-between">
                    <Heading variant="h1" className="text-black">Showcase</Heading>
                    <form className="w-[275px] flex justify-between border-[2px] border-neutral-100 rounded-[34px] p-1 pl-4">
                        <input type="serch" placeholder="Search here" required className="w-[calc(100%-45px)] focus:outline-none text-neutral-700 text-lg leading-[150%] font-[family-name:var(--font-outfit)] pr-1" />
                        <button type="submit" className="w-11 h-11 bg-success-500 flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                            <RiSearch2Line size={24} className="text-white" />
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-1 my-12">
                    {buttonOptions?.map(({ label, value }) => (
                        <div
                            onClick={() => {
                                setActiveButton(value);
                                setActiveCaseStudy(label === "All" ? Data?.caseStudiesData : Data?.caseStudiesData?.filter((caseStudy) => caseStudy?.category === label));
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
                <div className="grid md:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
                    {
                        activeCaseStudy?.map((item, i) => (
                            <div key={i}>
                                <div className="w-[554px] h-[398px] rounded-3xl overflow-hidden">
                                    <Image className="w-full h-full object-cover" src={item?.image} width={554} height={398} alt="" />
                                </div>
                                <div className="mt-5">
                                    <Paragraph variant="para-11" className="text-success-500">{item?.category}</Paragraph>
                                    <Heading variant="h5" className="text-neutral-900 mt-1">{item?.title}</Heading>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}
