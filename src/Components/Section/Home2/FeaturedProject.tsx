"use client"
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import ProjectOne from "@/assets/images/home-2-project-1.png";
import Marquee from "react-fast-marquee";


export default function FeaturedProject() {
    return (
        <section className="bg-success-50 py-15 md:py-20 lg:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row items-center justify-between">
                    <div className="w-11/12 md:w-8/12 lg:w-8/12 xl:max-w-[754px]">
                        <Badge variant="light" className="rounded-lg mx-auto xl:ml-0">Featured Project</Badge>
                        <Heading variant="h2" className="mt-3 text-center xl:text-left">
                            Let&apos;s get you started on the road to digital growth
                        </Heading>
                    </div>
                    <div className="max-w-[386px] mx-auto xl:ml-0 text-center xl:text-left">
                        <Paragraph>
                            Our strategic approach, fueled by creativity & ensures innovation that your brand stands out in competitive market. With a focus on results.
                        </Paragraph>
                    </div>
                </div>
            </Container>
            <div className="mt-12 xl:mt-[60px] overflow-x-hidden">
                <Marquee speed={100}>
                    {[1, 2, 3, 4, 5, 6 ,7].map((i) => (
                        <div key={i} className="w-[300] h-[224px] rounded-[20px] group relative overflow-hidden mr-6">
                            <Image className="w-full h-full object-cover duration-300 group-hover:scale-105" src={ProjectOne} alt="" width={320} height={224} />
                            <div className="w-full h-full flex item-center justify-center py-9 px-6 absolute left-0 top-0">
                                <div className="w-full h-full py-[17px] px-5 border-[1px] border-[#E7E7E775] bg-[#AFEEBA16] backdrop-blur-2xl rounded-[10px]">
                                    <Heading variant="h6" className="text-white max-w-[250px]">Support and Maintenance</Heading>
                                    <Paragraph variant="para-13" className="mt-1 max-w-[185px] text-white">Your brand stands out in competitive market. With a focus on results.</Paragraph>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    );
}
