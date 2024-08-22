type ThemeType = 'dark' | 'light';

export function setColorScheme(theme: ThemeType) {
    if (theme === 'light') {
        document.body.classList.add('theme_light');
        document.body.classList.remove('theme_dark');
    } else {
        document.body.classList.add('theme_dark');
        document.body.classList.remove('theme_light');
    }
}

export function getPreferredColorScheme(): ThemeType {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
        } else {
            return 'light';
        }
    }

    return 'dark';
}
  
export function updateColorScheme() {
    setColorScheme(getPreferredColorScheme());
}
  
if (window.matchMedia){
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', updateColorScheme);
}
  
updateColorScheme();
