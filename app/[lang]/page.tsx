
import {getDictionary} from "@/lib/dictionary.ts";
import {Locale} from "@/i18n-config.ts";
import HomeHeader from "@/components/home/home_header.tsx";
import FeaturedWork from "@/components/home/Featured_Work.tsx";
import HomeAbout from "@/components/home/home_about.tsx";
import Expertise from "@/components/home/expertise.tsx";
import Motivation from "@/components/home/motivation.tsx";
import Experience from "@/components/home/experience.tsx";
import FavoriteStack from "@/components/home/FavoriteStack.tsx";
import Awwards from "@/components/home/awwards.tsx";
import Trusted from "@/components/home/trusted.tsx";
import Questions from "@/components/home/questions.tsx";


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
            <Motivation/>
            <Experience/>
            <FavoriteStack/>
            <Awwards/>
            <Trusted/>
            <Questions/>
        </>
    )
}