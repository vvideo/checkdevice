import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Fonts } from '../../components/Fonts';
import { Page } from '../Page';
import { PageTitle } from '../../components/PageTitle';

export function FontsPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Local fonts')}<//>
            <${Fonts}><//>
        <//>`;
}
