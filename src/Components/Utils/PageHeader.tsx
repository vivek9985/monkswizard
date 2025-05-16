import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import GradientBg from "@/assets/images/page-header-bg.svg";
import HalfCircle from "@/assets/images/half-circle.png";

interface TPageHeader {
    subtitle?: string;
    title: string;
    paragraph: string;
    className?: string;
}

export default function PageHeader({ subtitle, title, paragraph, className = "" }: TPageHeader) {
    return (
        <section className={`max-h-[425px] bg-primary-600 pt-[118px] pb-[117px] bg-no-repeat bg-cover bg-top ${className}`} style={{ backgroundImage: `url(${GradientBg.src})` }}>
            <Container className="relative">
                <div className="flex flex-col items-center gap-y-[60px]">
                    <div className="w-10/12 md:w-9/12 xl:w-[1015px]">
                    {subtitle &&
                        <Badge className="mx-auto">{subtitle}</Badge>
                    }
                        <Heading variant="h1" className="text-white text-center mt-4 mb-5">
                            {title}
                        </Heading>
                        <Paragraph variant="para-11" className="max-w-[793px] mx-auto text-center text-neutral-300">
                            {paragraph}
                        </Paragraph>
                        <Image className="w-[50px] absolute right-0 bottom-[10%] [animation:upDown_2s_ease-in-out_infinite]" src={HalfCircle} alt="" width={50} height={50} />
                    </div>
                </div>
            </Container>
        </section>
    )
}