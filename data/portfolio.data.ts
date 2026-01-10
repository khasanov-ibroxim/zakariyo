import {StaticImageData} from "next/image";
import xiong_thumb from "@/assets/work/xiong-wall/xiong_thumb.png"
import xiong_1 from "@/assets/work/xiong-wall/1.png"
import xiong_2 from "@/assets/work/xiong-wall/2.png"
import xiong_3 from "@/assets/work/xiong-wall/3.png"
import xiong_4 from "@/assets/work/xiong-wall/4.png"

import lightric_thumb from "@/assets/work/lightric-motors/lightric_thumb.png"
import lightric_1 from "@/assets/work/lightric-motors/1.png"
import lightric_2 from "@/assets/work/lightric-motors/2.png"
import lightric_3 from "@/assets/work/lightric-motors/3.png"
import lightric_4 from "@/assets/work/lightric-motors/4.png"

import hideway_thumb from "@/assets/work/hideway/hideway_thumb.png"

import califfo_thumb from "@/assets/work/califfo/califfo_thumb.png"
import califfo_1 from "@/assets/work/califfo/1.jpg"
import califfo_2 from "@/assets/work/califfo/2.png"
import califfo_3 from "@/assets/work/califfo/3.jpg"
import califfo_4 from "@/assets/work/califfo/4.jpg"

import urban_thumb from "@/assets/work/urban-project/urban_thumb.png"

import digital_thumb from "@/assets/work/digital-art/digital_thumb.png"

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
        subtitle: "Marketplace",
        category: "MARKETPLACE",
        year: "2024",
        client: "Bakan Tex",
        thumbnail: xiong_thumb,
        heroImage: xiong_1,
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
                src: xiong_2,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: xiong_3,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: xiong_4,
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
        id: "Osborn_Textile",
        slug: "Osborn_Textile",
        title: "Osborn Textile",
        subtitle: "Photography",
        category: "PHOTOGRAPHY",
        year: "2024",
        client: "Osborn Textile",
        thumbnail: lightric_thumb,
        heroImage: lightric_1,
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
                src: lightric_2,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: lightric_3,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: lightric_4,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "#"
    },
    {
        id: "Zelal_Tekstil",
        slug: "Zelal_Tekstil",
        title: "Zelal Tekstil",
        subtitle: "Web Design",
        category: "WEB DESIGN",
        year: "2022",
        client: "Zelal Tekstil",
        thumbnail: hideway_thumb,
        heroImage: hideway_thumb,
        description: "Modern web design project featuring abstract geometric shapes and minimalist aesthetics.",
        sections: [
            {
                type: "text",
                title: "DESIGN",
                content: "Creating immersive digital experiences through innovative web design and user interface solutions."
            }
        ],
        gallery: [],
        liveUrl: "#"
    },
    {
        id: "Chust_Textile",
        slug: "Chust_Textile",
        title: "Chust Textile",
        subtitle: "Branding",
        category: "BRANDING",
        year: "2022",
        client: "Chust Textile",
        thumbnail: califfo_thumb,
        heroImage: califfo_1,
        description: "Complete branding solution with emphasis on modern typography and clean visual identity.",
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
                src: califfo_2,
                alt: "Portrait photography"
            },
            {
                type: "text",
                title: "CONCEPT",
                content: "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites"
            },
            {
                type: "image",
                src: califfo_3,
                alt: "Laptop mockup"
            },
            {
                type: "image",
                src: califfo_4,
                alt: "Fluid design"
            }
        ],
        gallery: [],
        liveUrl: "#"
    },
    {
        id: "Artatex",
        slug: "Artatex",
        title: "Artatex",
        subtitle: "Architecture",
        category: "ARCHITECTURE",
        year: "2024",
        client: "Artatex",
        thumbnail: urban_thumb,
        heroImage: urban_thumb,
        description: "Architectural visualization project showcasing modern urban design and sustainable building practices.",
        sections: [
            {
                type: "text",
                title: "VISUALIZATION",
                content: "Creating photorealistic architectural renderings that bring design concepts to life."
            }
        ],
        gallery: [],
        liveUrl: "#"
    },
    {
        id: "Trend_Tex",
        slug: "Trend_Tex",
        title: "Trend Tex",
        subtitle: "Art Direction",
        category: "ART DIRECTION",
        year: "2023",
        client: "Trend Tex",
        thumbnail: digital_thumb,
        heroImage: digital_thumb,
        description: "Experimental digital art project exploring the boundaries between technology and creativity.",
        sections: [
            {
                type: "text",
                title: "CREATIVE",
                content: "Pushing creative boundaries through innovative digital art and experimental design techniques."
            }
        ],
        gallery: [],
        liveUrl: "#"
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