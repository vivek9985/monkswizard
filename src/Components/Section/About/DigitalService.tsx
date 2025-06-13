import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import BgImage from "@/assets/images/content-bg.png"
import Link from "next/link";

export default function DigitalService() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px] bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${BgImage.src})` }}>
            <Container>
                <div className="w-full md:w-9/12 xl:max-w-[582px] mx-auto xl:ml-0">
                    <Badge className="mx-auto xl:ml-0">Digital Services</Badge>
                    <Heading variant="h2" className="text-white text-center xl:text-left my-3">
                        Visit Our Online Marketing Consultation Page to Get Free Advice
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[488px] mx-auto xl:ml-0 text-center xl:text-left text-neutral-300 mb-8 lg:mb-12">
                        Our mission is to empower businesses to thrive in the digital age. We believe in the transformative power of technology & creativity to drive growth, innovation, and meaningful connections.
                    </Paragraph>
                    <Link href="/services" className="block w-fit mx-auto xl:ml-0">
                        <PrimaryButton variant="green">View Details</PrimaryButton>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
