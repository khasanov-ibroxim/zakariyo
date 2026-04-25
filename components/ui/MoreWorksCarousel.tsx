'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
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

const CARD_WIDTH = 500;
const GAP = 20;
const SPEED = 0.3; // px per frame — sekinroq

export default function MoreWorksCarousel({ works, lang, title }: Props) {
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const positionRef = useRef(0);

    // Drag / swipe state
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragStartPos = useRef(0);
    const hasDragged = useRef(false);

    const STEP = CARD_WIDTH + GAP;
    const totalOriginal = works.length;

    // Triple-duplicate for seamless loop
    const items = [...works, ...works, ...works];
    const oneSetWidth = totalOriginal * STEP;

    // Update active dot based on current position
    const updateActive = useCallback((pos: number) => {
        const normalized = pos % oneSetWidth;
        const idx = Math.round(normalized / STEP) % totalOriginal;
        setActiveIndex((idx + totalOriginal) % totalOriginal);
    }, [oneSetWidth, STEP, totalOriginal]);

    // Auto-scroll animation
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const animate = () => {
            if (!isPaused && !isDragging.current) {
                positionRef.current += SPEED;
                if (positionRef.current >= oneSetWidth * 2) {
                    positionRef.current -= oneSetWidth;
                }
                track.style.transform = `translateX(-${positionRef.current}px)`;
                updateActive(positionRef.current);
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused, oneSetWidth, updateActive]);

    // Jump to a specific original index
    const goToIndex = (idx: number) => {
        positionRef.current = oneSetWidth + idx * STEP;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
        setActiveIndex(idx);
    };

    // ── Mouse drag ──────────────────────────────────────────
    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        hasDragged.current = false;
        dragStartX.current = e.clientX;
        dragStartPos.current = positionRef.current;
        setIsPaused(true);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = dragStartX.current - e.clientX;
        if (Math.abs(delta) > 3) hasDragged.current = true;
        positionRef.current = dragStartPos.current + delta;
        // wrap
        if (positionRef.current < 0) positionRef.current += oneSetWidth;
        if (positionRef.current >= oneSetWidth * 2) positionRef.current -= oneSetWidth;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
        updateActive(positionRef.current);
    };

    const onMouseUp = () => {
        isDragging.current = false;
        setIsPaused(false);
    };

    // ── Touch swipe ─────────────────────────────────────────
    const onTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
        hasDragged.current = false;
        dragStartX.current = e.touches[0].clientX;
        dragStartPos.current = positionRef.current;
        setIsPaused(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) return;
        const delta = dragStartX.current - e.touches[0].clientX;
        if (Math.abs(delta) > 3) hasDragged.current = true;
        positionRef.current = dragStartPos.current + delta;
        if (positionRef.current < 0) positionRef.current += oneSetWidth;
        if (positionRef.current >= oneSetWidth * 2) positionRef.current -= oneSetWidth;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
        updateActive(positionRef.current);
    };

    const onTouchEnd = () => {
        isDragging.current = false;
        setIsPaused(false);
    };

    return (
        <div className="pb-20 select-none">
            <h2 className="text-5xl font-bold mb-10 px-5 container mx-auto">{title}</h2>

            {/* Track */}
            <div
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => { setIsPaused(false); isDragging.current = false; }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    ref={trackRef}
                    className="flex will-change-transform"
                    style={{ width: 'max-content', gap: `${GAP}px` }}
                >
                    {items.map((work, index) => (
                        <Link
                            key={`${work.id}-${index}`}
                            href={hasDragged.current ? '#' : `/${lang}/work/${work.slug}`}
                            onClick={(e) => { if (hasDragged.current) e.preventDefault(); }}
                            draggable={false}
                        >
                            <div
                                className="relative rounded-3xl overflow-hidden group cursor-pointer flex-shrink-0"
                                style={{ height: '400px', width: `${CARD_WIDTH}px` }}
                            >
                                <Image
                                    src={work.thumbnail}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="500px"
                                    draggable={false}
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

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
                {works.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            activeIndex === idx
                                ? 'w-6 h-2.5 bg-black dark:bg-white'
                                : 'w-2.5 h-2.5 bg-black/30 dark:bg-white/30 hover:bg-black/60 dark:hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}