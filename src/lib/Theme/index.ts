import { getPreferredColorScheme } from '../../utils/dom/getPreferredColorScheme';
import { getLocalStorageItem, setLocalStorageItem } from '../LocalStorage';
import { Signal } from '../Signal';

const PAGE_THEME_LOCAL_STORAGE_KEY = 'page-theme';

export type PageThemeType = 'dark' | 'light';

const DEFAULT_PAGE_THEME: PageThemeType = 'dark';

let pageTheme: PageThemeType = DEFAULT_PAGE_THEME;

export function setPageTheme(theme: PageThemeType) {
    if (theme === 'light') {
        document.documentElement.classList.add('page-theme_light');
        document.documentElement.classList.remove('page-theme_dark');
    } else {
        document.documentElement.classList.add('page-theme_dark');
        document.documentElement.classList.remove('page-theme_light');
    }

    pageTheme = theme;
}

export function savePageTheme(theme: PageThemeType) {
    setLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY, theme);
}

export function wasSavedPageTheme() {
    return Boolean(getLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY));
}

export function getPageTheme() {
    return pageTheme;
}

export function isLightPageTheme() {
    return pageTheme === 'light';
}

export function isDarkPageTheme() {
    return pageTheme === 'dark';
}

const pageThemeChangeSignal = new Signal<PageThemeType>();

export function addPageThemeListener(callback: (theme: PageThemeType) => void) {
    pageThemeChangeSignal.addListener(callback);
}

export function removePageThemeListener(callback: (theme: PageThemeType) => void) {
    pageThemeChangeSignal.removeListener(callback);
}

export function initPageTheme() {
    if (typeof window !== 'undefined' && window.matchMedia){
        const query = window.matchMedia('(prefers-color-scheme: dark)');
        query.addEventListener('change', () => {
            const theme = getPreferredColorScheme() || DEFAULT_PAGE_THEME;
            pageThemeChangeSignal.trigger(theme);
        });

        const theme = getLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY) as PageThemeType || getPreferredColorScheme();
        if (theme && isCorrectTheme(theme)) {
            setPageTheme(theme);
            return;
        }
    }

    setPageTheme(pageTheme);
}

export function isCorrectTheme(value?: string) {
    return value === 'light' || value === 'dark';
}
