import { h } from 'preact';

import { MainMenu, MainMenuItem } from '../../../../components/MainMenu';
import pages from '../../../pages';
import { i18nWithKeyset } from '../../../../i18n';
import { getPagePath } from '../../../../utils/getPagePath';
import { getPageId } from '../../../../utils/pageId';

export function Menu() {
    const id = getPageId();
    const items: MainMenuItem[] = pages.map(item => {
        const selected = item.id === id;

        return {
            ...item,
            url: getPagePath(item.id),
            title: i18nWithKeyset(item.menuTitle),
            selected,
        };
    });

    return (<MainMenu items={items} />);
}
