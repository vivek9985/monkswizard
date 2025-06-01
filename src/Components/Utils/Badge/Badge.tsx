import ThunderGreenIcon from "@/assets/images/icons/thunder-green.svg";
import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}

export default function Badge({ children, className, variant }: BadgeProps) {
    return (
        <div className={`w-fit flex items-center justify-center gap-1 rounded-full py-1.5 pl-3 pr-4 ${variant === "light" ? "bg-neutral-50 border-[1px] border-neutral-200" : "bg-primary-500"} ${className}`}>
            <Image className="select-none" src={ThunderGreenIcon} alt="" width={10} height={12} />
            <Paragraph variant="para-12" className={`${variant === "light" ? "text-primary-700" : "text-neutral-50"}`}>
                {children}
            </Paragraph>
        </div>
    );
}
