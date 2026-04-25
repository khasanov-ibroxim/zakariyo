'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

type WorkItem = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    year: string;
    thumbnail: string | StaticImageData;
};

type Props = {
    works: WorkItem[];
    lang: string;
    title: string;
};

export default function MoreWorksCarousel({ works, lang, title }: Props) {
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const positionRef = useRef(0);
    const SPEED = 0.5; // px per frame

    // Duplicate items for infinite loop
    const items = [...works, ...works, ...works];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const cardWidth = track.scrollWidth / 3; // original set width

        const animate = () => {
            if (!isPaused) {
                positionRef.current += SPEED;
                if (positionRef.current >= cardWidth) {
                    positionRef.current = 0;
                }
                track.style.transform = `translateX(-${positionRef.current}px)`;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused]);

    return (
        <div className="pb-20">
            <h2 className="text-5xl font-bold mb-10 px-5 container mx-auto">{title}</h2>
            <div
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    ref={trackRef}
                    className="flex gap-5 will-change-transform"
                    style={{ width: 'max-content' }}
                >
                    {items.map((work, index) => (
                        <Link
                            key={`${work.id}-${index}`}
                            href={`/${lang}/work/${work.slug}`}
                        >
                            <div className="relative h-[400px] w-[500px] rounded-3xl overflow-hidden group cursor-pointer flex-shrink-0">
                                <Image
                                    src={work.thumbnail}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="500px"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <h3 className="text-white text-3xl font-bold mb-2">{work.title}</h3>
                                    <p className="text-white/80 text-lg">{work.subtitle}</p>
                                    <span className="text-white/60 text-sm mt-2">{work.year}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}