import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Mouse } from '../../components/Mouse';
import { PageTitle } from '../../components/PageTitle';

export function MousePage() {
    return html`
        <${Page}>
            <${PageTitle}>
                ${i18n('Testing mouse')}
            <//>

            <${Mouse} //>
        <//>`;
}
