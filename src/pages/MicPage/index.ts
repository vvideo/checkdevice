import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';
import { Mic } from '../../components/Mic';

export function MicPage() {
    return html`
        <${Page}>
            <${PageTitle}}>${i18n('Mic')}<//>
            <${Mic} //>
        <//>`;
}
