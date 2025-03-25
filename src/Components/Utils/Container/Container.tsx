import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-w-[1140px] w-full mx-auto px-4 md:px-7 lg:px-12 xl:px-0 ${className}`}>
            {children}
        </div>
    );
}
