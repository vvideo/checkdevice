import { h } from 'preact';

import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
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
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
        setVisible(true);    
    }, [setVisible]);

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (event.target && ref.current) {
                const target = event.target as HTMLElement;
                if (ref.current.contains && !ref.current.contains(target)) {
                    setVisible(false);
                }
            }
        };

        const handleDocumentKeydown = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                setVisible(false);
            }
        };

        document.addEventListener('click', handleDocumentClick, false);
        document.addEventListener('keydown', handleDocumentKeydown, false);

        return () => {
            document.removeEventListener('click', handleDocumentClick, false);
            document.removeEventListener('keydown', handleDocumentKeydown, false);
        };
    }, [setVisible]);

    const currentLangItem = langs.filter(item => currentLang === item.value)[0];

    return (<div ref={ref} class={b()}>
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
