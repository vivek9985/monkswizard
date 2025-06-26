"use client";

import Image from "next/image";
import PlayIcon from "@/assets/images/icons/play-icon.svg";
import { useState, useRef, useEffect } from "react";

export default function Video() {
    const [showControls, setShowControls] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPaused(false);
        const handlePause = () => setIsPaused(true);

        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);

        return () => {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        };
    }, []);

    const handleVideoClick = () => {
        setShowControls(prev => !prev);

        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.play();
            setShowControls(true);
        }
    };

    return (
        <div className="w-full relative">
            <video
                ref={videoRef}
                className="w-full cursor-pointer"
                onClick={handleVideoClick}
                controls={showControls}
                loop
                muted
            >
                <source
                    src="https://framerusercontent.com/assets/AEAUoR5ZxTyDnTZ1AepyPSe0ng.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {isPaused && (
                <button
                    onClick={handleOverlayClick}
                    className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[124px] h-[124px] scale-75 md:scale-90 xl:scale-100 rounded-full bg-[#ffffff38] backdrop-blur-[10px] border-[1px] border-[#ffffff28] flex items-center justify-center select-none cursor-pointer z-10"
                >
                    <Image
                        src={PlayIcon}
                        alt="Play Icon"
                        width={52}
                        height={52}
                        className="w-9"
                    />
                </button>
            )}
        </div>
    );
}
