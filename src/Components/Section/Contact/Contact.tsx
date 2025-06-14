"use client"
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import Image from "next/image";
import ContactProfile from "@/assets/images/contact-profile.png";
import AbsoluteImage from "@/assets/images/contact-card-absolute.svg";
import PrimaryInput from "@/Components/Utils/Input/PrimaryInput";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import PrimaryTextArea from "@/Components/Utils/Input/PrimaryTextArea";
import { RiArrowDownSLine } from "@remixicon/react";
import { useState } from "react";


const options = [
    "Service One",
    "Service Two",
    "Service Three",
]

export default function Contact() {
    const [select, setSelect] = useState(false)
    const [selectItem, setSelectItem] = useState("")
    const selectHandler = () => {
        setSelect(prev => !prev);
    }
    return (
        <section className="bg-white py-20 md:py-24 lg:py-[110px]">
            <Container className="flex flex-col justify-center items-center gap-10 md:gap-7 lg:gap-10 md:flex-row lg:justify-between">
                <div className="w-full md:w-1/2 lg:w-[463px] bg-primary-500 py-7 lg:py-[37px] rounded-3xl relative">
                    <div className="flex flex-col items-center justify-center pb-4">
                        <div className="w-[193px] h-[193px] rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] bg-[linear-gradient(118deg,#EEC800_-9%,#229954_61.4475%,#B1F8B1_100%)] overflow-hidden">
                            <Image className="w-full h-full object-cover object-center rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] p-1" src={ContactProfile} alt="" width={193} height={193} />
                        </div>
                        <div className="text-center mt-3">
                            <Heading variant="h5m" className="text-white">
                                Mizanur Rahman
                            </Heading>
                            <Paragraph variant="para-11" className="text-neutral-400">
                                Sales Manager
                            </Paragraph>
                        </div>
                    </div>
                    <div className="px-9 lg:px-[52px] text-center md:text-left">
                        <Heading variant="h4" className="text-white">
                            Schedule a call with us to find out if we can help you!
                        </Heading>
                        <Paragraph variant="para-11" className="text-neutral-300 mt-4">
                            With a keen understanding of design principles, market trends, and user behavior, a product designer collaborates closely
                        </Paragraph>
                    </div>
                    <Image className="absolute left-0 top-0 w-full h-auto object-cover rounded-tl-[60px] rounded-tr-[20px] rounded-br-[20px] p-1" src={AbsoluteImage} alt="" width={193} height={193} />
                </div>
                <div className="w-full md:w-1/2 lg:w-[636px]">
                    <Heading variant="h1" className="text-black text-center md:text-left">
                        Get in Touch
                    </Heading>
                    <form className="mt-7 md:mt-10">
                        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                            <PrimaryInput label="Name" placeholder="Name here" />
                            <PrimaryInput label="E-mail " placeholder="E-mail here" />
                        </div>
                        <div className="my-4">
                            <Paragraph variant="para-11" className="text-black mb-1">
                                <label>Services</label>
                            </Paragraph>
                            <div onClick={selectHandler} className="w-full relative bg-neutral-50 border-[1px] border-neutral-300 py-2.5 px-3 rounded-lg text-[#A7A5A6] text-[16px] leading-[170%] font-[family-name:var(--font-outfit)] font-normal cursor-pointer focus:outline-none mb-4">
                                <Paragraph variant="para-11" className={`${selectItem ? "text-neutral-800": "text-[#A7A5A6]"}`}>
                                    {
                                        selectItem ? selectItem : "Service here"
                                    }
                                </Paragraph>
                                <RiArrowDownSLine size={20} className={`absolute right-2 top-0 bottom-0 my-auto duration-300 ${select ? "rotate-180" : ""}`} />
                                <div className={`absolute left-0 right-0 w-full rounded-lg overflow-hidden border-[1px] border-neutral-300 bg-white transition-all duration-500 ${select ? "top-[100%] scale-100 opacity-100" : "scale-0 top-[-100%] opacity-0"}`}>
                                    {
                                        options?.map((item, i) => (
                                            <div key={i} onClick={() => setSelectItem(item)} className="text-black duration-100 hover:bg-primary-500 hover:text-white px-3 py-1.5">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <PrimaryTextArea label="Message" placeholder="Message here" rows={4} />
                        <button type="submit" className="mt-6">
                            <PrimaryButton>
                                <span className="text-primary-900">
                                    Send Message
                                </span>
                            </PrimaryButton>
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
}
