"use client"
import React from 'react';
import Image from "next/image";
import home_about_index from "@/assets/footer/footer.png";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
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


            <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: false, amount: 0.5 }}
                className="w-full justify-center items-center flex flex-col px-10 py-10"
            >
                {/* Overflow hidden container */}
                <div className="w-full overflow-hidden mb-8">
                    <motion.div
                        variants={{
                            initial: { y: "-100%" },
                            inView: { y: 0 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-8xl font-bold text-center"
                    >
                        BEAUREGARD
                    </motion.div>
                </div>

                {/* Bottom section with staggered animation */}
                <div className="w-full justify-between flex items-center font-bold text-sm md:text-base flex-col sm:flex-row gap-4">
                    {/* Copyright - slides from top */}
                    <div className="overflow-hidden">
                        <motion.h3
                            variants={{
                                initial: { y: "-100%", opacity: 0 },
                                inView: { y: 0, opacity: 1 },
                            }}
                            className={"flex"}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            © 2024 ALL RIGHTS RESERVED
                        </motion.h3>
                    </div>

                    {/* Back to top - slides from top */}
                    <div className="relative flex items-center gap-2
                                after:content-['']
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[1px] after:w-[80%]  dark:after:bg-white after:bg-black
                                after:scale-x-0 after:origin-left
                                after:transition-transform after:duration-700
                                hover:after:scale-x-100">
                        <motion.div
                            variants={{
                                initial: { y: "-100%", opacity: 0 },
                                inView: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            className="cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={scrollToTop}
                        >
                            GO BACK TO TOP
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>

    );
};

export default Footer;


const FlipLink = ({children, href}: { children: string; href: string, animation: string }) => {
    return (
        <motion.a
            href={href}
            className="relative  block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
            initial="initial"               // variants boshqaradi
            whileInView="inView"            // ekranga kelganda animatsiya
            whileHover="hovered"             // hover animatsiyasi
            viewport={{once: false, amount: 0.5}}
            transition={{duration: 0.6, ease: "easeInOut", delay: 1}}
        >
            <motion.div
                variants={{
                    initial: {y: "100%", opacity: 0},
                    hovered: {y: "-100%"},
                    inView: {y: 0, opacity: 1},
                }}
                transition={{duration: 0.7, ease: "easeInOut"}}
            >
                {children}
            </motion.div>

            <motion.div
                className="absolute inset-0"
                variants={{
                    initial: {y: "100%"},
                    hovered: {y: 0},
                }}
                transition={{duration: 0.7, ease: "easeInOut"}}
            >
                {children}
            </motion.div>
        </motion.a>

    )
}
