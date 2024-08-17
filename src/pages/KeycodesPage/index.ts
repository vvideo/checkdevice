import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Keycode } from './components/Keycode';
import { PageTitle } from '../../components/PageTitle';

export function KeycodesPage() {
    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Displaying key codes')}
            <//>

            <${Keycode} //>
        <//>`;
}
