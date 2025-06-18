import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Data from "@/db/data.json";
import OurBenefitCard from "@/Components/Card/OurBenefitCard";

export default function OurBenefits() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="flex flex-col xl:flex-row items-center xl:items-end xl:justify-between w-10/12 sm:w-8/12 md:w-8/12 xl:w-full mx-auto">
                    <div className="max-w-[546px]">
                        <Badge variant="light" className="mx-auto xl:ml-0">Our Benefits</Badge>
                        <Heading variant="h2" className="text-primary-900 text-center xl:text-left mt-4">
                            Enjoy Our Agency Benefits
                        </Heading>
                    </div>
                    <Paragraph variant="para-11" className="max-w-[546px] mx-auto xl:mr-0 text-center xl:text-left text-neutral-700 mt-3 xl:mt-0">
                        We are creative agency that specializes in web design, seo, and Social media management. Our experienced team works closely with clients to deliver customized solutions.
                    </Paragraph>
                </div>
                <div className="max-w-[400px] sm:max-w-full sm:w-7/12 md:w-10/12 lg:w-8/12 xl:w-full mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-5 xl:gap-6 mt-10 md:mt-[60px] relative">
                    {
                        Data?.ourBenifitsData?.map((item, i) => (
                            <OurBenefitCard
                                key={i}
                                icon={item?.image}
                                title={item?.name}
                                description={item?.position}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}
