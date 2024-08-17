import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import pages from '../../../../pages/pages';
import { getI18nLang, i18nWithKeyset } from '../../../../i18n';
import { Link } from '../../../../components/ui/Link';
import { getPagePath } from '../../../../utils/getPagePath';

import './index.css';

const b = block('index-menu');

export function IndexMenu() {
    const lang = getI18nLang();
    const items = pages.filter(item => !item.hidden).map(item => {
        return {
            ...item,
            title: i18nWithKeyset(item.menuTitle),
            indexMenuList: item.indexMenuList ? item.indexMenuList[lang] : [],
        };
    });

    return (<nav class={b()}>
        <ul class={b('list')}>
            {items.map(item => {
                return (
                    <li key={item.id} class={b('item')}>
                        <Link class={b('link')} theme="white" href={getPagePath(item.id)}><span><span class={b('image', { type: item.id })}></span> {item.title}</span></Link>
                        <ul class={b('keywords-list')}>
                            {item.indexMenuList.map(text => (<li class={b('keywords-item')}><div class={b('keywords-item-container')}>{text}</div></li>))}
                        </ul>
                    </li>
                );
            })}
        </ul>
        <div class={b('clear')}></div>
    </nav>);
}
