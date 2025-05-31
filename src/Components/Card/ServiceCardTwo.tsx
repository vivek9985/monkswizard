import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Image from "next/image";
import LinkButton from "../Utils/Button/LinkButton";
import Link from "next/link";


interface TServiceCardTwoProps {
    image: string;
    title: string;
    description: string;
    link: string;
    className?: string;
}


export default function ServiceCardTwo({ image, title, description, link, className }: TServiceCardTwoProps) {
    return (
        <div className={`${className}`}>
            <div className="w-full h-[308px]">
                <Image className="w-full h-full object-cover rounded-[20px]" src={image} alt="" width={267} height={308} />
            </div>
            <div className="">
                <Heading variant="h6" className="mt-4 mb-1">
                    {title}
                </Heading>
                <Paragraph variant="para-11" className="text-neutral-700 mb-3">
                    {description}
                </Paragraph>
                <Link href={`${link}`} className="inline-flex">
                    <LinkButton>
                        View Detais
                    </LinkButton>
                </Link>
            </div>
        </div>
    );
}
