import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { Link } from '../../../../components/ui/Link';
import { getPagePath } from '../../../../utils/getPagePath';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { SidebarMenu } from '../../../../components/SidebarMenu';

import './index.css';
import { isSsr } from '../../../../utils/isSsr';
import { Icon } from '../../../../components/ui/Icon';

const b = block('header');

export function Header() {
    const [menuVisibled, setMenuVisibled ] = useState(false);

    const handleClose = useCallback(() => {
        setMenuVisibled(false);
    }, [setMenuVisibled])

    const handleClick = useCallback(() => {
        setMenuVisibled(true);
    }, [setMenuVisibled])

    return (
        <header class={b()}>
            <span class={b('menu-switcher')} onClick={handleClick}><Icon type="menu" /></span>

            <Link theme="page-theme" href={getPagePath('index')}>
                <span class={b('logo')}></span>{i18n('Check device online')}
            </Link>
            <ThemeSwitcher />
            {!isSsr ? <SidebarMenu visible={menuVisibled} onClose={handleClose} /> : null}
        </header>
    );
}
