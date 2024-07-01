import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Keyboard } from '../../components/Keyboard';

export function KeyboardPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Testing keyboard')}
            <//>

            <${Keyboard} //>
        <//>`;
}
