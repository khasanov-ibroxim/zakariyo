
"use client"
import React, { useEffect, useState, useRef } from 'react';
import check from "@/assets/home/motivation/motivation_check.png"
import bg from "@/assets/home/motivation/motivation_bottom_img.jpg"
import Image from "next/image";

const Motivation = ({ dict }) => {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);
    const [imageTop, setImageTop] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        setWindowHeight(window.innerHeight);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
            checkMobile();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            setImageTop(rect.top + window.scrollY);
        }
    }, []);

    // Scale calculation
    const viewportStart = scrollY + windowHeight;
    const imageInView = viewportStart > imageTop;
    const scrollProgress = imageInView ? Math.max(0, viewportStart - imageTop) : 0;
    const maxScroll = windowHeight * 1.5;

    // ✅ Mobile da kam zoom
    const maxZoom = isMobile ? 1.05 : 1.2;
    const scale = 1 + Math.min(scrollProgress / maxScroll, 1) * (maxZoom - 1);

    return (
        <div className="py-16 overflow-x-hidden"> {/* ✅ QO'SHILDI */}
            <div className="flex justify-between flex-col md:flex-row md:px-10 px-3">
                <h3 className="w-full mb-10 md:mb-0 md:w-2/4 font-bold text-4xl md:text-6xl">
                    MOTIVATION
                </h3>
                <div className="w-full md:w-2/4 flex flex-col text-lg md:text-2xl gap-10">
                    <p>
                        More than a job, web design is an outlet for your vision. You have the power to take an idea from
                        concept to reality. Your sites can tell a story, <i>show off a brand</i>, or change lives.
                    </p>
                    <p>
                        As a web designer, you get to blend art and technology to create <i>digital experiences</i> that
                        inform, entertain, and inspire.
                    </p>
                    <div className="w-32 md:w-48 h-32 md:h-48 rounded-lg flex items-center justify-center">
                        <Image src={check} alt="check" />
                    </div>
                </div>
            </div>

            {/* ✅ TO'G'RILANGAN IMAGE CONTAINER */}
            <div
                ref={imageRef}
                className="w-full h-[60vh] md:h-screen mt-10 relative overflow-hidden"
            >
                <div
                    className="w-full h-full absolute inset-0"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "center center",
                        transition: "transform 0.1s linear",
                    }}
                >
                    <Image
                        src={bg}
                        alt="motivation"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                </div>
            </div>
        </div>
    );
};

export default Motivation;
