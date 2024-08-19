export const langs = [
    {
        name: 'EN',
        value: 'en',
        default: true
    },
    {
        name: 'RU',
        value: 'ru',
    },
];

export const defaultLang = langs.filter(item => Boolean(item.default))[0].value;
