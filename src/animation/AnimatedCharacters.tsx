"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedCharactersProps {
    text: string;
    type?: "heading" | "paragraph";
}

const itemVariants: Variants = {
    hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 }
    },
    visible: {
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.50 }
    }
};

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ text, type = "" }) => {
    return (
        <>
            {text.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className={`inline-block whitespace-nowrap ${type === "heading" ? "leading-[100%]" : ""}`}>
                    {[...word, "\u00A0"].map((char, charIndex) => (
                        <span
                            key={`${wordIndex}-${charIndex}`}
                            className="inline-block overflow-hidden"
                        >
                            <motion.span
                                className="inline-block"
                                variants={itemVariants}
                            >
                                {char}
                            </motion.span>
                        </span>
                    ))}
                </span>
            ))}
        </>
    );
};

export default AnimatedCharacters;
