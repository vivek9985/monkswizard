import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Image from "next/image";

interface TServiceCard {
    icon: string;
    title: string;
    paragraph: string;
    className?: string;
    underClassName?: string;
}

export default function ServiceCard({ icon, title, paragraph, className, underClassName }: TServiceCard) {
    return (
        <div className={`bg-neutral-200 border-[1px] border-neutral-200 group ${className}`}>
            <div className={`bg-white group-hover:rounded-tl-2xl group-hover:rounded-tr-2xl group-hover:bg-success-500 py-12 px-8 text-center duration-300 hover:-translate-y-2.5 hover:translate-x-2.5 ${underClassName}`}>
                <Image className="mx-auto select-none" src={icon} alt="Icon" width={56} height={56} />
                <Heading variant="h4" className="mt-10 mb-2.5 text-primary-900 group-hover:text-white">{title}</Heading>
                <Paragraph variant="para-7" className="text-neutral-600 group-hover:text-neutral-100">{paragraph}</Paragraph>
            </div>
        </div>
    )
}