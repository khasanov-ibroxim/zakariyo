"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg px-4 py-2 transition
            bg-white text-black
                 dark:bg-black dark:text-white"
        >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
}
