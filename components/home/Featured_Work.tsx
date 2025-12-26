"use client"
import {motion, Variants} from 'framer-motion';
import React from 'react';
import work_1 from "@/assets/home/Featured_Work/work_1.png"
import work_2 from "@/assets/home/Featured_Work/work_2.png"
import work_3 from "@/assets/home/Featured_Work/work_3.png"
import work_4 from "@/assets/home/Featured_Work/work_4.png"
import work_5 from "@/assets/home/Featured_Work/work_5.png"
import work_6 from "@/assets/home/Featured_Work/work_6.png"
import Image from "next/image";
import Link from "next/link";

const FeaturedWork = () => {

    const FeaturedWorkData = [
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_1
        },
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_2
        },
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_3
        },
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_4
        },
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_5
        },
        {
            title: "LIGHTRIC MOTORS",
            subtitle: "Photography",
            date: "2024",
            image: work_6
        },

    ]
    const fadeInScale: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };
    return (
        <div className="py-16 px-3 md:px-10">
            <div className="w-full justify-between items-center flex flex-col md:flex-row">
                <div className="flex w-full md:w-2/4 flex-col font-inter-tight font-bold text-6xl">
                    <motion.div
                        viewport={{once: false, amount: 0.5}}
                        initial={{y: "100%", opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: "easeInOut"}}
                        className="">
                        FEATURED
                    </motion.div>
                    <motion.div
                        viewport={{once: false, amount: 0.5}}
                        initial={{y: "100%", opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: "easeInOut"}}
                        className="overflow-hidden">WORK
                    </motion.div>
                </div>
                <div className="font-inter-tight text-2xl w-full md:w-2/4">
                    My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard,
                    I craft clear experiences out of nothing but ones and zeroes.
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-5">
                {FeaturedWorkData.map((item, i) => (
                    <motion.a
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInScale}
                        transition={{ type: "spring", stiffness: 300 }}
                        href={"#"} key={i} className={"rounded-2xl cursor-pointer bg-[#0A0A0A] border-[rgba(255,255,255,.1)] border"}>
                        <div className="h-[70%] lg:h-[80%] w-full group overflow-hidden rounded-2xl">
                            <Image src={item.image} alt={item.title}
                                   className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}/>
                        </div>
                        <div className="flex justify-between items-center w-full px-5 py-5">
                            <div className="">
                                <h2 className={"font-inter-tight font-bold text-[20px]"}>{item.title}</h2>
                                <p className={"font-inter-tight text-lg text-[rgba(255,255,255,.6)]"}>{item.subtitle}</p>
                            </div>
                            <div className="border-[rgba(255,255,255,.2)] border px-3 py-2 rounded-2xl font-bold text-[rgba(255,255,255,.5)]">{item.date}</div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default FeaturedWork;