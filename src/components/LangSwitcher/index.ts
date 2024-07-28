import { html } from 'htm/preact';
import { useCallback, useState } from 'preact/hooks';
import { getI18nLang, getI18nLangs } from '../../i18n';
import { block } from '../../utils/css/bem';
import { LangSwitcherItem } from '../LangSwitcherItem';
import { getPagePath } from '../../utils/getPagePath';

import './index.css';

const b = block('lang-switcher');

export function LangSwitcher() {
    const [visible, setVisible ] = useState(false);
    const currentLang = getI18nLang();
    const langs = getI18nLangs();

    const handleClickItem = useCallback((value: string) => {
        setVisible(false);
        window.location.href = getPagePath(window.appData.pageId, value);
    }, [setVisible]);


    const handleClick = useCallback(() => {
        setVisible(true);
    }, [setVisible]);

    const currentLangItem = langs.filter(item => currentLang === item.value)[0];

    return html`<div class="${b()}">
        <div class="${b('current')}" onClick="${handleClick}"><span class="${b('emoji')}">${currentLangItem.emoji}</span> ${currentLangItem.name}</div>
        <div class="${b('popup', { visible })}">
            ${langs.map(item => html`<${LangSwitcherItem} selected="${currentLang === item.value}" key="${item.value}" onClick="${handleClickItem}" ..."${item}" //>`)}
        </div>
    </div>`;
}
