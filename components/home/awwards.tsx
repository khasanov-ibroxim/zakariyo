"use client";
import React from 'react';

const Awwards = (dict) => {
    const experiences = [
        {
            period: "2024",
            company: "CSS DESIGN AWARD",
            position: "MAKINTO PORTFOLIO",
            description: "This portfolio won a award for its unique classic makintosh style theme it is one of the digital portfolio."
        },
        {
            period: "2023",
            company: "AWWWARDS",
            position: "ARNO RED THEMED PORTFOLIO\n",
            description: "Arno is a personal portfolio built by WEBFLOW and it is very futuristic horizontal scrolling portfolio have its different character.\n"
        },
        {
            period: "2023",
            company: "WEBFLOW\n",
            position: "AUDEMARS PIGUET\n",
            description: "I built a site for one of the world class watch brand it is featured in WEBFLOW awards and won a minimal style award.\n"
        },
        {
            period: "2013 - 2022",
            company: "LOSIFY",
            position: "LEAD PRODUCT DESIGNER",
            description: "Fitness and well-being with personalized coaching and innovative wellness solutions."
        },
        {
            period: "2013 - 2022",
            company: "LOSIFY",
            position: "LEAD PRODUCT DESIGNER",
            description: "Fitness and well-being with personalized coaching and innovative wellness solutions."
        }
    ];

    return (
        <section className="min-h-screen dark:bg-black bg:text-white relative">
            <div className="flex sm:flex-row flex-col  px-5">
                {/* Left Side - Sticky Title */}
                <div className="w-full sm:w-1/2 sm:pr-5  top-0 sm:sticky text-5xl md:text-5xl font-bold tracking-tight h-full pt-10 sm:flex items-center  ">
                    AWARDS

                </div>

                {/* Right Side - Scrolling Content */}
                <div className="w-full sm:w-3/3 py-10 sm:py-0  sm:pr-12 md:pr-20">
                    <div className="flex flex-col gap-5">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative border-border border-b-[1px] border-b-[rgba(0, 0, 0, .04)] dark:border-b-[rgba(255,255,255,0.16)] pb-20 "
                            >

                                {/* Company Name */}
                                <h3 className="text-4xl font-instrument-sans md:text-3xl font-bold mb-6 tracking-tight">
                                    {exp.company}
                                </h3>

                                {/* Position */}
                                <div className="text-2xl flex justify-between items-center md:text-2xl font-bold mb-8 tracking-wide">
                                    {exp.position}

                                    <span className="">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="dark:text-[rgba(255,255,255,.6)] text-base md:text-lg leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awwards;