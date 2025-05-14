import React from "react";

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    variant?: "large" | "h1" | "h2" | "h3" | "h4" | "h4m" | "h5" | "h5m" | "h6";
}

export default function Heading({ children, className, variant = "h2" }: HeadingProps) {
    return (
        <>
            {
                variant === "large" ? (
                    <h2 className={`text-[32px] md:text-[40px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[110%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h1" ? (
                    <h2 className={`text-[32px] md:text-[40px] xl:text-[56px] leading-[120%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h2" ? (
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-[120%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h3" ? (
                    <h2 className={`text-[40px] leading-[120%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h4" ? (
                    <h2 className={`text-[32px] leading-[120%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h4m" ? (
                    <h2 className={`text-[32px] leading-[120%] font-[family-name:var(--font-clashdisplay)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h5" ? (
                    <h2 className={`text-[24px] leading-[120%] tracking-[2%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h5m" ? (
                    <h2 className={`text-[24px] leading-[120%] tracking-[2%] font-[family-name:var(--font-clashdisplay)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "h6" ? (
                    <h2 className={`text-[20px] leading-[120%] tracking-[2%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : (
                    <h2 className={`text-[20px] leading-[120%] tracking-[2%] font-[family-name:var(--font-clashdisplay)] font-semibold ${className}`}>
                        {children}
                    </h2>
                )
            }

        </>
    );
}
