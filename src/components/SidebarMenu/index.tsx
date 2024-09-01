import { h } from 'preact';

import { block } from '../../utils/css/bem';
import pages from '../../pages/pages';
import { Link } from '../ui/Link';
import { Icon } from '../ui/Icon';
import { i18nWithKeyset } from '../../i18n';
import { getPagePath } from '../../utils/getPagePath';
import { Sidebar } from '../ui/Sidebar';
import { getPageId } from '../../utils/pageId';

import './index.css';

interface SidebarMenuProps {
    visible: boolean;
    onClose?: () => void;
}

const b = block('sidebar-menu');

export function SidebarMenu(props: SidebarMenuProps) {

    return (
        <Sidebar visible={props.visible} onClose={props.onClose}>
            <nav class={b()}>
                <ul class={b('list')}>
                    {pages.filter(item => Boolean(!item.hidden)).map(item => {
                        const title = i18nWithKeyset(item.menuTitle);
                        const selected = getPageId() === item.id;

                        return (<li class={b('item', { selected })}><Link class={b('link')} theme="page-theme" href={getPagePath(item.id)}><Icon class={b('icon')} type={item.id} /> {title}</Link></li>);
                    })}
                </ul>
            </nav>
        </Sidebar>
    );
}
