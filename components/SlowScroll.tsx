"use client"
import React, {useEffect} from 'react';
import Lenis from "lenis";
import 'lenis/dist/lenis.css'; // Agar CSS kerak bo'lsa

const SlowScroll: React.FC<{children: React.ReactNode}> = ({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 4, // Scroll tezligi (katta = sekinroq)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: 'vertical', // vertical yoki horizontal
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8, // Mouse wheel sensitivligi
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SlowScroll;