import React from "react";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";


interface TGreenButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function GreenButton({ children, className }: TGreenButtonProps) {
    return (
        <button
            className={`bg-neutral-100 hover:bg-success-500 text-neutral-500 hover:text-white px-7 py-2 rounded-3xl cursor-pointer duration-300 ${className}`}
        >
            <Paragraph variant="para-11">{children}</Paragraph>
        </button>
    );
}
