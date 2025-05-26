import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import ProjectOne from "@/assets/images/home-2-project-1.png";
import ProjectTwo from "@/assets/images/home-2-project-2.png";
import ProjectThree from "@/assets/images/home-2-project-3.png";
import { RiArrowRightUpLongLine } from "@remixicon/react";

export default function FeaturedProject() {
    return (
        <section className="bg-success-50 py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="max-w-[754px]">
                        <Badge variant="light" className="rounded-lg">Featured Project</Badge>
                        <Heading variant="h2" className="mt-3">
                           Let&apos;s get you started on the road to digital growth
                        </Heading>
                    </div>
                    <div className="max-w-[386px]">
                        <Paragraph>
                           Our strategic approach, fueled by creativity & ensures innovation that your brand stands out in competitive market. With a focus on results.
                        </Paragraph>
                    </div>
                </div>
            </Container>
            <div className="mt-[60px] flex p-10">
                    <div className="w-[320] h-[224px] rounded-[20px] group relative overflow-hidden">
                        <Image className="w-full h-full duration-300 group-hover:scale-105" src={ProjectOne} alt="" width={320} height={224} />
                        <div className="w-full h-full flex item-center justify-center py-9 px-6 absolute left-0 top-0">
                            <div className="w-full h-full py-[17px] px-5 border-[1px] border-[#E7E7E775] bg-[#AFEEBA16] backdrop-blur-2xl rounded-[10px]">
                                <Heading variant="h6" className="text-white max-w-[250px]">Support and Maintenance</Heading>
                                <Paragraph variant="para-13" className="mt-1 max-w-[185px] text-white">Your brand stands out in competitive market. With a focus on results.</Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
