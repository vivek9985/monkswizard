import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Image from "next/image";


interface OurBenefitCardProps {
    icon: string;
    title: string;
    description: string;
    className?: string;
}


export default function OurBenefitCard({ icon, title, description, className }: OurBenefitCardProps) {
    return (
        <div className={`rounded-[20px] rounded-br-none bg-neutral-50 hover:bg-[linear-gradient(118deg,#eec800_-12%,#b1f8b1_62%,#229954_64%)] pt-[2px] pl-[2px] group overflow-hidden ${className}`}>
            <div className="w-full h-full rounded-[20px] rounded-br-none bg-neutral-50 hover:bg-primary-500 border-[1px] border-[#204B4E06] group-hover:border-transparent p-9 md:p-7 lg:p-9 duration-300">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-success-500 overflow-hidden">
                    <Image className="object-contain" src={icon} alt="" width={24} height={24} />
                </div>
                <Heading variant="h6" className="text-neutral-900 group-hover:text-white mt-8">
                    {title}
                </Heading>
                <Paragraph variant="para-11" className="text-neutral-700 group-hover:text-neutral-200 mt-3">
                    {description}
                </Paragraph>
            </div>
        </div>
    );
}
