'use client';

import { useRef, useEffect } from "react";
import Container from "@/Components/Utils/Container/Container";
import Heading from "@/Components/Utils/Heading/Heading";
import Badge from "@/Components/Utils/Badge/Badge";
import Image from "next/image";
import TestimonialBg from "@/assets/images/testimonial-bg.svg";
import TestimonialWidget from "@/Components/Widget/TestimonialWidget";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export default function Testimonial() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            swiperRef.current.params.navigation
        ) {
            const navigation = swiperRef.current.params.navigation;
            if (typeof navigation !== 'boolean') {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
            }
        }
    }, []);

    return (
        <section className="bg-primary-600 pt-20 pb-32 md:pt-[100px] xl:py-[120px] 2xl:pb-[128px] relative overflow-hidden">
            <Container className="relative z-10">
                <div className="flex flex-col gap-y-10 xl:flex-row items-center xl:items-start xl:justify-between w-10/12 sm:w-8/12 md:w-8/12 xl:w-full mx-auto">
                    <div className="max-w-[546px]">
                        <Badge className="mx-auto xl:ml-0">Testimonial</Badge>
                        <Heading variant="h2" className="text-white text-center xl:text-left mt-4">
                            Our Customers Say
                        </Heading>
                    </div>

                    <div className="slider-container relative max-w-[578px] w-full cursor-grab active:cursor-grabbing">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            pagination={{ type: 'fraction' }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            spaceBetween={24}
                            modules={[Navigation]}
                            className="h-full"
                        >
                            {[1, 2, 3, 4, 5].map((i) => (
                                <SwiperSlide key={i}>
                                    <TestimonialWidget />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="w-fit absolute -bottom-14 xl:bottom-3 right-0 left-0 mx-auto xl:mr-0 xl:right-0 flex gap-2 z-10">
                            <button
                                ref={prevRef}
                                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer disabled:opacity-50"
                                aria-label="Previous"
                            >
                                <RiArrowLeftSLine />
                            </button>
                            <button
                                ref={nextRef}
                                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer disabled:opacity-50"
                                aria-label="Next"
                            >
                                <RiArrowRightSLine />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

            <Image
                className="absolute left-0 bottom-0 -z-0"
                src={TestimonialBg}
                alt="Testimonial Background"
                width={827}
                height={657}
                priority
            />
        </section>
    );
}
