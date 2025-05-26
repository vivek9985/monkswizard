import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import { RiArrowRightUpLine } from "@remixicon/react";


interface TLinkButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}

export default function LinkButton({ variant, children, className }: TLinkButtonProps) {
    return (
        <button className={`flex items-center gap-1 w-fit cursor-pointer group ${variant === "secondary" ? "text-secondary-500" : "text-neutral-700"} ${className}`}>
            <Paragraph variant="para-11" className="duration-300 group-hover:text-success-500">{children}</Paragraph>
            <div className={`w-4 h-[17px] border-b-[1.5px] -translate-y-0.5 duration-300  ${variant === "secondary" ? "border-secondary-500" : "border-neutral-700"} group-hover:border-success-500`}>
                <RiArrowRightUpLine size={18} className="duration-300 group-hover:text-success-500" />
            </div>
        </button>
    );
}