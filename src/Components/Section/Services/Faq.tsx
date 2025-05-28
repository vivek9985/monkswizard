import { Accordion } from "@szhsin/react-accordion";
import CustomAccordion from "@/Components/Utils/CustomAccordion";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import Heading from "@/Components/Utils/Heading/Heading";
import Data from "@/db/data.json";

export default function Faq() {
    const filteredData = Data?.accordion?.filter((item) => item.type === "sales&billings");

    return (
        <div className="max-w-[815px] mx-auto my-[110px]">
            <div className="text-center">
                <Badge variant="light" className="mx-auto">FAQ</Badge>
                <Heading variant="h2" className="max-w-[650px] mx-auto text-black mt-2 mb-4">
                    Questions Answered, Clarity Delivered
                </Heading>
                <Paragraph variant="para-7" className="text-neutral-700">
                    Find quick solutions and detailed insights in our comprehensive Frequently Asked Questions
                </Paragraph>
            </div>

            <Accordion transition transitionTimeout={300} className="flex flex-col gap-6 mt-12">
                {filteredData?.map(({ title, description, initialEntered }, index) => (
                    <CustomAccordion key={index} header={title} initialEntered={initialEntered}>
                        {description}
                    </CustomAccordion>
                ))}
            </Accordion>
        </div>
    );
}
