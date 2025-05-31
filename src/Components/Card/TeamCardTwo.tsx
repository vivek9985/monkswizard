import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Image from "next/image";
import { RiArrowRightUpLongLine } from "@remixicon/react";


interface TTeamCardTwoProps {
    image: string;
    name: string;
    position: string;
}


export default function TeamCardTwo({image, name, position}:TTeamCardTwoProps) {
    return (
        <div className="w-full h-[364px] bg-[#F9EFB9] flex justify-end rounded-[20px] group relative overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center absolute top-3.5 right-3.5 duration-300 group-hover:opacity-0">
                <RiArrowRightUpLongLine className="text-neutral-700" size={18} />
            </div>
            <Image className="w-full h-auto object-cover object-top" src={image} alt="" width={320} height={300} />
            <div className="w-full h-full flex items-end py-6 px-5 absolute left-0 -bottom-32 overflow-hidden duration-500 group-hover:bottom-0">
                <div className="w-full h-fit py-3 px-4 border-[1px] border-[#E7E7E760] bg-[#AFEEBA16] backdrop-blur-md rounded-[10px] relative">
                    <Heading variant="h6" className="text-white">{name}</Heading>
                    <Paragraph variant="para-13" className="mt-1 text-white">{position}</Paragraph>
                    <div className="w-6 h-6 rounded-full bg-secondary-500 flex items-center justify-center absolute bottom-3 right-3">
                        <RiArrowRightUpLongLine className="text-neutral-700" size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}
