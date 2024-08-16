import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Keyboard } from '../../components/Keyboard';
import { Link } from '../../components/ui/Link';
import { PageTitle } from '../../components/PageTitle';
import { getPagePath } from '../../utils/getPagePath';
import { Section } from '../../components/ui/Section';
import { NavList } from '../../components/NavList';

export function KeyboardPage() {
    const items = [
        [html`<${Link} href="${getPagePath('keycodes')}">${i18n('Displaying key codes')}<//>`]
    ];

    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Testing keyboard')}
            <//>

            <${Keyboard} //>

            <${Section} name="${i18n('Additionally')}">
                <${NavList} items="${items}" //>
            <//>
        <//>`;
}
