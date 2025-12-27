import {Locale} from "@/i18n-config.ts";
import {getDictionary} from "@/lib/dictionary.ts";
import ContactForm from "@/components/contact/form.tsx";

interface HomeProps {
    params: Promise<{ lang: Locale }>;
}

export default async function Page({params}: HomeProps) {
    const {lang} = await params;
    const dict = await getDictionary(lang);
    return (
        <div>
            <ContactForm/>
        </div>
    );
}

