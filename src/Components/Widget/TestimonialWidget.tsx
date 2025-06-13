import Image from "next/image";
import Paragraph from "../Utils/Paragraph/Paragraph";
import Quote from "@/assets/images/quote.svg";
import Reviewer from "@/assets/images/reviewer-one.png";


export default function TestimonialWidget() {
    return (
        <div className="flex flex-col items-center xl:items-start gap-6 xl:gap-[52px]">
            <Image className="w-14 xl:w-[73px]" src={Quote} alt="" width={73} height={50} />
            <Paragraph variant="para-2" className="max-w-[546px] mx-auto xl:ml-0 text-center xl:text-left text-white mt-3 xl:mt-0">
                Working with has been an absolute game-changer for our business. Their team &apos;s expertise, creativity, and dedication are truly exceptional. From the moment we engaged with them, they took the time to understand our unique needs.
            </Paragraph>
            <div className="w-full flex items-center justify-center xl:justify-start gap-[19px] pt-5 border-t-[1px] border-neutral-700">
                <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                    <Image className="w-full h-full object-cover" src={Reviewer} alt="" width={52} height={52} />
                </div>
                <div>
                    <Paragraph variant="para-4" className="text-white">
                        Adnan Chowdhury
                    </Paragraph>
                    <Paragraph variant="para-11" className="text-success-500">
                        Co-Founder Colabrio
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}
