"use client"
import { motion, Variants } from 'framer-motion';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { getProjects } from '@/data/portfolio.data';
import { getTrenings } from '@/data/trening.data';
import { Locale } from '@/i18n-config';

interface FeaturedWorkProps {
    dict: any;
    lang: string;
    // ✅ Ko'rsatiladigan loyihalar ID si — tartib saqlanadi
    ids: string[];
}

const FeaturedWork = ({ dict, lang, ids }: FeaturedWorkProps) => {
    const locale = lang as Locale;

    // ✅ Portfolio + trening dan barcha loyihalarni birlashtirish
    const allProjects = React.useMemo(() => {
        const portfolio = getProjects(locale);
        const trenings = getTrenings(locale);
        return [...portfolio, ...trenings];
    }, [locale]);

    // ✅ ids tartibini saqlagan holda loyihalarni topish
    const featuredProjects = React.useMemo(() => {
        return ids
            .map(id => allProjects.find(p => p.id === id))
            .filter(Boolean) as typeof allProjects;
    }, [ids, allProjects]);

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
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {dict.FeaturedWork.title[0]}
                    </motion.div>
                    <motion.div
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {dict.FeaturedWork.title[1]}
                    </motion.div>
                </div>
                <div className="font-inter-tight text-2xl w-full md:w-2/4">
                    {dict.FeaturedWork.desc}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-5">
                {featuredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInScale}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link
                            href={`/${lang}/work/${project.slug}`}
                            className="block rounded-2xl cursor-pointer bg-[#F5F5F7] border-[rgba(0,0,0,0.16)] dark:bg-[#0A0A0A] dark:border-[rgba(255,255,255,.1)] border"
                        >
                            <div className="h-[70%] lg:h-[80%] w-full group overflow-hidden rounded-2xl">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex justify-between items-center w-full px-5 py-5">
                                <div>
                                    <h2 className="font-inter-tight font-bold text-[20px]">
                                        {project.title}
                                    </h2>
                                </div>
                                <div className="border-[#52526D] dark:border-[rgba(255,255,255,.2)] border px-3 py-2 rounded-2xl font-bold text-[#52526D] dark:text-[rgba(255,255,255,.5)]">
                                    {project.year}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedWork;