"use client"
import React from 'react';
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/portfolio.data";
import { getTrenings } from "@/data/trening.data";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n-config";
import OtherSpheres from "@/components/ui/other_spheres.tsx";

const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

// ✅ Interface qo'shildi
interface WorkDict {
    period: string;
    title: string;
    title_2: string;
    moreWorks: string;
}
type SphereItem = {
    id: string;
    label: string;           // Har doim ko'rinadigan matn
    image?: string | StaticImageData; // Ixtiyoriy rasm
    accent?: boolean;        // Kulrang fon uchun (rasmdan ko'rgan)
};


const spheres: SphereItem[] = [
    { id: "textile",    label: "Текстиль",          accent: false },
    { id: "equipment",  label: "Оборудование",       accent: true  },
    { id: "cosmetics",  label: "Косметика",          accent: false },
    { id: "leather",    label: "Кожаные изделия",    accent: true  },
    { id: "blinds",     label: "Жалюзи",             accent: true  },
    { id: "logistics",  label: "Логистика",          accent: false },
    { id: "printing",   label: "Типография",         accent: false },
    { id: "building",   label: "Стройматериалы",     accent: false },
    { id: "project",    label: "Проектные работы",   accent: false },
    { id: "gas",        label: "Заправки (АЗС)",     accent: false },
    { id: "food",       label: "Продукты питания",   accent: false },
    { id: "it",         label: "IT",                 accent: true  },
];



export default function WorkPage() {
    const params = useParams();
    const lang = (params?.lang as Locale) || 'ru';

    const trenings = React.useMemo(() => getTrenings(lang), [lang]);


    // ✅ Type to'g'rilandi
    const [dict, setDict] = React.useState<WorkDict | null>(null);

    React.useEffect(() => {
        import(`@/dictionaries/work/${lang}.json`).then((module) => {
            setDict(module.default);
        });
    }, [lang]);

    if (!dict) return null;

    return (
        <div>
            <div className="flex w-full h-[70vh] justify-end items-center flex-col font-inter-tight font-bold text-7xl sm:text-9xl">
                {/* ✅ dict.period endi to'g'ri ishlaydi */}
                <div className="text-[18px] mb-5 dark:text-white/60 text-black/60 font-instrument-sans">
                    {dict.period}
                </div>
                <div className="text-[40px] text-center md:text-8xl">
                    <motion.div
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {dict.title[0]}
                    </motion.div>
                    <motion.div
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {dict.title[1]}
                    </motion.div>
                </div>

            </div>

            <div className="grid px-5 grid-cols-1 sm:grid-cols-2 mt-20 gap-5">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
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



            {/*trening*/}

            <div className="flex w-full mt-14  justify-center items-center flex-col font-inter-tight font-bold text-7xl sm:text-9xl">

                <div className="text-[40px] text-center md:text-8xl">
                    <motion.div
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {dict.title_2[0]}
                    </motion.div>
                    <motion.div
                        viewport={{ once: false, amount: 0.5 }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {dict.title_2[1]}
                    </motion.div>
                </div>

            </div>
            <div className="grid px-5 grid-cols-1 sm:grid-cols-2 mt-20 gap-5">
                {trenings.map((project) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
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

            <OtherSpheres title="Другие сферы" items={spheres} />

        </div>
    );
}