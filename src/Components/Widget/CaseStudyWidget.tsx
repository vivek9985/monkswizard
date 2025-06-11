/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Heading from "../Utils/Heading/Heading";
import { RiArrowRightUpLongLine } from "@remixicon/react";

interface CaseStudyWidgetProps {
    image: string;
    title: string;
    category: string;
    description: string;
    link: string;
    className?: string;
}


export default function CaseStudyWidget({ image, title, category, description, link, className }: CaseStudyWidgetProps) {
    return (
        <Link href={link} className={`w-full py-8 md:py-6 lg:py-10 border-b-[1px] border-primary-500 md:hover:bg-primary-700 duration-300 group ${className}`}>
            <div className="px-5 lg:px-10 xl:px-0 max-w-[1140px] mx-auto flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center justify-between text-center md:text-left relative">
                <div className="w-[250px] lg:w-[330px] xl:w-[430px]">
                    <Paragraph variant="para-11" className=" text-success-500">
                        {category}
                    </Paragraph>
                    <Heading variant="h5" className="text-neutral-50 mt-1">
                        {title}
                    </Heading>
                </div>
                <Paragraph variant="para-11" className="w-10/12 md:w-[400px] lg:w-[544px] text-neutral-300">
                    {description}
                </Paragraph>
                <div className="w-12 h-12 rounded-full border-[1px] border-neutral-500 flex items-center justify-center group-hover:border-secondary-500 group-hover:bg-secondary-500 text-white group-hover:text-neutral-700 duration-300">
                    <RiArrowRightUpLongLine size={20} />
                </div>
                <div className="md:absolute left-[22%] top-0 bottom-0 my-auto opacity-100 md:opacity-0  group-hover:opacity-100 scale-100 md:scale-50 lg:scale-50 group-hover:scale-100 md:group-hover:scale-75 xl:group-hover:scale-100 duration-300 md:rotate-[-10deg] w-[211px] h-[200px] md:h-[274px] pb-1 pl-1 rounded-[20px] bg-[linear-gradient(118deg,#d1b528_-9%,#229954_61.4475%,#b1f8b1_100%)] overflow-hidden">
                    <img className="w-full h-full rounded-[20px] object-cover object-center" src={image} alt="" />
                </div>
            </div>
        </Link>
    )
}