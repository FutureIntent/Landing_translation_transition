import i18next from 'i18next';

import translations from '../../i18n/translations.json';

// eslint-disable-next-line jest/require-hook
i18next.init({
    resources: translations,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    keySeparator: '.',
    react: {
        useSuspense: false,
    },
});

export default i18next;
