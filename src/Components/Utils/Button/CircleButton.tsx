import Image from "next/image";
import PlayButtonTextImage from "@/assets/images/play-button-text.svg";
import PlayIcon from "@/assets/images/icons/play-icon.svg";


interface CircleButtonProps {
    className?: string;
}

export default function CircleButton({ className }: CircleButtonProps) {
    return (
        <div className={`w-[130px] h-[130px] rounded-full bg-[#04010715] backdrop-blur-[15px] flex items-center justify-center border-[1px] border-[#ffffff50] cursor-pointer select-none ${className}`}>
            <div className="relative w-full h-full rounded-full flex items-center justify-center">
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full border-[1px] border-[#ffffff50]">
                    <Image src={PlayIcon} alt="" width={22} height={22} />
                </div>
                <Image className="absolute left-0 right-0 top-0 bottom-0 m-auto [animation:spin_10s_linear_infinite]" src={PlayButtonTextImage} alt="" width={110} height={110} />
            </div>
        </div>
    );
}
