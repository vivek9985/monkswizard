import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { RiBehanceFill, RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "@remixicon/react";


interface TeamCardProps {
    image: string;
    name: string;
    position: string;
    style: string;
    xLink?: string;
    behanceLink?: string;
    linkedinLink?: string;
    facebookLink?: string;
    className?: string;
}


export default function TeamCard({ image, name, position, style, xLink, behanceLink, linkedinLink, facebookLink, className }: TeamCardProps) {
    return (
        <div className={`rounded-tl-[80px] xl:rounded-tl-full rounded-tr-[80px] xl:rounded-tr-full rounded-br-[80px] xl:rounded-br-full bg-[linear-gradient(118deg,#eec800_-12%,#b1f8b1_62%,#229954_64%)] pt-1 pl-1 group relative overflow-hidden flex flex-col ${style} ${className}`}>
            <div className="h-full rounded-tl-[80px] xl:rounded-tl-full rounded-tr-[80px] xl:rounded-tr-full bg-secondary-100 overflow-hidden">
                <Image className="w-full h-full object-contain object-bottom" src={image} alt="" width={250} height={400} />
            </div>
            <div className="absolute left-1 top-1 w-full h-full rounded-tl-[80px] xl:rounded-tl-full rounded-tr-[80px] xl:rounded-tr-full rounded-br-[80px] xl:rounded-br-full pb-[53px] bg-[linear-gradient(to_top,#05292CCC_0%,transparent_70%)] xl:bg-[#05292CCC] flex flex-col items-center justify-end xl:opacity-0 group-hover:opacity-100 duration-500">
                <Heading variant="h6" className="text-white">
                    {name}
                </Heading>
                <Paragraph variant="para-11" className="text-success-50">
                    {position}
                </Paragraph>
                <div className="flex items-center flex-wrap gap-2 mt-4">
                    {xLink && (
                        <Link href={xLink} className="w-8 h-8 rounded-full flex items-center justify-center duration-300 text-white bg-neutral-700 hover:bg-success-500">
                            <RiTwitterFill size={16} />
                        </Link>
                    )}
                    {behanceLink && (
                        <Link href={behanceLink} className="w-8 h-8 rounded-full flex items-center justify-center duration-300 text-white bg-neutral-700 hover:bg-success-500">
                            <RiBehanceFill size={16} />
                        </Link>
                    )}
                    {linkedinLink && (
                        <Link href={linkedinLink} className="w-8 h-8 rounded-full flex items-center justify-center duration-300 text-white bg-neutral-700 hover:bg-success-500">
                            <RiLinkedinFill size={16} />
                        </Link>
                    )}
                    {facebookLink && (
                        <Link href={facebookLink} className="w-8 h-8 rounded-full flex items-center justify-center duration-300 text-white bg-neutral-700 hover:bg-success-500">
                            <RiFacebookFill size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
