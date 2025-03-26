import Image from "next/image";
import VideoCover from "@/assets/images/video-cover.png";
import PlayIcon from "@/assets/images/icons/play-icon.svg";


export default function Video() {
    return (
        <section className="w-full h-[400px] md:h-[600px] xl:h-[800px] 2xl:h-screen flex items-center justify-center bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${VideoCover.src})` }}>
            <button className="w-[124px] h-[124px] scale-75 md:scale-90 xl:scale-100 rounded-full bg-[#ffffff38] backdrop-blur-[10px] border-[1px] border-[#ffffff28] flex items-center justify-center select-none cursor-pointer">
                <Image className="w-9" src={PlayIcon} alt="" width={52} height={52} />
            </button>
        </section>
    )
}