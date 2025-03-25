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
                <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                    <div className="w-10/12 md:w-9/12 xl:max-w-[604px]">
                        <Badge className="mx-auto xl:ml-0">
                            Best Digital Agency & Development
                        </Badge>
                        <Heading variant="h1" className="text-white text-center xl:text-left mt-4 mb-5">
                            Transforming Ideas into⚡️Digital Success Stories with us ✨
                        </Heading>
                        <Paragraph variant="para-7" className="text-center xl:text-left text-neutral-300">
                            We specialize in crafting dynamic digital solutions that propel businesses forward in the ever-evolving digital landscape. Our team of experts.
                        </Paragraph>
                        <PrimaryButton className="mx-auto xl:ml-0 mt-10">Get Started</PrimaryButton>
                        <HappyCustomerWidget className="w-fit mx-auto xl:ml-0 mt-[50px]" />
                    </div>
                    <div className="max-w-[280px] sm:max-w-[320px] md:max-w-[400px] xl:max-w-[445px] flex items-center justify-center relative">
                        <Image src={HeroImage} alt="" width={445} height={533} />
                        <Image className="w-[50px] sm:w-[60px] md:w-[80px] xl:w-[92px] absolute -right-[9%] bottom-[11%] [animation:upDown_2s_ease-in-out_infinite]" src={HalfCircle} alt="" width={92} height={92} />
                        <CircleButton className="scale-[0.65] md:scale-[0.85] xl:scale-100 absolute -left-[23%] sm:-left-[20%] md:-left-[15%] xl:-left-[14%] top-[10%]" />
                    </div>
                </div>
            </Container>
            <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-11/12 max-w-[1240px] mx-auto">
                <div className="bg-[#ffffff33] w-full h-px mt-[90px]"></div>
                <Heading variant="h6" className="text-neutral-200 text-center mt-12">More than 2000+ companies trusted us and collaborate with us</Heading>
                <div className="flex items-center justify-center xl:justify-between flex-wrap gap-x-5 lg:gap-x-12 gap-y-4 md:gap-y-5 mt-10">
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumOne} alt="" width={224} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumTwo} alt="" width={187} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumThree} alt="" width={158} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumFour} alt="" width={155} height={40} />
                    <Image className="object-contain h-8 lg:h-10" src={LogoipsumFive} alt="" width={182} height={40} />
                </div>
            </div>
        </section>
    );
}
