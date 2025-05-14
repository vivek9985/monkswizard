import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import HeroImage from "@/assets/images/home-2-hero.png";
import CircleButton from "@/Components/Utils/Button/CircleButton";

export default function Hero() {
    return (
        <section className="bg-warning-50 pt-24 md:pt-[120px] lg:pt-[132px]">
            <div className="flex flex-col gap-y-10 md:gap-y-[60px] xl:flex-row items-center justify-between">
                <div className="w-11/12 md:w-9/12 lg:w-10/12 xl:max-w-[1116px] mx-auto mb-5">
                    <Heading variant="large" className="text-black text-center mb-2">
                        Our⚡Mission Is to Craft✨ Exceptional Digital Experiences
                    </Heading>
                    <Paragraph variant="para-7" className="max-w-[1021px] mx-auto text-center text-neutral-700">
                        We specialize in providing cutting-edge digital solutions tailored to meet the unique needs of our clients. With a team of skilled professionals adept in areas such as web design, development, digital marketing, and branding
                    </Paragraph>
                    <PrimaryButton variant="green" className="mx-auto mt-7 lg:mt-10 -translate-x-5">Get Started</PrimaryButton>
                </div>
            </div>
            <div className="pt-10 md:pt-14 lg:pt-24 xl:pt-[90px] w-full relative">
                <CircleButton className="absolute top-[-10%] md:top-[-4%] lg:top-[3%] left-0 right-0 mx-auto bg-success-900 scale-50 md:scale-[0.66] lg:scale-[0.85] xl:scale-100 2xl:scale-110" />
                <Image className="w-full h-full object-fill" src={HeroImage} alt="" />
            </div>
        </section>
    );
}
