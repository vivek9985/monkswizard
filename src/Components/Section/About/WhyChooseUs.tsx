import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import ContentImage from "@/assets/images/whychooseus.webp";
import ThunderIcon from "@/assets/images/icons/thunder-green.svg"

const whyChooseData = [
    {
        "title": "Discovery & Strategy",
        "description": "We begin by diving deep into your business goals, audience, and market.",
    },
    {
        "title": "Creative Ideation & Design",
        "description": "Our creative team transforms your vision into reality through innovative design concepts.",
    },
    {
        "title": "Development & Implementation",
        "description": "Once the design is approved, our skilled developers take over to build a robust, scalable product.",
    }
]

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    <div className="w-[80%] sm:w-[400px] md:w-[450px] xl:w-[510px] h-[380px] sm:h-[400px] md:h-[460px] xl:h-[522px] rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden flex items-center justify-center bg-[linear-gradient(118deg,#EEC800_-9%,#B1F8B1_61.4475%,#B1F8B1_100%)] pl-2 pb-2">
                        <Image className="w-full h-full object-cover" src={ContentImage} alt="" width={410} height={418} />
                    </div>
                    <div className="w-full md:w-9/12 xl:max-w-[500px]">
                        <Badge variant="light" className="mx-auto xl:ml-0">Why Choose Us</Badge>
                        <Heading variant="h2" className="text-primary-900 text-center xl:text-left mt-2">
                            How We Work?
                        </Heading>
                        <div className="max-w-[300px] sm:max-w-8/12 xl:max-w-full mx-auto mt-8 flex flex-col gap-6">
                            {
                                whyChooseData?.map((item, i) => (
                                    <div key={i} className="flex flex-col xl:flex-row items-center xl:items-start gap-3">
                                        <Image className="w-5 h-5 object-contain mt-2" src={ThunderIcon} alt="" width={20} height={20} />
                                        <div>
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
                </div>
            </Container>
        </section>
    );
}
