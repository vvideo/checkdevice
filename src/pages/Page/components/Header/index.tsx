import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { i18n } from '../../../../i18n';
import { Link } from '../../../../components/ui/Link';
import { getPagePath } from '../../../../utils/getPagePath';
import { ThemeSwitcher } from '../ThemeSwitcher';

import './index.css';

const b = block('header');

export function Header() {
    return (
        <header class={b()}>
            <Link theme="page-theme" href={getPagePath('index')}><span><span class={b('logo')}></span>{i18n('Check device online')}</span></Link>
            <ThemeSwitcher />
        </header>
    );
}
