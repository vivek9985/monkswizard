import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Data from "@/db/data.json";
import FeaturedProjectCard from "@/Components/Card/FeaturedProjectCard";

export default function FeaturedProject() {
    return (
        <section className="bg-primary-600 py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="w-11/12 sm:w-8/12 md:w-8/12 xl:max-w-[754px] mx-auto">
                    <Badge className="mx-auto">Featured Project</Badge>
                    <Heading variant="h2" className="text-white text-center my-4">
                        Power Your Brand with Our Digital Solutions
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[602px] mx-auto text-center text-neutral-200">
                        Our strategic approach, fueled by creativity and innovation, ensures that your brand stands out in today&apos;s competitive market. With a focus on results.
                    </Paragraph>
                </div>
                <div className="max-w-[300px] sm:max-w-full sm:w-6/12 md:w-10/12 lg:w-8/12 xl:w-full mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-4 xl:gap-6 mt-10 md:mt-[60px]">
                    {
                        Data?.featuredProjectData?.slice(0, 4).map((item, i) => (
                            <FeaturedProjectCard
                                key={i}
                                thumbnail={item?.thumbnail}
                                title={item?.title}
                                description={item?.description}
                                link={item?.link}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}
