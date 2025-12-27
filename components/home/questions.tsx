"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

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

const Questions = () => {
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
        </section>
    );
};

export default Questions;