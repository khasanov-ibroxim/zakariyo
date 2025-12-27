"use client"
import React, { useState } from 'react';
import {ArrowUpRight, Plus, X} from 'lucide-react';
import Image from "next/image";
import home_about_index from "@/assets/footer/footer.png";
import Link from "next/link";
import {motion} from "framer-motion";

const questionsData = [
    {
        question: "WHAT INDUSTRIES DO YOU SPECIALIZE IN?",
        answer: "I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations."
    },
    {
        question: "WHAT SERVICES DO YOU OFFER AS A DESIGNER?",
        answer: "I offer a comprehensive range of design services including brand identity design, web design and development, UI/UX design, graphic design, print design, and digital marketing materials. Each project is tailored to meet your specific business needs and goals."
    },
    {
        question: "HOW DO YOU APPROACH BRANDING PROJECTS?",
        answer: "My branding approach starts with deep research into your business, target audience, and competitors. I then develop a unique brand strategy that includes logo design, color palette, typography, and brand guidelines. The process is collaborative, ensuring your vision is reflected in the final brand identity."
    },
    {
        question: "CAN YOU WALK ME THROUGH YOUR DESIGN PROCESS?",
        answer: "My design process consists of five key phases: Discovery (understanding your needs), Research (analyzing competitors and trends), Concept Development (creating initial designs), Refinement (iterating based on feedback), and Delivery (providing final files and guidelines). Throughout each phase, I maintain clear communication and involve you in key decisions."
    },
    {
        question: "WHAT SOFTWARE AND TOOLS DO YOU USE FOR YOUR DESIGNS?",
        answer: "I work with industry-standard tools including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma for UI/UX design, Webflow and React for web development, and various prototyping tools. I stay updated with the latest design technologies to deliver cutting-edge solutions."
    }
];

const Questions = (dict) => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="min-h-screen py-20 px-5">
            <div className="font-inter-tight mb-10 w-full flex flex-col items-center justify-center font-bold text-5xl text-center">
                FREQUENTLY <br/> ASKED QUESTIONS
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="space-y-4">
                    {questionsData.map((item, index) => (
                        <div
                            key={index}
                            className=" bg-[#f5f5f8]  dark:bg-[#0a0a0a] rounded-2xl
            border-[1px] dark:border-[#1d1d1d] border-[rgba(0, 0, 0, .04)]
             px-5
             overflow-hidden"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full flex items-center justify-between py-5 text-left group hover:opacity-80 transition-opacity"
                            >
                                <h3 className="text-xl md:text-xl font-inter-tight font-bold tracking-tight pr-8">
                                    {item.question}
                                </h3>

                                {/* Plus/X Icon */}
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <X className="w-8 h-8 md:w-8 md:h-8" strokeWidth={1.5} />
                                    ) : (
                                        <Plus className="w-8 h-8 md:w-8 md:h-8" strokeWidth={1.5} />
                                    )}
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100 pb-8'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="dark:text-[rgba(255,255,255,0.6)] text-base md:text-lg leading-relaxed pr-12">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="pt-10 sm:pt-32">
                <div
                    className="font-inter-tight w-full flex flex-col items-center justify-center font-bold text-5xl sm:text-8xl text-center">
                    LET`S WORK
                    <br/> TOGETHER
                    <div
                        className="
            relative overflow-hidden
            font-inter-tight cursor-pointer
            border-2 border-border
            font-bold uppercase
            sm:text-[18px]
            sm:py-4 sm:px-8
            text-[14px]
            py-3 px-6
            mt-10
            rounded-3xl
            dark:bg-white bg-black
            text-white dark:text-black
            transition-colors duration-500

            before:absolute before:inset-0 before:z-0
            dark:before:bg-black  before:bg-white
            before:origin-bottom before:scale-y-0
            before:transition-transform before:duration-500
            before:content-['']

            hover:before:scale-y-100
            dark:hover:text-white hover:text-black
          "
                    >
                        <span className="relative z-10 uppercase">Contact Now</span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center mt-10 flex-col">
                    <div
                        className="w-[420px] h-[630px] lg:w-[350px] lg:h-[500px] rounded-[40%] overflow-hidden shadow-2xl">
                        <Image
                            src={home_about_index}
                            alt="Profile"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="w-full px-5 sm:w-1/2 text-center mt-10 text-lg uppercase font-bold">
                        BASED IN TOKYO, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY
                        PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND
                        INTUITIVE DESIGN IS EVIDENT IN MY WORK.
                    </div>
                    <div
                        className=" mt-10 bottom-10  text-[18px] uppercase font-bold flex flex-col justify-center items-center gap-5 sm:flex-row sm:right-[20px]">
                        {["Instagram", "Dribble", "Twitter"].map((name) => (
                            <Link
                                key={name}
                                href="#"
                                className="
                                relative flex items-center gap-2
                                after:content-['']
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[1px] after:w-[80%]  dark:after:bg-white after:bg-black
                                after:scale-x-0 after:origin-left
                                after:transition-transform after:duration-700
                                hover:after:scale-x-100
                                "
                            >
                                <motion.div
                                    className={'flex'}>
                                    {name} <ArrowUpRight/>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Questions;