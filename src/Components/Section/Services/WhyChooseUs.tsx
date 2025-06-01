import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import ContentImage from "@/assets/images/whychooseus.webp";

const whyChooseData = [
    {
        "title": "Discussion",
        "description": "The rise of digital technology has revolutionized the way businesses operate.",
    },
    {
        "title": "Design",
        "description": "A well-designed website not only looks visually bt also enhances usability, overall user experience.",
    },
    {
        "title": "Production",
        "description": "The world of digital production, meticulous planning, expertise are paramount to delivering high-quality.",
    }
]

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    <div className="w-full md:w-9/12 xl:max-w-[508px]">
                        <Badge variant="light" className="mx-auto xl:ml-0">Why Choose Us</Badge>
                        <Heading variant="h2" className="text-primary-900 text-center xl:text-left mt-2">
                            Crafting Dynamic Online Experiences
                        </Heading>
                        <div className="max-w-[300px] sm:max-w-8/12 xl:max-w-full mx-auto mt-8 flex flex-col gap-6">
                            {
                                whyChooseData?.map((item, i) => (
                                    <div key={i} className="flex flex-col xl:flex-row items-center xl:items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-success-500 flex items-center justify-center"><Paragraph variant="para-3" className="text-white">{i + 1}</Paragraph></div>
                                        <div className="w-[calc(100%_-_50px)]">
                                            <Paragraph variant="para-3" className="text-center xl:text-left text-primary-900">
                                                {item?.title}
                                            </Paragraph>
                                            <Paragraph variant="para-7" className="mt-2 text-center xl:text-left text-neutral-600">
                                                {item?.description}
                                            </Paragraph>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-[80%] sm:w-[400px] md:w-[450px] xl:w-[510px] h-[380px] sm:h-[400px] md:h-[460px] xl:h-[510px] rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden flex items-center justify-center bg-[linear-gradient(118deg,#EEC800_-9%,#B1F8B1_61.4475%,#B1F8B1_100%)] pl-2 pb-2">
                        <Image className="w-full h-full object-cover" src={ContentImage} alt="" width={410} height={418} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
