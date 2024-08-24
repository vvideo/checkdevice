import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { getPageTheme, setPageTheme, savePageTheme, removePageThemeListener, addPageThemeListener, wasSavedPageTheme, PageThemeType } from '../../../../lib/Theme';
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

    useEffect(() => {
        const handler = (currentTheme: PageThemeType) => {
            if (!wasSavedPageTheme()) {
                setTheme(currentTheme);
                setPageTheme(currentTheme);
            }
        };

        addPageThemeListener(handler);

        return () => {
            removePageThemeListener(handler);
        };
    }, [setTheme]);

    const title = theme === 'light' ? i18n('Dark theme') : i18n('Light theme');

    return (<div class={b({ theme })} onClick={handleClick} title={title}></div>);
}
