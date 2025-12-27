"use client";
import React from 'react';
import Image from "next/image";
import icon_1 from "@/assets/home/favorite/icon_1.png"
import icon_2 from "@/assets/home/favorite/icon_2.png"
import icon_3 from "@/assets/home/favorite/icon_3.png"
import icon_4 from "@/assets/home/favorite/icon_4.png"
import icon_5 from "@/assets/home/favorite/icon_5.png"


const FavoriteStack = (dict) => {
    const stackItems = [
        {
            icon: <Image src={icon_1} className="w-12 h-12 rounded-2xl" alt="Favorite Stack Icon" />,
            stack: "WEBFLOW",
            title: "WEB DESIGN PLATFORM",
            proc:"95%",
            description: "The internet is your canvas. WEBFLOW is where design and publish stunning sites based in Amsterdam."
        },
        {
            icon: <Image src={icon_2} className="w-12 h-12 rounded-2xl" alt="Favorite Stack Icon" />,
            stack: "FIGMA",
            title: "WEB DESIGN PLATFORM",
            proc:"95%",
            description: "The internet is your canvas. WEBFLOW is where design and publish stunning sites based in Amsterdam."
        },
        {
            icon: <Image src={icon_3} className="w-12 h-12 rounded-2xl" alt="Favorite Stack Icon" />,
            stack: "JAVASCRIPT",
            title: "WEB DESIGN PLATFORM",
            proc:"95%",
            description: "The internet is your canvas. WEBFLOW is where design and publish stunning sites based in Amsterdam."
        },
        {
            icon: <Image src={icon_4} className="w-12 h-12 rounded-2xl" alt="Favorite Stack Icon" />,
            stack: "APPLE",
            title: "WEB DESIGN PLATFORM",
            proc:"95%",
            description: "The internet is your canvas. WEBFLOW is where design and publish stunning sites based in Amsterdam."
        },
        {
            icon: <Image src={icon_5} className="w-12 h-12 rounded-2xl" alt="Favorite Stack Icon" />,
            stack: "NVIDIA",
            title: "WEB DESIGN PLATFORM",
            proc:"95%",
            description: "The internet is your canvas. WEBFLOW is where design and publish stunning sites based in Amsterdam."
        },
    ];

    return (
        <section className="min-h-screen py-40 dark:bg-black dark:text-white relative">
            <div className="flex lg:flex-row flex-col  px-5">
                {/* Left Side - Sticky Title */}
                <div className="w-full lg:w-1/2 sm:pr-5  top-0 lg:sticky text-5xl md:text-5xl font-bold tracking-tight h-full pt-10 sm:flex items-center  ">
                    FAVOURITE <br/>STACK
                </div>

                {/* Right Side - Scrolling Content */}
                <div className="w-full lg:w-3/3 py-10 sm:py-0  sm:pr-12 md:pr-20">
                    <div className="flex flex-col gap-5">
                        {stackItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative p-5 bg-gray-100 dark:bg-[#0d0d0d] rounded-2xl flex lg:flex-row flex-col gap-3  border-[1px] border-[rgba(0, 0, 0, .04)] dark:border-[#1d1d1d]"
                            >
                                <div className="w-full lg:w-1/5 flex justify-start items-start ">
                                    <div className="dark:bg-[#0d0d0d] bg-gray-300 rounded-2xl border-[rgba(0, 0, 0, .04)] dark:border-[#1d1d1d] border-[1px]  p-2">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="w-4/3 bg-gray-300 dark:bg-[#0d0d0d] rounded-2xl border-[1px] border-[rgba(0, 0, 0, .04)] dark:border-[#1d1d1d]  p-5">
                                    {/* Company Name */}
                                    <h3 className="text-3xl font-instrument-sans md:text-2xl font-bold mb-6 tracking-tight">
                                        {item.stack}
                                    </h3>

                                    {/* Position */}
                                    <div className="text-lg  flex justify-between items-center md:text-lg font-bold mb-2 tracking-wide">
                                        {item.title}

                                        <span className="">
                                        {item.proc}
                                    </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-black dark:text-[rgba(255,255,255,.6)] text-base md:text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FavoriteStack;