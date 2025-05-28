"use client";

import Link from "next/link";
import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import PrimaryButton from "@/Components/Utils/Button/PrimaryButton";
import Image from "next/image";
import NotFoundImage from "../assets/images/404.svg";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <Image className="w-[220px] h-[160px] object-contain" src={NotFoundImage} alt="404" width={220} height={160} />
            <Heading variant="h1" className="text-black mt-11">404</Heading>
            <Heading variant="h3" className="mt-3 mb-4">There&apos;s Something Wrong</Heading>
            <Paragraph variant="para-7" className="mb-6 text-neutral-700">
                The page are looking for doesn’t exist or has been moved
            </Paragraph>
            <Link href="/">
                <PrimaryButton variant="green">
                    Back to Homepage
                </PrimaryButton>
            </Link>
        </div>
    );
}
