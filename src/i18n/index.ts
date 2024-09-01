export type I18NKeys = { 'en': string, 'ru': string };
export type I18NIndexMenuKeys = { 'en': string[], 'ru': string[] };
export type I18nKeyset = Record<string, I18NKeys>;
export type I18NLanguage = keyof I18NKeys;

export interface I18NLanguageData {
    name: string;
    value: string;
    default?: boolean;
};

let i18nKeyset: I18nKeyset = {};
let i18nLang: I18NLanguage;

export let langsData: I18NLanguageData[] = [];

export function getI18nLangs() {
    return [
        ...langsData,
    ];
}

export function setI18nLangs(data: I18NLanguageData[]) {
    langsData = data;
}

export function addI18nKeyset(keyset: I18nKeyset) {
    i18nKeyset = {
        ...i18nKeyset,
        ...keyset,
    };
}

export function i18n(id: string) {
    const key = i18nKeyset[id];
    if (!key) {
        console.error(`i18n: not found translation key "${id}".`);
        return id;
    }

    const value = key[i18nLang];

    if (typeof value === 'undefined') {
        console.error(`i18n: not found translation key "${id}", lang "${i18nLang}".`);
        return id;
    }

    return value;
}

export function i18nWithKeyset(keyset: I18NKeys): string {
    return keyset[i18nLang];
}

export function setI18nLang(lang?: I18NLanguage) {
    if (lang) {
        i18nLang = lang;
    }
}

export function getI18nLang() {
    return i18nLang;
}
