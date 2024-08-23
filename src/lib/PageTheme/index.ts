import { getLocalStorageItem, setLocalStorageItem } from '../LocalStorage';

const PAGE_THEME_LOCAL_STORAGE_KEY = 'page-theme';

type PageThemeType = 'dark' | 'light';

const DEFAULT_PAGE_THEME: PageThemeType = 'dark';

export function setPageTheme(theme: PageThemeType) {
    if (theme === 'light') {
        document.documentElement.classList.add('page-theme_light');
        document.documentElement.classList.remove('page-theme_dark');
    } else {
        document.documentElement.classList.add('page-theme_dark');
        document.documentElement.classList.remove('page-theme_light');
    }

    savePageTheme(theme);
}

export function savePageTheme(theme: PageThemeType) {
    setLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY, theme);
}

export function getPageTheme() {
    if (typeof window === 'undefined') {
        return DEFAULT_PAGE_THEME;
    }

    return getLocalStorageItem(PAGE_THEME_LOCAL_STORAGE_KEY) as PageThemeType || getPreferredTheme() || DEFAULT_PAGE_THEME;
}   

export function getPreferredTheme(): PageThemeType | undefined {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches){
            return 'light';
        } else {
            return 'dark';
        }
    }
    
    return;
}

export function initPageTheme() {  
    if (typeof window !== 'undefined' && window.matchMedia){
        const query = window.matchMedia('(prefers-color-scheme: dark)');
        query.addEventListener('change', () => {
            const theme = getPreferredTheme();
            setPageTheme(theme || DEFAULT_PAGE_THEME);
        });

        setPageTheme(getPageTheme());
    }
}
