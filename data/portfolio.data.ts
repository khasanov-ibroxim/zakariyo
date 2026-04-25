import {StaticImageData} from "next/image";

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
    | {
    type: 'text';
    title: string;
    content: string;
}
    | {
    type: 'image';
    src: string | StaticImageData;
    alt: string;
};

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

export const projects: Project[] = [
    {
        id: "Bakan_Tex",
        slug: "Bakan_Tex",
        title: "Bakan Tex",
        subtitle: "",
        category: "Маркетинг",
        year: "2022",
        client: "Bakan Tex",
        thumbnail: bakan_2,
        heroImage: bakan_0,
        description: "Производственное предприятие, специализирующееся на выпуске хлопчатобумажной пряжи. Сотрудничество было выстроено в формате комплексного медийного и стратегического сопровождения.",
        sections: [
            {
                type: "text",
                title: "КАТАЛОГ",
                content: "Компания была представлена в каталогах выпусков 1, 2, 3 и 5 через интервью, экспертные статьи и имиджевые рекламные макеты. Это усилило позиционирование бренда, подчеркнуло производственный потенциал, технологическое оснащение и систему контроля качества, а также укрепило доверие к компании, стабильность продукции и репутацию предприятия в отрасли."
            },
            {
                type: "text",
                title: "САЙТ",
                content: "Разработан корпоративный сайт BAKAN Tex с чёткой структурой, ориентированной на B2B-аудиторию. В рамках проекта была выстроена логика подачи производственных преимуществ, подробно раскрыты технологические процессы и система контроля качества, сформирован современный визуальный стиль. Сайт стал полноценным инструментом презентации компании для внутренних и экспортных партнёров."
            },
            {
                type: "text",
                title: "БИЗНЕС ТУР",
                content: "Организован отраслевой бизнес-тур с участием представителей Русвата и АИРР. В рамках программы проведены визиты на производство, презентация технологических мощностей и переговоры с руководством. Формат позволил продемонстрировать уровень организации процессов и установить прямые деловые контакты, усилив позиционирование предприятия в отрасли."
            },

            {
                type: "image",
                src: bakan_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "РЕЗУЛЬТАТ",
                content: "Комплексная работа позволила усилить позиционирование компании на рынке, повысить узнаваемость бренда и сформировать устойчивый имидж надёжного производственного партнёра. Через медийное присутствие, цифровые инструменты и прямые деловые коммуникации предприятие укрепило доверие со стороны клиентов, партнёров и международных покупателей, подтвердив свой статус стабильного и технологичного производителя."
            },
            {
                type: "image",
                src: bakan_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: bakan_3,
                alt: "Fluid design"
            }
        ],
        gallery: [
            "/images/gallery_1.png",
            "/images/gallery_2.png"
        ],
        liveUrl: "https://bakantex.com/"
    },
    {
        id: "Osborn_Textile",
        slug: "Osborn_Textile",
        title: "Osborn Textile",
        subtitle: "",
        category: "Маркетинг",
        year: "2023",
        client: "Osborn Textile",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        description: "На сегодняшний день OSBORN TEXTILE является одним из ведущих производителей меланжевой, крашеной и суровой пряжи.",
        sections: [
            {
                type: "text",
                title: "Фото",
                content: "Для Osborn Textile была организована профессиональная фотосессия производственных процессов, оборудования и готовой продукции. Основной акцент был сделан на демонстрации масштаба производства, качества пряжи и технологичности предприятия. Полученные материалы усилили визуальное позиционирование компании и стали основой для маркетинговых и презентационных инструментов."
            },
            {
                type: "text",
                title: "Сайт",
                content: "Был разработан корпоративный сайт Osborn Textile с современной структурой и удобной навигацией для B2B-аудитории. В рамках проекта были подробно раскрыты производственные возможности, ассортимент крашеной и меланжевой пряжи, а также преимущества компании для международных партнёров. Сайт стал полноценным инструментом продаж и укрепления доверия со стороны клиентов."
            },
            {
                type: "text",
                title: "SMM",
                content: "Для компании была выстроена стратегия присутствия в социальных сетях с акцентом на экспертность, доверие и узнаваемость бренда. Контент включал производственные процессы, преимущества продукции, экспертные материалы и визуальное сопровождение предприятия. Это позволило усилить репутацию компании и повысить интерес со стороны потенциальных партнёров и покупателей."
            },

            {
                type: "image",
                src: osborn_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "РЕЗУЛЬТАТ",
                content: "Комплексная работа по фотосъёмке, разработке сайта и SMM-продвижению позволила значительно усилить позиционирование Osborn Textile на рынке. Компания получила современный визуальный образ, эффективный инструмент для презентации продукции и стабильное присутствие в digital-среде. Это укрепило доверие со стороны клиентов и партнёров, повысило узнаваемость бренда и усилило репутацию предприятия как надёжного и технологичного производителя."
            },
            {
                type: "image",
                src: osborn_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: osborn_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "https://osborntextile.uz/"
    },
    {
        id: "Zelal_Tekstil",
        slug: "Zelal_Tekstil",
        title: "Zelal Tekstil",
        subtitle: "",
        category: "Маркетинг",
        year: "2023",
        client: "Zelal Tekstil",
        thumbnail: zelal_0,
        heroImage: zelal_0,
        description: "Фабрика \"ZELAL TEKSTIL\" - одна из лидирующих текстильных компаний по производству трикотажного полотна в Узбекистане, была основана в 2006 году в Ташкенте.",
        sections: [
            {
                type: "text",
                title: "Фото",
                content: "Для Zelal Tekstil была организована профессиональная фотосессия производственных процессов, оборудования и ключевых этапов производства. Основной акцент был сделан на масштабе предприятия, технологичности и качестве выпускаемой продукции. Полученные материалы стали важной частью презентации компании для партнёров и клиентов."
            },
            {
                type: "text",
                title: "Сайт",
                content: "Были разработаны корпоративные сайты для Zelal Tekstil и Deniz Teks с современной структурой и удобной навигацией для B2B-аудитории. В рамках проектов были подробно раскрыты производственные возможности, ассортимент продукции и ключевые преимущества компаний на внутреннем и экспортном рынках. Сайты стали полноценными инструментами продаж, презентации предприятий и укрепления доверия к брендам."
            },
            {
                type: "text",
                title: "Видео",
                content: "Для Zelal Tekstil была проведена профессиональная видеосъёмка производственных процессов, оборудования и ключевых этапов работы предприятия. Основной акцент был сделан на демонстрации масштаба производства, технологичности и высокого уровня организации процессов. Видео стало сильным инструментом визуального позиционирования компании и повышения доверия со стороны партнёров и клиентов."
            },

            {
                type: "image",
                src: zelal_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "РЕЗУЛЬТАТ",
                content: "Комплексная работа по фотосъёмке, видеопродакшену и разработке сайтов для Zelal Tekstil и Deniz Teks позволила значительно усилить позиционирование компаний на рынке. Предприятия получили современные инструменты для презентации производственных возможностей, эффективные digital-платформы для работы с клиентами и сильное визуальное сопровождение бренда. Это повысило узнаваемость, укрепило доверие партнёров и усилило репутацию компаний как надёжных и технологичных производителей."
            },
            {
                type: "image",
                src: zelal_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: zelal_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "https://zelaltekstil.uz/"
    },
    {
        id: "Chust_Textile",
        slug: "Chust_Textile",
        title: "Chust Textile",
        subtitle: "",
        category: "Маркетинг",
        year: "2024",
        client: "Chust Textile",
        thumbnail: chust_0,
        heroImage: chust_0,
        description: "Chust Textile — современное производственное предприятие, специализирующееся на выпуске трикотажного полотна и готовой одежды, сочетая качество, технологичность и стабильность производства.",
        sections: [
            {
                type: "text",
                title: "САЙТ",
                content: "Для Chust Textile был разработан корпоративный сайт с современной структурой и удобной навигацией для B2B аудиторию. В рамках проекта были подробно раскрыты производственные возможности, ассортимент трикотажного полотна и готовой одежды, а также преимущества компании для партнёров и клиентов. Сайт стал эффективным инструментом продаж и презентации бренда. "
            },
            {
                type: "text",
                title: "ФОТО ВИДЕО",
                content: "Для компании была организована профессиональная фото- и видеосъёмка производственных процессов, оборудования и готовой продукции. Основной акцент был сделан на качестве трикотажного полотна, деталях изделий и масштабе производства. Полученные материалы усилили визуальное позиционирование бренда и стали основой для маркетинговых инструментов компании."
            },
            {
                type: "text",
                title: "SMM",
                content: "Для Chust Textile была выстроена стратегия присутствия в социальных сетях с акцентом на экспертность, доверие и узнаваемость бренда. Контент включал производственные процессы, преимущества продукции, визуальное сопровождение предприятия и экспертные материалы. Это позволило укрепить репутацию компании и повысить интерес со стороны потенциальных клиентов и партнёров."
            },

            {
                type: "image",
                src: chust_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "РЕЗУЛЬТАТ",
                content: "Комплексная работа по разработке сайта, фото- и видеосъёмке, а также SMM-продвижению позволила значительно усилить позиционирование Chust Textile на рынке. Компания получила современный визуальный образ, эффективные инструменты продаж и стабильное digital-присутствие для работы с клиентами и партнёрами. Это повысило узнаваемость бренда, укрепило доверие аудитории и усилило репутацию предприятия как надёжного производителя трикотажного полотна и готовой одежды."
            },
            {
                type: "image",
                src: chust_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: chust_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "https://chusttextile.uz/"
    },
    {
        id: "Yustex",
        slug: "Yustex",
        title: "Yustex",
        subtitle: "",
        category: "Маркетинг",
        year: "2025",
        client: "Yustex",
        thumbnail: yustex_0,
        heroImage: yustex_0,
        description: "Yustex — производитель современной трикотажной одежды, специализирующийся на выпуске качественных изделий для внутреннего и международного рынка. Компания сочетает производственные мощности, контроль качества и актуальный подход к созданию востребованной продукции.",
        sections: [
            {
                type: "text",
                title: "Фотосессия",
                content: "Для Yustex была организована профессиональная фотосессия производственных процессов, оборудования и готовой трикотажной продукции. Основной акцент был сделан на качестве пошива, деталях изделий и визуальной презентации бренда. Полученные материалы стали основой для маркетинговых инструментов, каталога и digital-продвижения компании."
            },
            {
                type: "text",
                title: "САЙТ",
                content: "Был разработан корпоративный сайт Yustex с современной структурой и удобной навигацией для B2B и B2C-аудитории. В рамках проекта были раскрыты производственные возможности, ассортимент продукции и преимущества компании для партнёров и клиентов. Сайт стал эффективным инструментом продаж и укрепления доверия к бренду."
            },
            {
                type: "text",
                title: "БРЕНД",
                content: "Отдельно был разработан сайт для бренда AKYUS с акцентом на премиальное позиционирование и современную подачу продукта. Визуальная концепция, структура и контент были выстроены таким образом, чтобы подчеркнуть стиль, качество и уникальность бренда. Сайт стал важной частью формирования сильного имиджа AKYUS на рынке."
            },

            {
                type: "image",
                src: yustex_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "РЕЗУЛЬТАТ",
                content: "Комплексная работа по фотосъёмке, разработке корпоративного сайта и созданию сайта для бренда AKYUS позволила значительно усилить позиционирование Yustex на рынке. Компания получила сильный визуальный образ, современные инструменты продаж и эффективную digital-платформу для работы с клиентами и партнёрами. Это повысило узнаваемость бренда, укрепило доверие аудитории и усилило репутацию предприятия как надёжного производителя качественной трикотажной одежды."
            },
            {
                type: "image",
                src: yustex_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: yustex_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "https://yustex.uz/"
    },
    {
        id: "Zarhal_Group",
        slug: "Zarhal_Group",
        title: "Zarhal Group",
        subtitle: "",
        category: "Маркетинг",
        year: "2025",
        client: "Zarhal Group",
        thumbnail: zarhal_0,
        heroImage: zarhal_0,
        description: "Experimental digital art project exploring the boundaries between technology and creativity.",
        sections: [
            {
                type: "text",
                title: "Сайт",
                content: "Для Zarhal Group был создан корпоративный сайт с современной структурой, удобной навигацией и сильной визуальной подачей. Платформа была разработана для того, чтобы эффективно представить продукцию компании, повысить доверие к бренду и улучшить коммуникацию с партнёрами и клиентами как на локальном, так и на международном рынке."
            },
            {
                type: "text",
                title: "Фотосессия",
                content: "Была организована брендированная фотосессия, которая подчеркнула производство, команду и качество продукции компании. Качественный визуальный контент помогает Zarhal Group усиливать имидж бренда, улучшать презентационные материалы и формировать более профессиональное присутствие на digital-площадках и в маркетинговых каналах."
            },
            {
                type: "text",
                title: "Консультации",
                content: "Мы провели стратегические маркетинговые консультации, направленные на позиционирование бренда, восприятие клиентов и повышение узнаваемости на рынке. Наши рекомендации помогли усилить коммуникацию с клиентами, укрепить идентичность компании и выстроить более эффективную долгосрочную стратегию продвижения для роста бизнеса."
            },

            {
                type: "image",
                src: zarhal_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: zarhal_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: zarhal_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "https://zarhalgroup.uz/"
    }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
};

// Helper function to get next/previous projects
export const getAdjacentProjects = (currentSlug: string) => {
    const currentIndex = projects.findIndex(p => p.slug === currentSlug);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;

    return {
        prev: projects[prevIndex],
        next: projects[nextIndex]
    };
};