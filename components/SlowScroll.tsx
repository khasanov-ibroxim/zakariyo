"use client"
import { useEffect } from "react";

export default function SlowScroll() {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            window.scrollBy({
                top: e.deltaY * 0.7, // 0.3 → scrollni sekinlashtiradi
                behavior: "auto",
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return null;
}
