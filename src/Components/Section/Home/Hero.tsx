import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import HeroBgImage from "@/assets/images/home-one-hero-bg.png";
import Badge from "@/Components/Utils/Badge/Badge";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import HappyCustomerWidget from "@/Components/Widget/HappyCustomerWidget";
import Image from "next/image";
import HeroImage from "@/assets/images/home-one-hero.png";
import HalfCircle from "@/assets/images/half-circle.png";
import CircleButton from "@/Components/Utils/Button/CircleButton";
import LogoipsumOne from "@/assets/images/logoipsum.svg";
import LogoipsumTwo from "@/assets/images/logoipsum-2.svg";
import LogoipsumThree from "@/assets/images/logoipsum-3.svg";
import LogoipsumFour from "@/assets/images/logoipsum-4.svg";
import LogoipsumFive from "@/assets/images/logoipsum-5.svg";

export default function Hero() {
    return (
        <section className="bg-primary-600 pt-[155px] pb-[64px] bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${HeroBgImage.src})` }}>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="max-w-[604px]" >
                        <Badge>
                            Best Digital Agency & Development
                        </Badge>
                        <Heading variant="h1" className="text-white mt-4 mb-5">
                            Transforming Ideas into⚡️Digital Success Stories with us ✨
                        </Heading>
                        <Paragraph variant="para-7" className="text-neutral-300">
                            We specialize in crafting dynamic digital solutions that propel businesses forward in the ever-evolving digital landscape. Our team of experts.
                        </Paragraph>
                        <PrimaryButton className="mt-10">Get Started</PrimaryButton>
                        <HappyCustomerWidget className="mt-[50px]" />
                    </div>
                    <div className="max-w-[445px] relative">
                        <Image src={HeroImage} alt="" width={445} height={533} />
                        <Image className="absolute -right-[9%] bottom-[11%] [animation:upDown_2s_ease-in-out_infinite]" src={HalfCircle} alt="" width={92} height={92} />
                        <CircleButton className="absolute -left-[14%] top-[10%]" />
                    </div>
                </div>
            </Container>
            <div className="max-w-[1240px] mx-auto">
            <div className="bg-[#ffffff33] w-full h-px mt-[90px]"></div>
                <Heading variant="h6" className="text-neutral-200 text-center mt-12">More than 2000+ companies trusted us and collaborate with us</Heading>
                <div className="flex items-center justify-between flex-wrap mt-10">
                    <Image className="object-contain" src={LogoipsumOne} alt="" width={224} height={40} />
                    <Image className="object-contain" src={LogoipsumTwo} alt="" width={187} height={40} />
                    <Image className="object-contain" src={LogoipsumThree} alt="" width={158} height={40} />
                    <Image className="object-contain" src={LogoipsumFour} alt="" width={155} height={40} />
                    <Image className="object-contain" src={LogoipsumFive} alt="" width={182} height={40} />
                </div>
            </div>
        </section>
    );
}
