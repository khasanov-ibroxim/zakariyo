"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
                relative overflow-hidden
                font-inter-tight cursor-pointer
                font-bold uppercase
                border-2 border-border
                rounded-3xl
                sm:text-[18px]
                sm:py-2 sm:px-6
                text-[14px]
                py-1 px-4
                text-black dark:text-white
                transition-colors duration-500

                before:absolute before:inset-0
                before:z-0
                before:bg-black dark:before:bg-white
                before:origin-bottom
                before:scale-y-0
                before:transition-transform before:duration-500
                before:ease-out
                before:content-['']

                hover:before:scale-y-100
                hover:text-white dark:hover:text-black
            "
        >
            <span className="relative z-10">
                {theme === "dark" ? "Light" : "Dark"}
            </span>
        </button>
    );
}