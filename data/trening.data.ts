import { StaticImageData } from "next/image";
import { Locale } from '@/i18n-config';

import bakan_0 from "@/assets/work/trening__global/DSC05567.jpg"
import bakan_1 from "@/assets/work/trening__global/IMG_0671_2.jpg"
import bakan_2 from "@/assets/work/trening__global/DSC05556.jpg"
import bakan_3 from "@/assets/work/trening__global/DSC05540.jpg"

import osborn_0 from "@/assets/work/trening__heimtextil/138A6909.jpg"
import osborn_1 from "@/assets/work/trening__heimtextil/SH_Y_Heimtextil.jpg"
import osborn_2 from "@/assets/work/trening__heimtextil/138A6923.jpg"
import osborn_3 from "@/assets/work/trening__heimtextil/138A6962.jpg"

import tit_1_0 from "@/assets/work/trening__tit_1/IMG_0417.jpg"
import tit_1_1 from "@/assets/work/trening__tit_1/IMG_0428.jpg"
import tit_1_2 from "@/assets/work/trening__tit_1/IMG_0421.jpg"

import tit_2_0 from "@/assets/work/trening__tit_2/tit_2_0.jpg"
import tit_2_1 from "@/assets/work/trening__tit_2/tit_2_1.jpg"

export type ProjectSection =
    | { type: 'text'; title: string; content: string }
    | { type: 'image'; src: string | StaticImageData; alt: string };

export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    client: string;
    thumbnail: string | StaticImageData;
    heroImage: string | StaticImageData;
    description: string;
    sections: ProjectSection[];
    gallery: string[];
    liveUrl: string;
}

// ✅ Config - til mustaqil ma'lumotlar
const treningsConfig = [
    {
        id: "global_textile_days",
        slug: "global-textile-days",
        dictKey: "global_textile_days",
        year: "2025",
        thumbnail: bakan_0,
        heroImage: bakan_0,
        liveUrl: "#",
        images: [bakan_1, bakan_2, bakan_3],
    },
    {
        id: "heimtextil",
        slug: "heimtextil",
        dictKey: "heimtextil",
        year: "2025",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        liveUrl: "#",
        images: [osborn_1, osborn_2, osborn_3],
    },
    {
        id: "titlp_2025",
        slug: "titlp-2025",
        dictKey: "titlp_2025",
        year: "2025",
        thumbnail: tit_1_0,
        heroImage: tit_1_0,
        liveUrl: "#",
        images: [tit_1_1, tit_1_2],
    },
    {
        id: "titlp_2025_1",
        slug: "titlp-2025-1",
        dictKey: "titlp_2025_1",
        year: "2025",
        thumbnail: tit_2_0,
        heroImage: tit_2_0,
        liveUrl: "#",
        images: [tit_2_1],
    },
];

// ✅ Locale bo'yicha treninglarni olish
export const getTrenings = (locale: Locale): Project[] => {
    const dict = require(`@/dictionaries/trening/${locale}.json`);

    return treningsConfig.map(config => {
        const treningDict = dict[config.dictKey];

        const textSections: ProjectSection[] = treningDict.sections.map(
            (section: { content: string }) => ({
                type: 'text' as const,
                title: '',
                content: section.content,
            })
        );

        const imageSections: ProjectSection[] = config.images.map((image, index) => ({
            type: 'image' as const,
            src: image,
            alt: `${treningDict.title} - Image ${index + 1}`,
        }));

        // Text va image sectionlarni aralashtirib joylash (portfolio.data ga o'xshash)
        const combined: ProjectSection[] = [];
        const maxLen = Math.max(textSections.length, imageSections.length);
        for (let i = 0; i < maxLen; i++) {
            if (textSections[i]) combined.push(textSections[i]);
            if (imageSections[i]) combined.push(imageSections[i]);
        }

        return {
            id: config.id,
            slug: config.slug,
            title: treningDict.title,
            subtitle: treningDict.category,
            category: treningDict.category,
            year: config.year,
            client: treningDict.client,
            thumbnail: config.thumbnail,
            heroImage: config.heroImage,
            description: treningDict.description,
            sections: combined,
            gallery: [],
            liveUrl: config.liveUrl,
        };
    });
};

// ✅ Default (ru) — client componentlar uchun
export const trenings = getTrenings('ru');

// ✅ Slug bo'yicha qidirish
export const getTreningBySlug = (slug: string, locale: Locale = 'ru'): Project | undefined => {
    return getTrenings(locale).find(t => t.slug === slug);
};