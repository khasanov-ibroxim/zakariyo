// lib/dictionary.ts
import { Locale } from '@/i18n-config';

const pageDictionaries = {
    home: {
        en: () => import('@/dictionaries/home/en.json').then((m) => m.default),
        ru: () => import('@/dictionaries/home/ru.json').then((m) => m.default),
    },
    work: {
        en: () => import('@/dictionaries/work/en.json').then((m) => m.default),
        ru: () => import('@/dictionaries/work/ru.json').then((m) => m.default),
    },
    contact: {
        en: () => import('@/dictionaries/contact/en.json').then((m) => m.default),
        ru: () => import('@/dictionaries/contact/ru.json').then((m) => m.default),
    },
    common: {
        en: () => import('@/dictionaries/common/en.json').then((m) => m.default),
        ru: () => import('@/dictionaries/common/ru.json').then((m) => m.default),
    },
} as const;

export type PageType = keyof typeof pageDictionaries;

type DictionaryReturnType<T extends PageType> = Awaited<
    ReturnType<(typeof pageDictionaries)[T]['en']>
>;

// ✅ Get dictionary for specific page — generic return type
export const getDictionary = async <T extends PageType>(
    locale: Locale,
    page: T
): Promise<DictionaryReturnType<T>> => {
    try {
        if (!pageDictionaries[page]) {
            console.error(`Page "${page}" not found in dictionaries`);
            throw new Error(`Invalid page: ${page}`);
        }

        if (!pageDictionaries[page][locale]) {
            console.warn(`Dictionary for ${page}/${locale} not found, falling back to en`);
            return pageDictionaries[page].en() as Promise<DictionaryReturnType<T>>;
        }

        return pageDictionaries[page][locale]() as Promise<DictionaryReturnType<T>>;
    } catch (error) {
        console.error(`Error loading dictionary for ${page}/${locale}:`, error);

        if (pageDictionaries[page]) {
            return pageDictionaries[page].en() as Promise<DictionaryReturnType<T>>;
        }

        throw error;
    }
};

// ✅ Get common dictionary (for navbar, footer, etc)
export const getCommonDictionary = async (locale: Locale) => {
    try {
        if (!pageDictionaries.common[locale]) {
            console.warn(`Common dictionary for ${locale} not found, falling back to en`);
            return pageDictionaries.common.en();
        }
        return await pageDictionaries.common[locale]();
    } catch (error) {
        console.error(`Error loading common dictionary for ${locale}:`, error);
        return pageDictionaries.common.en();
    }
};