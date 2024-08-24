export const langsData = [
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

export const defaultLang = langsData.filter(item => Boolean(item.default))[0].value;
