import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { getPageTheme, setPageTheme, savePageTheme } from '../../../../lib/Theme';
import { Button } from '../../../../components/ui/Button';
import { i18n } from '../../../../i18n';

import './index.css';

const b = block('theme-switcher');

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(getPageTheme());

    const handleClick = useCallback(() => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
        setPageTheme(currentTheme);
        savePageTheme(currentTheme);
    }, [theme, setTheme]);


    return (<Button size="s" class={b()} onClick={handleClick}>{theme === 'light' ? i18n('Dark') : i18n('Light')}</Button>);
}
