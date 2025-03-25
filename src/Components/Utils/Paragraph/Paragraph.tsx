import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    variant?: "para-1" | "para-2" | "para-3" | "para-4" | "para-5" | "para-6" | "para-7" | "para-8" | "para-9" | "para-10" | "para-11" | "para-12" | "para-13";
}

export default function Paragraph({ children, className, variant = "para-11" }: ParagraphProps) {
    return (
        <>
            {
                variant === "para-1" ? (
                    <h2 className={`text-[24px] leading-[150%] font-[family-name:var(--font-outfit)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-2" ? (
                    <h2 className={`text-[24px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                    // --------24--------
                ) : variant === "para-3" ? (
                    <h2 className={`text-[20px] leading-[118%] font-[family-name:var(--font-outfit)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-4" ? (
                    <h2 className={`text-[20px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                    // --------20--------
                ) : variant === "para-5" ? (
                    <h2 className={`text-[18px] leading-[150%] font-[family-name:var(--font-outfit)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-6" ? (
                    <h2 className={`text-[18px] leading-[150%] font-[family-name:var(--font-outfit)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-7" ? (
                    <h2 className={`text-[18px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                    // --------18--------
                ) : variant === "para-8" ? (
                    <h2 className={`text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-9" ? (
                    <h2 className={`text-[16px] leading-[120%] font-[family-name:var(--font-outfit)] font-semibold ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-10" ? (
                    <h2 className={`text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-11" ? (
                    <h2 className={`text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                    // --------16--------
                ) : variant === "para-12" ? (
                    <h2 className={`text-[14px] leading-[150%] font-[family-name:var(--font-outfit)] font-medium ${className}`}>
                        {children}
                    </h2>
                ) : variant === "para-13" ? (
                    <h2 className={`text-[14px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                    // --------14--------
                ) : (
                    <h2 className={`text-[16px] leading-[150%] font-[family-name:var(--font-outfit)] font-normal ${className}`}>
                        {children}
                    </h2>
                )
            }

        </>
    );
}
