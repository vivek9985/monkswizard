import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";
import ArroTopRightIcon from "@/assets/images/icons/arrow-top-right.svg";

interface FeaturedProjectCardProps {
    thumbnail: string;
    title: string;
    description: string;
    link: string;
}

export default function FeaturedProjectCard({ thumbnail, title, description, link }: FeaturedProjectCardProps) {
    return (
        <div className="rounded-tl-[60px] rounded-tr-[20px] bg-[linear-gradient(118deg,#d1b528_-9%,#229954_61.4475%,#b1f8b1_100%)] p-0.5 group xl:relative overflow-hidden flex flex-col">
            <div className="rounded-tl-[60px] rounded-tr-[20px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${thumbnail})` }}>
                <div className="p-6 pt-[180px] xl:pt-[332px] bg-[linear-gradient(to_top,black_0%,transparent_40%)]">
                    <Heading variant="h6" className="text-white">
                        {title}
                    </Heading>
                </div>
            </div>
            <div className="xl:absolute w-full h-full bg-white xl:bg-transparent flex items-center justify-center left-0 top-0 xl:p-[22px]">
                <div className="bg-white xl:bg-success-500 py-4 xl:py-10 px-6 xl:rounded-tl-[50px] xl:translate-y-10 group-hover:translate-y-0 xl:opacity-0 group-hover:opacity-100 duration-500">
                    <Heading variant="h6" className="text-primary-600 xl:text-white">
                        {title}
                    </Heading>
                    <Paragraph variant="para-11" className="text-primary-600 xl:text-success-50 mt-3 xl:mt-[22px]">
                        {description}
                    </Paragraph>
                    <Link href={link} className="w-11 xl:w-[52px] h-11 xl:h-[52px] rounded-full hover:rotate-[30deg] bg-secondary-500 xl:bg-white xl:hover:bg-secondary-500 flex items-center justify-center duration-500 mt-4 xl:mt-14">
                        <Image className="w-8 h-8" src={ArroTopRightIcon} alt="" width={32} height={32} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
