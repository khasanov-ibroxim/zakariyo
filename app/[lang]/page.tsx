import {ThemeToggle} from "@/components/ThemeToggle";
import {getDictionary} from "@/lib/dictionary.ts";
import {Locale} from "@/i18n-config.ts";
import HomeHeader from "@/components/home/home_header.tsx";
import FeaturedWork from "@/components/home/Featured_Work.tsx";
import HomeAbout from "@/components/home/home_about.tsx";
import Expertise from "@/components/home/expertise.tsx";


interface HomeProps {
    params: Promise<{ lang: Locale }>;
}

export default async function Home({params}:HomeProps){
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return(
        <>
            <HomeHeader/>
            <FeaturedWork/>
            <HomeAbout/>
            <Expertise/>
            {/*<div className="min-h-screen bg-white dark:bg-gray-950">*/}
            {/*    <div className="mx-auto px-4 py-8 max-w-7xl">*/}
            {/*        <ThemeToggle/>*/}

            {/*        /!* Test Section *!/*/}
            {/*        <div className="mt-8 space-y-4">*/}
            {/*            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">*/}
            {/*                Dark & Light mode ishlayapti 😎*/}
            {/*            </h1>*/}

            {/*            <p className="text-gray-700 dark:text-gray-300">*/}
            {/*                Bu yerda ranglar to'g'ri ishlashi kerak. Dark mode va Light mode o'rtasida almashinadi.*/}
            {/*            </p>*/}

            {/*            /!* Cards *!/*/}
            {/*            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">*/}
            {/*                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">*/}
            {/*                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">*/}
            {/*                        Card 1*/}
            {/*                    </h3>*/}
            {/*                    <p className="text-gray-600 dark:text-gray-400">*/}
            {/*                        Bu karta ranglar bilan test qilish uchun*/}
            {/*                    </p>*/}
            {/*                </div>*/}

            {/*                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">*/}
            {/*                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">*/}
            {/*                        Card 2*/}
            {/*                    </h3>*/}
            {/*                    <p className="text-gray-600 dark:text-gray-400">*/}
            {/*                        Bu ham ranglar bilan test qilish uchun*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}