import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Fonts } from '../../components/Fonts';
import { Page } from '../Page';

export function FontsPage() {
    return html`
        <${Page}>
            <${Header}>${i18n('Fonts')}<//>
            <${Fonts}><//>
        <//>`;
}
