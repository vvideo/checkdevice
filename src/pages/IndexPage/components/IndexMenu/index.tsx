import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import pages from '../../../../pages/pages';
import { getI18nLang, i18n, i18nWithKeyset } from '../../../../i18n';
import { Link } from '../../../../components/ui/Link';
import { getPagePath } from '../../../../utils/getPagePath';
import { Input } from '../../../../components/ui/Input';
import { searchInMenuList, searchInMenuTitle } from './utils';
import { Icon } from '../../../../components/ui/Icon';

import './index.css';

const b = block('index-menu');

export function IndexMenu() {
    const [ searchValue, setSearchValue ] = useState('');

    const handleSearchChange = useCallback((value: string) => {
        setSearchValue(value);
    }, [setSearchValue]);

    const lang = getI18nLang();

    const preparedSearchValue = searchValue.toLowerCase();
    const items = pages.filter(item => {
        if (item.hidden) {
            return false;
        }

        if (!preparedSearchValue) {
            return true;
        }

        if (searchInMenuTitle(item.menuTitle, preparedSearchValue)) {
            return true;
        }

        if (searchInMenuList(item.indexMenuList, preparedSearchValue)) {
            return true;
        }

        return false;
    }).map(item => {
        return {
            ...item,
            title: i18nWithKeyset(item.menuTitle),
            indexMenuList: item.indexMenuList ? item.indexMenuList[lang] : [],
        };
    });

    return (<nav class={b()}>
        <div class={b('search')}><Input placeholder={i18n('Search')} value={searchValue} onChange={handleSearchChange} /></div>
        {items.length ? (<ul class={b('list')}>
            {items.map(item => {
                return (
                    <li key={item.id} class={b('item')}>
                        <Link class={b('link')} theme="page-theme" href={getPagePath(item.id)}><Icon type={item.id} class={b('image')} /> {item.title}</Link>
                        <ul class={b('keywords-list')}>
                            {item.indexMenuList.map(text => (<li class={b('keywords-item')}><div class={b('keywords-item-container')}>{text}</div></li>))}
                        </ul>
                    </li>
                );
            })}
        </ul>) : (<div class={b('not-found')}>{i18n('Not found.')}</div>)}
        <div class={b('clear')}></div>
    </nav>);
}
