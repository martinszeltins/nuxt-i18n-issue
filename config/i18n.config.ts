export default {
    locales: [
        { code: 'en', file: 'en.json' },
        { code: 'fr', file: 'fr.json' },
    ],
    lazy: false,
    langDir: 'lang',
    defaultLocale: 'en',
    detectBrowserLanguage: {
        useCookie: true,
        redirectOn: 'no prefix',
    },
}
