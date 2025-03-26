import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Data from "@/db/data.json";
import TeamCard from "@/Components/Card/TeamCard";
import HalfCircle from "@/assets/images/half-circle.svg";
import Spring from "@/assets/images/spring.svg";
import Image from "next/image";

export default function Team() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:pt-[120px] xl:pb-[180px]">
            <Container>
                <div className="w-10/12 sm:w-8/12 md:w-8/12 xl:max-w-[754px] mx-auto">
                    <Badge variant="light" className="mx-auto">Our Team</Badge>
                    <Heading variant="h2" className="text-primary-900 text-center my-4">
                        Our Special Team Member
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[602px] mx-auto text-center text-neutral-700">
                        We offer a comprehensive suite of digital services tailored to meet the diverse needs of our clients. From web design and development to digital marketing and branding
                    </Paragraph>
                </div>
                <div className="w-7/12 sm:w-6/12 md:w-9/12 lg:w-8/12 xl:w-full mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-5 xl:gap-6 mt-10 md:mt-[60px] relative">
                    {
                        Data?.teamData?.map((item, i) => (
                            <TeamCard
                                key={i}
                                image={item?.image}
                                name={item?.name}
                                position={item?.position}
                                style={item?.style}
                                xLink={item?.social_links?.x}
                                behanceLink={item?.social_links?.behance}
                                linkedinLink={item?.social_links?.linkedin}
                                facebookLink={item?.social_links?.facebook}
                                className="xl:min-h-[436px]"
                            />
                        ))
                    }
                    <Image className="w-[40px] md:w-[51px] absolute left-[-52px] hidden xl:block xl:bottom-[-20%]" src={HalfCircle} alt="" width={51} height={51} />
                    <Image className="w-12 md:w-[65px] absolute right-[-35px] top-[-56px]" src={Spring} alt="" width={65} height={56} />
                </div>

            </Container>
        </section>
    );
}
