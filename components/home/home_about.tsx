"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import home_about_index from "@/assets/home/home_about/home_about.png"
import Image from "next/image";
import logo_1 from "@/assets/home/home_about/l1.svg"
import logo_2 from "@/assets/home/home_about/l2.svg"
import logo_3 from "@/assets/home/home_about/l3.svg"
import logo_4 from "@/assets/home/home_about/l4.svg"
import logo_5 from "@/assets/home/home_about/l5.svg"
import logo_6 from "@/assets/home/home_about/l6.svg"
import logo_7 from "@/assets/home/home_about/l7.svg"

const HomeAbout = (dict) => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Text animations - mobile da Y harakati yo'q
    const textY = useTransform(scrollYProgress, [0.2, 0.5, 0.7], isMobile ? [0, 0, 0] : [-200, 100, 250]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [1, 0.5, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.5, 0]);

    // Image animations - mobile da Y harakati yo'q
    const imageY = useTransform(scrollYProgress, [0.2, 0.6, 0.8], isMobile ? [0, 0, 0] : [300, 0, -150]);
    const imageScale = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0.7, 1, 1]);
    const imageOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [1, 1, 1]);

    const companies = [
        { name: 'HBO', logo: logo_1 },
        { name: 'AMD', logo: logo_2 },
        { name: 'AMD', logo: logo_3 },
        { name: 'AMD', logo: logo_4 },
        { name: 'AMD', logo: logo_5 },
        { name: 'AMD', logo: logo_6 },
        { name: 'AMD', logo: logo_7 },
    ];

    return (
        <>
            {/* Desktop Version - Scroll Animation */}
            <div ref={containerRef} className="hidden md:block relative min-h-[200vh] lg:min-h-[220vh] ">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                    {/* Text */}
                    <motion.div
                        style={{
                            y: textY,
                            opacity: textOpacity,
                            scale: textScale,
                        }}
                        className="absolute z-10 text-center px-4"
                    >
                        <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight">
                            MORE ABOUT
                            <br />
                            MECHEALE©
                        </h1>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        style={{
                            y: imageY,
                            scale: imageScale,
                            opacity: imageOpacity
                        }}
                        className="absolute z-20"
                    >
                        <div className="w-[420px] h-[630px] lg:w-[500px] lg:h-[750px] rounded-[35%] overflow-hidden shadow-2xl">
                            <Image
                                src={home_about_index}
                                alt="Profile"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Mobile Version - Static Layout */}
            <div className="md:hidden  py-12 px-4">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                            MORE ABOUT
                            <br />
                            MECHEALE©
                        </h1>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="w-[240px] h-[360px] xs:w-[280px] xs:h-[420px] sm:w-[340px] sm:h-[510px] rounded-[35%] overflow-hidden shadow-2xl">
                            <Image
                                src={home_about_index}
                                alt="Profile"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* About Content */}
            <div className="relative z-40  py-8 sm:py-12 md:py-16 lg:py-20 ">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8 px-5 text-center flex-col flex justify-center items-center"
                    >
                        <h2 className="text-[18px] md:text-[25px] font-bold leading-tight max-w-screen-lg">
                            I`M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST IN TOKYO.
                            MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY,
                            AND INTUITIVE DESIGN SHINES THROUGH IN MY WORK.
                        </h2>

                        <div className=" justify-center items-center flex   max-w-screen-lg">
                            <p className={"text-[14px] md:text-[18px] w-full leading-relaxed"}>
                                I`m on the cutting edge of no-code tools that allow me to bring my creative visions to
                                life. Though my methods may be unconventional, my dedication to the craft is
                                unparalleled. I thrive on finding <em className="italic">unexpected solutions</em> and believe that with the
                                right perspective, design can elevate the human experience.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" relative overflow-hidden
            font-inter-tight cursor-pointer
            border-2 border-border
            font-bold uppercase
            sm:text-[18px]
            sm:py-2 sm:px-6
            text-[14px]
            py-1 px-4
            rounded-3xl
            dark:bg-transparent bg-black
            text-white
            transition-colors duration-500

            before:absolute before:inset-0 before:z-0
            dark:before:bg-white before:bg-white
            before:origin-bottom before:scale-y-0
            before:transition-transform before:duration-500
            before:content-['']

            hover:before:scale-y-100
            dark:hover:text-black hover:text-black"
                        >
                           <span className={"relative z-10"}>DOWNLOAD RESUME</span>
                        </motion.button>
                    </motion.div>

                    {/* Companies Carousel */}
                    <div className="mt-16 sm:mt-20 md:mt-24 overflow-hidden">
                        <motion.div
                            className="
      flex
      gap-4 sm:gap-6 md:gap-8 lg:gap-16
      overflow-visible
      py-8   /* 👈 tepaga-pastga joy */
    "
                            animate={{
                                x: [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...companies, ...companies, ...companies].map((company, index) => {
                                const rotateClass =
                                    index % 2 === 0 ? "rotate-[5deg]" : "rotate-[-5deg]";

                                return (
                                    <div
                                        key={index}
                                        className={`
            flex-shrink-0
            w-[100px] h-[100px]
            xs:w-[120px] xs:h-[120px]
            sm:w-[150px] sm:h-[150px]
            md:w-[180px] md:h-[180px]
            lg:w-[200px] lg:h-[200px]
            bg-[#0A0A0A] rounded-2xl
            flex items-center justify-center
            ${rotateClass}
          `}
                                    >
          <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <Image src={company.logo} alt={company.name} />
          </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeAbout;