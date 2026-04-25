import {StaticImageData} from "next/image";

import bakan_0 from "@/assets/work/bakan/bakan_0.jpg"
import bakan_1 from "@/assets/work/bakan/bakan_1.jpg"
import bakan_2 from "@/assets/work/bakan/bakan_2.jpg"
import bakan_3 from "@/assets/work/bakan/bakan_3.jpg"

import osborn_0 from "@/assets/work/osborn/osborn_0.jpg"
import osborn_1 from "@/assets/work/osborn/osborn_1.jpg"
import osborn_2 from "@/assets/work/osborn/osborn_2.jpg"
import osborn_3 from "@/assets/work/osborn/osborn_3.jpg"




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

export const trenings: Project[] = [
    {
        id: "Global_Textile_Days",
        slug: "global_textile_days",
        title: "Global Textile Days",
        subtitle: "",
        category: "",
        year: "2025",
        client: "Global Textile Days",
        thumbnail: bakan_2,
        heroImage: bakan_0,
        description: "Step into a world of creativity and craftsmanship at Xiong Wall, where we bring together artisans from around the globe to showcase their unique creations. As a premier marketplace for artisanal goods.",
        sections: [
            {
                type: "text",
                title: "RESEARCH",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "text",
                title: "DESIGN",
                content: "Usability and Accessibility: Good design considers the needs and preferences of users, ensuring that the website is easy to navigate and understand. Intuitive navigation, clear hierarchy, and logical organization of content enhance usability and accessibility, allowing users to find what they are looking for quickly and easily"
            },
            {
                type: "text",
                title: "DEVELOPMENT",
                content: "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings"
            },

            {
                type: "image",
                src: bakan_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
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
        liveUrl: "https://wpriverthemes.com/bronx/work-detail2-dark/"
    },
    {
        id: "Heimtextil",
        slug: "heimtextil",
        title: "Heimtextil",
        subtitle: "",
        category: "",
        year: "2025",
        client: "Heimtextil",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        description: "A revolutionary automotive photography project capturing the essence of electric vehicle innovation and design.",
        sections: [
            {
                type: "text",
                title: "RESEARCH",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "text",
                title: "DESIGN",
                content: "Usability and Accessibility: Good design considers the needs and preferences of users, ensuring that the website is easy to navigate and understand. Intuitive navigation, clear hierarchy, and logical organization of content enhance usability and accessibility, allowing users to find what they are looking for quickly and easily"
            },
            {
                type: "text",
                title: "DEVELOPMENT",
                content: "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings"
            },

            {
                type: "image",
                src: osborn_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
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
        liveUrl: "#"
    },
    {
        id: "titlp_2025",
        slug: "titlp_2025",
        title: "ТИТЛП",
        subtitle: "",
        category: "",
        year: "2025",
        client: "ТИТЛП",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        description: "",
        sections: [
            {
                type: "text",
                title: "RESEARCH",
                content: "Данное мероприятие прошло в Ташкентском институте текстильной и лёгкой промышленности в формате открытой лекции для студентов-маркетологов, где основной темой стала digital-трансформация текстильного бизнеса. Встреча была посвящена тому, как современные маркетинговые инструменты помогают производственным компаниям адаптироваться к новым условиям рынка, усиливать свои позиции и формировать конкурентоспособные бренды."
            },
            {
                type: "text",
                title: "DESIGN",
                content: "В ходе лекции были рассмотрены практические кейсы из текстильной отрасли, вопросы позиционирования фабрик, построения сильного бренда и выхода на экспортные рынки. Особое внимание было уделено тому, как digital-маркетинг влияет на узнаваемость предприятия, доверие со стороны международных партнёров и развитие долгосрочной стратегии роста как на локальном, так и на зарубежных рынках."
            },
            {
                type: "text",
                title: "DEVELOPMENT",
                content: "Важной частью встречи стал открытый диалог со студентами, где обсуждались реальные задачи бизнеса, современные вызовы отрасли и роль маркетинга в развитии производственных предприятий. Подобные лекции помогают объединять образование и практику, формируя новое поколение специалистов, готовых развивать текстильную индустрию Узбекистана на современном уровне."
            },

            {
                type: "image",
                src: osborn_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
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
        liveUrl: "#"
    },
    {
        id: "titlp_2025_1",
        slug: "titlp_2025_1",
        title: "ТИТЛП",
        subtitle: "",
        category: "",
        year: "2025",
        client: "ТИТЛП",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        description: "",
        sections: [
            {
                type: "text",
                title: "RESEARCH",
                content: "Данное мероприятие прошло в Ташкентском институте текстильной и лёгкой промышленности в формате практической лекции для студентов 2, 3 и 4 курсов, изучающих маркетинг и управление в текстильной отрасли. Основной целью встречи стало знакомство будущих специалистов с реальными бизнес-процессами, современными инструментами продвижения и практическими кейсами, которые используются в работе текстильных предприятий."
            },
            {
                type: "text",
                title: "DESIGN",
                content: "В ходе лекции были подробно рассмотрены вопросы построения бренда, позиционирования фабрик на внутреннем и международном рынках, а также роль digital-маркетинга в развитии производственных компаний. Особое внимание было уделено реальным примерам из текстильной сферы, где маркетинговая стратегия напрямую влияет на экспорт, продажи и узнаваемость предприятия среди клиентов и партнёров."
            },
            {
                type: "text",
                title: "DEVELOPMENT",
                content: "Отдельную ценность мероприятию придал живой диалог со студентами, их активное участие в обсуждении и интерес к практическим знаниям. Такие встречи помогают формировать новое поколение специалистов, которые будут понимать не только теорию, но и реальные задачи отрасли, а также смогут применять современные маркетинговые подходы в будущей профессиональной деятельности."
            },

            {
                type: "image",
                src: osborn_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
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
        liveUrl: "#"
    }
];


export const getTreningsBySlug = (slug: string): Project | undefined => {
    return trenings.find(project => project.slug === slug);
};

