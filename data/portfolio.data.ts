import { StaticImageData } from "next/image";
import { Locale } from '@/i18n-config';

import bakan_0 from "@/assets/work/bakan/bakan_0.jpg"
import bakan_1 from "@/assets/work/bakan/bakan_1.jpg"
import bakan_2 from "@/assets/work/bakan/bakan_2.jpg"
import bakan_3 from "@/assets/work/bakan/bakan_3.jpg"

import osborn_0 from "@/assets/work/osborn/osborn_0.jpg"
import osborn_1 from "@/assets/work/osborn/osborn_1.jpg"
import osborn_2 from "@/assets/work/osborn/osborn_2.jpg"
import osborn_3 from "@/assets/work/osborn/osborn_3.jpg"

import zelal_0 from "@/assets/work/zelal/zelal_0.jpg"
import zelal_1 from "@/assets/work/zelal/zelal_1.jpg"
import zelal_2 from "@/assets/work/zelal/zelal_2.jpg"
import zelal_3 from "@/assets/work/zelal/zelal_3.jpg"

import yustex_0 from "@/assets/work/yustex/yustex_0.jpg"
import yustex_1 from "@/assets/work/yustex/yustex_1.jpg"
import yustex_2 from "@/assets/work/yustex/yustex_2.jpg"
import yustex_3 from "@/assets/work/yustex/yustex_3.jpg"

import chust_0 from "@/assets/work/chust/chust_0.jpg"
import chust_1 from "@/assets/work/chust/chust_1.jpg"
import chust_2 from "@/assets/work/chust/chust_2.jpg"
import chust_3 from "@/assets/work/chust/chust_3.jpg"

import zarhal_0 from "@/assets/work/zarhal/zarhal_0.jpg"
import zarhal_1 from "@/assets/work/zarhal/zarhal_1.jpg"
import zarhal_2 from "@/assets/work/zarhal/zarhal_2.jpg"
import zarhal_3 from "@/assets/work/zarhal/zarhal_3.jpg"

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

// ✅ Til mustaqil config — faqat rasm va metama'lumotlar
const projectsConfig = [
    {
        id: "bakan_tex",
        slug: "bakan-tex",
        dictKey: "bakan_tex",
        year: "2022",
        thumbnail: bakan_2,
        heroImage: bakan_0,
        liveUrl: "https://bakantex.com/",
        images: [bakan_1, bakan_2, bakan_3],
    },
    {
        id: "osborn_textile",
        slug: "osborn-textile",
        dictKey: "osborn_textile",
        year: "2023",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        liveUrl: "https://osborntextile.uz/",
        images: [osborn_1, osborn_2, osborn_3],
    },
    {
        id: "zelal_tekstil",
        slug: "zelal-tekstil",
        dictKey: "zelal_tekstil",
        year: "2023",
        thumbnail: zelal_0,
        heroImage: zelal_0,
        liveUrl: "https://zelaltekstil.uz/",
        images: [zelal_1, zelal_2, zelal_3],
    },
    {
        id: "chust_textile",
        slug: "chust-textile",
        dictKey: "chust_textile",
        year: "2024",
        thumbnail: chust_0,
        heroImage: chust_0,
        liveUrl: "https://chusttextile.uz/",
        images: [chust_1, chust_2, chust_3],
    },
    {
        id: "yustex",
        slug: "yustex",
        dictKey: "yustex",
        year: "2025",
        thumbnail: yustex_0,
        heroImage: yustex_0,
        liveUrl: "https://yustex.uz/",
        images: [yustex_1, yustex_2, yustex_3],
    },
    {
        id: "zarhal_group",
        slug: "zarhal-group",
        dictKey: "zarhal_group",
        year: "2025",
        thumbnail: zarhal_0,
        heroImage: zarhal_0,
        liveUrl: "https://zarhalgroup.uz/",
        images: [zarhal_1, zarhal_2, zarhal_3],
    },
];

// ✅ Locale bo'yicha projectlarni olish
export const getProjects = (locale: Locale): Project[] => {
    const dict = require(`@/dictionaries/work/${locale}.json`);

    return projectsConfig.map(config => {
        const p = dict.projects[config.dictKey];

        const textSections: ProjectSection[] = p.sections.map(
            (s: { title: string; content: string }) => ({
                type: 'text' as const,
                title: s.title,
                content: s.content,
            })
        );

        const imageSections: ProjectSection[] = config.images.map((img, i) => ({
            type: 'image' as const,
            src: img,
            alt: `${p.client} - Image ${i + 1}`,
        }));

        // Text va imagelarni navbat bilan joylashtirish
        const combined: ProjectSection[] = [];
        const maxLen = Math.max(textSections.length, imageSections.length);
        for (let i = 0; i < maxLen; i++) {
            if (textSections[i]) combined.push(textSections[i]);
            if (imageSections[i]) combined.push(imageSections[i]);
        }

        return {
            id: config.id,
            slug: config.slug,
            title: p.client,
            subtitle: dict.category_type[p.category] ?? p.category,
            category: dict.category_type[p.category] ?? p.category,
            year: config.year,
            client: p.client,
            thumbnail: config.thumbnail,
            heroImage: config.heroImage,
            description: p.description,
            sections: combined,
            gallery: [],
            liveUrl: config.liveUrl,
        };
    });
};

// ✅ Default (ru) — client componentlar uchun
export const projects = getProjects('ru');

// ✅ Slug bo'yicha qidirish
export const getProjectBySlug = (slug: string, locale: Locale = 'ru'): Project | undefined => {
    return getProjects(locale).find(p => p.slug === slug);
};

// ✅ Oldingi / keyingi project
export const getAdjacentProjects = (currentSlug: string, locale: Locale = 'ru') => {
    const list = getProjects(locale);
    const idx = list.findIndex(p => p.slug === currentSlug);
    const prev = idx > 0 ? list[idx - 1] : list[list.length - 1];
    const next = idx < list.length - 1 ? list[idx + 1] : list[0];
    return { prev, next };
};