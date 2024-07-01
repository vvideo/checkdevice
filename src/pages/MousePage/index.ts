import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Mouse } from '../../components/Mouse';

export function MousePage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Testing mouse')}
            <//>

            <${Mouse} //>
        <//>`;
}
