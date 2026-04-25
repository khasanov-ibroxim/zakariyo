import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/data/portfolio.data';
import { getTreningBySlug, getTrenings } from '@/data/trening.data';
import { notFound } from 'next/navigation';
import { i18n, Locale } from '@/i18n-config';
import ClientScrollAnimation from '@/components/ui/ClientScrollAnimation';
import ClientAnimation from '@/components/ui/ClientAnimation';
import { getDictionary } from "@/lib/dictionary";
import MoreWorksCarousel from '@/components/ui/MoreWorksCarousel';

type WorkDictionary = {
    client: string;
    year: string;
    category: string;
    liveProject: string;
    visitSite: string;
    moreWorks: string;
};

type PageProps = {
    params: Promise<{
        lang: Locale;
        slug: string;
    }>;
}

// ✅ Barcha sluglar: portfolio + trening, barcha tillar uchun
export async function generateStaticParams() {
    const params: Array<{ lang: string; slug: string }> = [];

    for (const locale of i18n.locales) {
        const portfolioSlugs = getProjects(locale).map(p => p.slug);
        const treningSlugs = getTrenings(locale).map(t => t.slug);
        const allSlugs = [...portfolioSlugs, ...treningSlugs];

        for (const slug of allSlugs) {
            params.push({ lang: locale, slug });
        }
    }

    return params;
}

export const dynamicParams = false;

export default async function WorkDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { slug, lang } = resolvedParams;

    const dict = await getDictionary(lang, 'work') as WorkDictionary;

    // ✅ Avval portfolio dan qidiradi, topa olmasa trening dan
    const project = getProjectBySlug(slug, lang) ?? getTreningBySlug(slug, lang);

    if (!project) {
        notFound();
    }

    // ✅ Barcha portfolio + trening (hozirgi slugsiz)
    const portfolioItems = getProjects(lang);
    const treningItems = getTrenings(lang);
    const otherProjects = [...portfolioItems, ...treningItems].filter(p => p.slug !== slug);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                <div className="absolute inset-0 bg-black/70 flex items-end">
                    <div className="container mx-auto px-5 pb-20">
                        <ClientAnimation>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-8 text-white">
                                <div>
                                    <p className="text-sm opacity-60 mb-1">{dict.client}</p>
                                    <p className="text-xl font-bold">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-sm opacity-60 mb-1">{dict.year}</p>
                                    <p className="text-xl font-bold">{project.year}</p>
                                </div>
                                <div>
                                    <p className="text-sm opacity-60 mb-1">{dict.category}</p>
                                    <p className="text-xl font-bold">{project.category}</p>
                                </div>
                                {project.liveUrl !== "#" && (
                                    <div>
                                        <p className="text-sm opacity-60 mb-1">{dict.liveProject}</p>
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-bold flex items-center gap-2 hover:opacity-70 transition"
                                        >
                                            {dict.visitSite} <ArrowUpRight size={20} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </ClientAnimation>
                    </div>
                </div>
            </div>

            {/* Project Description */}
            <div className="container mx-auto px-5 py-20">
                <ClientScrollAnimation>
                    <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl">
                        {project.description}
                    </p>
                </ClientScrollAnimation>
            </div>

            {/* Project Sections */}
            <div className="container mx-auto px-5 space-y-20 pb-20">
                {project.sections.map((section, index) => (
                    <ClientScrollAnimation key={index} delay={index * 0.1}>
                        {section.type === 'text' && (
                            <div className="flex flex-col lg:flex-row gap-10">
                                <div className="lg:w-1/3">
                                    <h2 className="text-4xl font-bold lg:sticky lg:top-20">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="lg:w-2/3">
                                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        )}

                        {section.type === 'image' && section.src && section.alt && (
                            <div className="relative w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden">
                                <Image
                                    src={section.src}
                                    alt={section.alt}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                        )}
                    </ClientScrollAnimation>
                ))}
            </div>

            {/* More Works Carousel - barcha portfolio + trening */}
            {otherProjects.length > 0 && (
                <MoreWorksCarousel
                    works={otherProjects}
                    lang={lang}
                    title={dict.moreWorks}
                />
            )}
        </div>
    );
}