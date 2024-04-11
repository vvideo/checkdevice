import { keysets } from './keysets';

export type I18NKeys = { 'en': string, 'ru': string };
export type I18nKeysets = Record<string, I18NKeys>;
export type I18NLanguage = keyof I18NKeys;

let i18nKeysets = keysets;
let i18nLang: I18NLanguage;

export function i18n(id: string) {
    const key = i18nKeysets[id];
    if (!key) {
        console.error(`Not found key "${id}" in getText().`);
        return id;
    }

    const value = key[i18nLang];

    if (typeof value === 'undefined') {
        console.error(`Not found key "${id}", lang "${i18nLang}" in getText().`);
        return id;
    }

    return value;
}

export function setI18nLang(lang: I18NLanguage) {
    i18nLang = lang;
}
