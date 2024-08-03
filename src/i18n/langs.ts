export const langs = [
    {
        name: 'EN',
        value: 'en',
        emoji: '🇺🇸',
        default: true
    },
    {
        name: 'RU',
        value: 'ru',
        emoji: '🇷🇺',
    },
];

export const defaultLang = langs.filter(item => Boolean(item.default))[0].value;
