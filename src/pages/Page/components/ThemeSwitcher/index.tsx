import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { getPageTheme, setPageTheme, savePageTheme } from '../../../../lib/Theme';

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


    return (<div class={b({ theme })} onClick={handleClick}></div>);
}
