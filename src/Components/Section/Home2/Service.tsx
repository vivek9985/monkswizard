import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Data from "@/db/data.json";
import ServiceCardTwo from "@/Components/Card/ServiceCardTwo";

export default function Service() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:pt-[120px] xl:pb-[180px]">
            <Container>
                <div className="w-10/12 sm:w-8/12 md:w-8/12 xl:max-w-[674px] mx-auto">
                    <Badge variant="light" className="mx-auto rounded-lg">Our Services</Badge>
                    <Heading variant="h2" className="text-primary-900 text-center my-4">
                        Discover Our Capabilities
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[674px] mx-auto text-center text-neutral-700">
                        The Services section of a digital agency website should provide clear and comprehensive information about the agency&apos;s offerings.
                    </Paragraph>
                </div>
                <div className="w-7/12 sm:w-6/12 md:w-9/12 lg:w-8/12 xl:w-full mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-5 xl:gap-6 mt-10 md:mt-[60px]">
                    {
                        Data?.services?.map((item, i) => (
                            <ServiceCardTwo key={i} image={item?.image} title={item?.title} description={item?.description} link={item?.link} />
                        ))
                    }
                </div>

            </Container>
        </section>
    );
}
