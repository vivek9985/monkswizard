import Image from "next/image";
import HappyCustomerOne from "@/assets/images/happy-customer-one.png"
import HappyCustomerTwo from "@/assets/images/happy-customer-two.png"
import HappyCustomerThree from "@/assets/images/happy-customer-three.png"
import HappyCustomerFour from "@/assets/images/happy-customer-four.png"
import Heading from "../Utils/Heading/Heading";
import Paragraph from "../Utils/Paragraph/Paragraph";
import React from "react";
import CountUp from "@/animation/CountUp";

interface HappyCustomerWidgetProps {
    className?: string;
}


export default function HappyCustomerWidget({ className }: HappyCustomerWidgetProps) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-[18px] ${className}`}>
            <div className="flex items-center">
                <Image className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full" src={HappyCustomerOne} alt="" width={55} height={55} />
                <Image className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full -ml-[15px]" src={HappyCustomerTwo} alt="" width={55} height={55} />
                <Image className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full -ml-[15px]" src={HappyCustomerThree} alt="" width={55} height={55} />
                <Image className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] rounded-full -ml-[15px]" src={HappyCustomerFour} alt="" width={55} height={55} />
            </div>
            <div className="text-center md:text-left">
                <Heading variant="h5m" className="text-white">
                    <CountUp
                        from={0}
                        to={750}
                        separator=","
                        direction="up"
                        duration={2}
                        className="count-up-text"
                    />{" "}
                    k+
                </Heading>
                <Paragraph variant="para-11" className="text-neutral-300">
                    Happy Customers
                </Paragraph>
            </div>
        </div>
    )
}