import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Image from "next/image";
import ArroTopRightIcon from "@/assets/images/icons/arrow-top-right.svg"


interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}

export default function PrimaryButton({ children, className, variant }: PrimaryButtonProps) {
    return (
        <div className={`w-fit flex items-center cursor-pointer select-none relative group ${className}`}>
            <div className={`border-neutral-300 group-hover:border-transparent group-hover:bg-transparent duration-300 py-[14px] pl-6 pr-8 rounded-[44px] ${variant === "green" ? "bg-success-600" : "bg-transparent border-[1px]"}`}>
                <Paragraph variant="para-10" className="text-neutral-50 group-hover:text-primary-500 duration-300 relative left-0 z-10">
                    {children}
                </Paragraph>
            </div>
            <div className="w-[52px] group-hover:w-[calc(100%_+_35px)] duration-500 h-[52px] border-[1px] border-secondary-500 rounded-full bg-secondary-500 flex items-center justify-center absolute right-[-35px]">
                <Image className="absolute left-1/2 translate-x-[-50%] group-hover:left-[calc(100%_-_40px)] group-hover:rotate-[30deg] group-hover:translate-y-[1px] duration-300 top-0 bottom-0 my-auto" src={ArroTopRightIcon} alt="" width={32} height={32} />
            </div>
        </div>
    );
}
