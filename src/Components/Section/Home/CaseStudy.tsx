import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Badge from "@/Components/Utils/Badge/Badge";
import Data from "@/db/data.json";
import CaseStudyWidget from "@/Components/Widget/CaseStudyWidget";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Link from "next/link";

export default function CaseStudy() {
    return (
        <section className="bg-primary-600 py-20 md:py-[100px] xl:py-[120px]">
            <Container>
                <div className="w-10/12 sm:w-8/12 md:w-8/12 xl:max-w-[754px] mx-auto">
                    <Badge className="mx-auto">Case Studies</Badge>
                    <Heading variant="h2" className="text-white text-center mt-4">
                        From Challenge to Success Digital Journey
                    </Heading>
                </div>
            </Container>
            <div className="w-10/12 md:w-full lg:w-full mx-auto flex flex-col mt-10 md:mt-[60px] border-t-[1px] border-primary-500">
                {
                    Data?.caseStudiesData?.map((item, i) => (
                        <CaseStudyWidget key={i} image={item?.image} title={item?.title} description={item?.description} category={item?.category} link={item?.link} />
                    ))
                }
            </div>
            <Link href="/case-study" className="block w-fit mx-auto  mt-10 md:mt-12">
                <PrimaryButton>
                    View All Works
                </PrimaryButton>
            </Link>
        </section>
    );
}
