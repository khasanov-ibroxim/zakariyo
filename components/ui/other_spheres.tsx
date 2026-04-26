"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// ✅ Har bir katak uchun type
type SphereItem = {
    id: string;
    label: string;           // Har doim ko'rinadigan matn
    image?: string | StaticImageData; // Ixtiyoriy rasm
    accent?: boolean;        // Kulrang fon uchun (rasmdan ko'rgan)
};

interface OtherSpheresProps {
    title?: string;
    items: SphereItem[];
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function OtherSpheres({ title, items  }: OtherSpheresProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="w-full py-16 px-5">
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-inter-tight font-bold text-4xl md:text-6xl mb-10"
                >
                    {title}
                </motion.h2>
            )}

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`
                            relative overflow-hidden rounded-2xl border cursor-default
                            min-h-[100px] md:min-h-[130px]
                            flex items-center justify-center
                            transition-all duration-500
                            ${item.accent
                            ? "bg-[#EBEBEB] dark:bg-[#1A1A1A] border-black/10 dark:border-white/10"
                            : "bg-white dark:bg-[#0A0A0A] border-black/10 dark:border-white/10"
                        }
                            ${hovered === item.id ? "shadow-lg scale-[1.02]" : "shadow-none scale-100"}
                        `}
                    >
                        {/* Rasm bo'lsa — background sifatida */}
                        {item.image && (
                            <>
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className={`
                                        object-cover transition-all duration-700
                                        ${hovered === item.id ? "opacity-100 scale-105" : "opacity-70 scale-100"}
                                    `}
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                {/* Overlay */}
                                <div className={`
                                    absolute inset-0 transition-all duration-500
                                    ${hovered === item.id
                                    ? "bg-black/40"
                                    : "bg-black/20 dark:bg-black/50"
                                }
                                `} />
                            </>
                        )}

                        {/* Label */}
                        <span className={`
                            relative z-10 text-center px-4
                            font-inter-tight font-bold
                            text-[15px] md:text-[18px] lg:text-[20px]
                            leading-tight
                            transition-colors duration-300
                            ${item.image
                            ? "text-white"
                            : "text-black dark:text-white"
                        }
                        `}>
                            {item.label}
                        </span>

                        {/* Hover border effect */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-black dark:border-white pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hovered === item.id ? 1 : 0 }}
                            transition={{ duration: 0.25 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}