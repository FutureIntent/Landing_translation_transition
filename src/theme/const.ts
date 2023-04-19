export type Languages = 'en' | 'el' | 'ru';

export const supportedLanguages = ['en', 'el', 'ru'] as const;

export type LanguageLocales = { Languages: string };

export const socialsLinks = {
    facebook: 'https://facebook.com/advertimo/',
    instagram: 'https://www.instagram.com/advertimo.eu/',
    youtube: '#',
    linkedin: 'https://www.linkedin.com/company/advertimo/',
};
