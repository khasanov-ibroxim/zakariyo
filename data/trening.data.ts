import {StaticImageData} from "next/image";

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
import tit_1_3 from "@/assets/work/trening__tit_1/IMG_0417.jpg"

import tit_2_0 from "@/assets/work/trening__tit_2/tit_2_0.jpg"
import tit_2_1 from "@/assets/work/trening__tit_2/tit_2_1.jpg"
import tit_2_2 from "@/assets/work/trening__heimtextil/138A6923.jpg"
import tit_2_3 from "@/assets/work/trening__heimtextil/138A6962.jpg"




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
        category: "Семинар",
        year: "2025",
        client: "Global Textile Days",
        thumbnail: bakan_0,
        heroImage: bakan_0,
        description: "Данное мероприятие прошло в рамках международной выставки Textile Expo Uzbekistan, объединившей ведущих представителей текстильной отрасли, производителей, экспортёров и экспертов рынка для обсуждения новых возможностей развития, сотрудничества и масштабирования бизнеса.",
        sections: [
            {
                type: "text",
                title: "",
                content: "Участие в Global Textile Days стало важной возможностью для обмена опытом с представителями текстильной отрасли, руководителями фабрик и международными партнёрами. В рамках мероприятия была представлена тема «6P+F: Формула роста для фабрик», где основной акцент был сделан на системном развитии предприятий через маркетинг, позиционирование и стратегическое управление."
            },
            {
                type: "text",
                title: "",
                content: "Во время выступления были рассмотрены ключевые инструменты масштабирования фабрик: построение сильного бренда, работа с экспортными рынками, цифровой маркетинг, повышение доверия со стороны клиентов и создание устойчивой бизнес-модели. Особое внимание было уделено тому, как фабрики могут выйти за рамки стандартного производства и стать полноценными конкурентоспособными игроками на международном рынке."
            },
            {
                type: "text",
                title: "",
                content: "Подобные мероприятия подтверждают, что современный текстильный бизнес требует не только производственных мощностей, но и сильной маркетинговой стратегии. Обмен практическими кейсами, профессиональный диалог и новые деловые связи становятся важной частью роста как для отдельных предприятий, так и для всей отрасли в целом."
            },

            {
                type: "image",
                src: bakan_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "",
                content: "Участие в Global Textile Days стало важной площадкой для обмена опытом с представителями текстильной отрасли и международными партнёрами. Была представлена тема «6P+F: Формула роста для фабрик»,посвящённая маркетингу, позиционированию и стратегическому развитию предприятий."
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
        liveUrl: "#"
    },
    {
        id: "Heimtextil",
        slug: "heimtextil",
        title: "Heimtextil",
        subtitle: "",
        category: "Семинар",
        year: "2025",
        client: "Heimtextil",
        thumbnail: osborn_0,
        heroImage: osborn_0,
        description: "Мероприятие объединило ведущих представителей текстильной отрасли, производителей, экспортёров и международных партнёров для обмена опытом и новыми решениями.",
        sections: [
            {
                type: "text",
                title: "",
                content: "Данное мероприятие прошло в рамках международных выставок Heimtextil Uzbekistan, Apparel Sourcing Tashkent и Texworld Tashkent, объединивших ведущих представителей текстильной отрасли, производителей, экспортёров и экспертов для обсуждения современных подходов к развитию бизнеса и цифровой трансформации предприятий."
            },
            {
                type: "text",
                title: "",
                content: "Практическая сессия была посвящена теме «Digital — трансформация текстильного бизнеса», где основной акцент был сделан на внедрении современных маркетинговых инструментов, цифровых решений и стратегий продвижения для фабрик и производственных компаний. Участники обсудили, как digital-подход помогает усиливать позиции бренда, повышать узнаваемость и выстраивать эффективную коммуникацию с международными партнёрами."
            },
            {
                type: "text",
                title: "",
                content: "Особое внимание было уделено вопросам системного роста предприятий: от создания сильного позиционирования и упаковки бренда до выхода на экспортные рынки и повышения конкурентоспособности. Подобные мероприятия становятся важной площадкой для обмена практическим опытом, профессионального диалога и формирования новых возможностей для развития текстильной отрасли."
            },

            {
                type: "image",
                src: osborn_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "",
                content: "Мероприятие прошло в рамках международных выставок Heimtextil Uzbekistan, Apparel Sourcing Tashkent и Texworld Tashkent. Основной темой стала digital-трансформация текстильного бизнеса, маркетинг, продвижение бренда и развитие фабрик на международных рынках."
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
        title: "ТИТЛП 11 ноябрь",
        subtitle: "",
        category: "Семинар",
        year: "2025",
        client: "ТИТЛП",
        thumbnail: tit_1_0,
        heroImage: tit_1_0,
        description: "",
        sections: [
            {
                type: "text",
                title: "",
                content: "Данное мероприятие прошло в Ташкентском институте текстильной и лёгкой промышленности в формате открытой лекции для студентов-маркетологов, где основной темой стала digital-трансформация текстильного бизнеса. Встреча была посвящена тому, как современные маркетинговые инструменты помогают производственным компаниям адаптироваться к новым условиям рынка, усиливать свои позиции и формировать конкурентоспособные бренды."
            },
            {
                type: "text",
                title: "",
                content: "В ходе лекции были рассмотрены практические кейсы из текстильной отрасли, вопросы позиционирования фабрик, построения сильного бренда и выхода на экспортные рынки. Особое внимание было уделено тому, как digital-маркетинг влияет на узнаваемость предприятия, доверие со стороны международных партнёров и развитие долгосрочной стратегии роста как на локальном, так и на зарубежных рынках."
            },
            {
                type: "text",
                title: "",
                content: "Важной частью встречи стал открытый диалог со студентами, где обсуждались реальные задачи бизнеса, современные вызовы отрасли и роль маркетинга в развитии производственных предприятий. Подобные лекции помогают объединять образование и практику, формируя новое поколение специалистов, готовых развивать текстильную индустрию Узбекистана на современном уровне."
            },

            {
                type: "image",
                src: tit_1_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: tit_1_2,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: tit_1_3,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "#"
    },
    {
        id: "titlp_2025_1",
        slug: "titlp_2025_1",
        title: "ТИТЛП 18 ноябрь",
        subtitle: "",
        category: "Семинар",
        year: "2025",
        client: "ТИТЛП",
        thumbnail: tit_2_0,
        heroImage: tit_2_0,
        description: "",
        sections: [
            {
                type: "text",
                title: "",
                content: "Данное мероприятие прошло в Ташкентском институте текстильной и лёгкой промышленности в формате практической лекции для студентов 2, 3 и 4 курсов, изучающих маркетинг и управление в текстильной отрасли. Основной целью встречи стало знакомство будущих специалистов с реальными бизнес-процессами, современными инструментами продвижения и практическими кейсами, которые используются в работе текстильных предприятий."
            },
            {
                type: "text",
                title: "",
                content: "В ходе лекции были подробно рассмотрены вопросы построения бренда, позиционирования фабрик на внутреннем и международном рынках, а также роль digital-маркетинга в развитии производственных компаний. Особое внимание было уделено реальным примерам из текстильной сферы, где маркетинговая стратегия напрямую влияет на экспорт, продажи и узнаваемость предприятия среди клиентов и партнёров."
            },
            {
                type: "text",
                title: "",
                content: "Отдельную ценность мероприятию придал живой диалог со студентами, их активное участие в обсуждении и интерес к практическим знаниям. Такие встречи помогают формировать новое поколение специалистов, которые будут понимать не только теорию, но и реальные задачи отрасли, а также смогут применять современные маркетинговые подходы в будущей профессиональной деятельности."
            },

            {
                type: "image",
                src: tit_2_1,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: tit_2_0,
                alt: "Laptop mockup"
            }
        ],
        gallery: [],
        liveUrl: "#"
    }
];


export const getTreningsBySlug = (slug: string): Project | undefined => {
    return trenings.find(project => project.slug === slug);
};

