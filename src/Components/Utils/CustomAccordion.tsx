"use client"
import { AccordionItem as Item } from "@szhsin/react-accordion";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Image from "next/image";
import ArrowIcon from "../../assets/images/icons/arrow-top.svg";

interface TAccordionItemProps {
    header: string;
    initialEntered?: boolean;
    children: React.ReactNode;
}

const AccordionItem = ({
    header,
    initialEntered = false,
    children,
}: TAccordionItemProps) => {
    return (
        <Item
            initialEntered={initialEntered}
            header={({ state: { isEnter } }) => (
                <>
                    <Heading variant="h6" className="w-[90%]">
                        {header}
                    </Heading>
                    <div className={`w-8 h-8 rounded-full text-2xl bg-neutral-300 flex items-center justify-center md:text-3xl xl:text-4xl absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${isEnter && "rotate-180"}`}>
                        <Image src={ArrowIcon} alt="icon" width={12} height={13} />
                    </div>
                </>
            )}
            className={({ isEnter }) =>
                `rounded-[16px] bg-neutral-50 transition-all duration-300 ${isEnter ? "border-b-[8px] border-success-500" : "border-b-none border-transparent"
                }`
            }
            buttonProps={{
                className: ({ isEnter }) => `relative flex w-full p-6 text-left cursor-pointer text-black ${isEnter && 'text-black'}`
            }}
            contentProps={{ className: `text-neutral-600 pr-10 transition-all duration-300 ease-out` }}
            panelProps={{ className: "p-6 pt-0" }}
        >
            <Paragraph variant="para-11">
                {children}
            </Paragraph>
        </Item>
    );
};

export default function CustomAccordion({ header, children, initialEntered }: TAccordionItemProps) {
    return (
        <AccordionItem header={header} initialEntered={initialEntered}>
            {children}
        </AccordionItem>
    );
};
