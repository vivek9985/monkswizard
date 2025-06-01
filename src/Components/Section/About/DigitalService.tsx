import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import BgImage from "@/assets/images/content-bg.png"

export default function DigitalService() {
    return (
        <section className="bg-white py-20 md:py-[100px] xl:py-[120px] bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${BgImage.src})` }}>
            <Container>
                <div className="w-full md:w-9/12 xl:max-w-[582px] mx-auto xl:ml-0">
                    <Badge className="mx-auto xl:ml-0">Why Choose Us</Badge>
                    <Heading variant="h2" className="text-white text-center xl:text-left my-3">
                        Visit Our Online Marketing Consultation Page to Get Free Advice
                    </Heading>
                    <Paragraph variant="para-11" className="max-w-[488px] mx-auto xl:ml-0 text-center xl:text-left text-neutral-300">
                        Our mission is to empower businesses to thrive in the digital age. We believe in the transformative power of technology & creativity to drive growth, innovation, and meaningful connections.
                    </Paragraph>
                    <PrimaryButton variant="green" className="mt-8 lg:mt-12 mx-auto xl:ml-0">View Details</PrimaryButton>
                </div>
            </Container>
        </section>
    );
}
