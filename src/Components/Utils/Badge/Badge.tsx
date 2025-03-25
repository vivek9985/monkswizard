import React from "react";
import ThunderGreenIcon from "@/assets/images/icons/thunder-green.svg";
import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
    return (
        <div className={`w-fit flex items-center justify-center gap-1 bg-primary-500 rounded-full py-1.5 pl-3 pr-4 ${className}`}>
            <Image src={ThunderGreenIcon} alt="" width={10} height={12} />
            <Paragraph variant="para-12" className="text-neutral-50">
                {children}
            </Paragraph>
        </div>
    );
}
