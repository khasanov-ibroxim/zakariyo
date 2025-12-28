"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import home_header_img from "@/assets/home/home_header/home_header.png"
import Image from "next/image";

const HomeHeader = ({dict}) => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // scrollY ga qarab scale qiymatini hisoblaymiz
    const scale = 1 + scrollY / 3000; // 1 → boshlang‘ich, scrollY 500 → 1.5x zoom

    return (
        <>
            <div
                className={"w-full h-[95vh] relative flex items-center sm:justify-end justify-center flex-col gap-20 px-10 pb-5"}>
                <div className="text-center font-instrument-sans font-bold ">
                    <div className="text-[18px] w-full justify-center  mb-10 flex items-center gap-2">
                        <span
                            className="rounded-full bg-[#00B803] w-[15px] h-[15px] animate-pulse text-black dark:text-[rgba(255,255,255,.6)]"></span>
                        {dict.hero.status}
                    </div>
                    <h1 className={" text-[50px] leading-[40px] md:text-[100px] md:leading-[90px] lg:text-[140px] lg:leading-[120px]"}>
                        {dict.hero.name[0]}
                        <br/> {dict.hero.name[1]}</h1>
                </div>
                <div className="w-full flex justify-between font-bold text-[14px] absolute bottom-10 px-3 sm:static">
                    <div className="text-left text-xl">{dict.hero.location}</div>
                    <div className="text-right text-xl">{dict.hero.title}
                        {/*<Link href={"#"} className={"text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,.6)]"}>+ WEBFLOW*/}
                        {/*    DEVELOPER</Link>*/}
                    </div>
                </div>
            </div>

            <div className="w-full h-screen overflow-hidden">
                <div className="w-full h-full" style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.7s linear",
                    willChange: "transform",
                }}>
                    <Image src={home_header_img} alt={"hoome"}
                           className={"w-full h-full object-cover object-center"}
                    />
                </div>

            </div>
        </>
    );
};

export default HomeHeader;