import type {Metadata, Viewport} from "next";
import {Instrument_Sans, Inter_Tight, Montserrat} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "../components/ThemeProvider";
import AosAnimate from "@/components/AOS_animate";
import SlowScroll from "@/components/SlowScroll";
import Cursor from "@/components/cursor";
import Script from "next/script";


const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const interTight = Inter_Tight({
    variable: "--font-inter-tight",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Yokubov Shamsiddin",
    description: "Strategic Marketing for Manufacturers",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning className="">
        <body
            className={`${montserrat.variable} `}
            suppressHydrationWarning
        >

        {/* Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LF8N7E9WD0"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LF8N7E9WD0');
            `}
        </Script>

        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
                (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108789234', 'ym');
                ym(108789234, 'init', {
                    ssr: true,
                    webvisor: true,
                    clickmap: true,
                    ecommerce: "dataLayer",
                    accurateTrackBounce: true,
                    trackLinks: true
                });
            `}
        </Script>
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/108789234"
                    style={{position: 'absolute', left: '-9999px'}}
                    alt=""
                />
            </div>
        </noscript>

        <ThemeProvider>
            <SlowScroll>
                <Cursor />
                {children}
                <AosAnimate />
            </SlowScroll>
        </ThemeProvider>
        </body>
        </html>
    );
}