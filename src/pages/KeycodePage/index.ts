import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Keycode } from '../../components/Keycode';

export function KeycodePage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Displaying key codes')}
            <//>

            <${Keycode} //>
        <//>`;
}
