import { h } from 'preact';

import { useCallback, useState } from 'preact/hooks';
import { getI18nLang, getI18nLangs } from '../../../../i18n';
import { block } from '../../../../utils/css/bem';
import { LangSwitcherItem } from '../LangSwitcherItem';
import { getPagePath } from '../../../../utils/getPagePath';
import { getPageId } from '../../../../utils/pageId';
import { LangIcon } from '../LangIcon';

import './index.css';

const b = block('lang-switcher');

export function LangSwitcher() {
    const [visible, setVisible] = useState(false);
    const currentLang = getI18nLang();
    const langs = getI18nLangs();

    const handleClick = useCallback(() => {
        setVisible(true);
    }, [setVisible]);

    const currentLangItem = langs.filter(item => currentLang === item.value)[0];

    return (<div class={b()}>
        <div class={b('current')} onClick={handleClick}>
            <LangIcon lang={currentLangItem.value} /> {currentLangItem.name}
        </div>
        <menu class={b('popup', { visible })}>
            {langs.map(item => {
                const url = getPagePath(getPageId(), item.value);

                return (<LangSwitcherItem
                    key={item.value}
                    name={item.name}
                    value={item.value}
                    selected={currentLang === item.value}
                    url={url}
                />);
            })}
        </menu>
    </div>);
}
