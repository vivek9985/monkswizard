"use client";
import { Accordion } from "@szhsin/react-accordion";
import CustomAccordion from "@/Components/Utils/CustomAccordion";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import { useState } from "react";
import Data from "@/db/data.json";

const buttonOptions = [
    { label: "Sales & Billings", value: "sales&billings" },
    { label: "Project Process", value: "projectprocess" },
    { label: "Refund Policy", value: "refundpolicy" },
];

export default function Faq() {
    const [activeButton, setActiveButton] = useState("sales&billings");

    const activeAccordion = Data?.accordion?.filter(
        (item) => item.type === activeButton
    );

    return (
        <div className="max-w-[815px] mx-auto my-[110px]">
            <div className="flex items-center justify-center gap-1">
                {buttonOptions.map(({ label, value }) => (
                    <button
                        key={value}
                        onClick={() => setActiveButton(value)}
                        className={`bg-neutral-100 hover:bg-success-500 text-neutral-500 hover:text-white px-7 py-2 rounded-3xl cursor-pointer duration-300 ${activeButton === value ? "bg-success-500 text-white" : ""
                            }`}
                    >
                        <Paragraph variant="para-11">{label}</Paragraph>
                    </button>
                ))}
            </div>

            <Accordion
                transition
                transitionTimeout={300}
                className="flex flex-col gap-5 mt-12"
            >
                {activeAccordion?.map((item, i) => (
                    <CustomAccordion
                        key={i}
                        header={item?.title}
                        initialEntered={item?.initialEntered}
                    >
                        {item?.description}
                    </CustomAccordion>
                ))}
            </Accordion>
        </div>
    );
}
