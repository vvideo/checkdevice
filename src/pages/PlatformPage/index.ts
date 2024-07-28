import { html } from 'htm/preact';
import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Platform } from '../../components/Platform';
import { Permissions } from '../../components/Permissions';
import { PageTitle } from '../../components/PageTitle';

export function PlatformPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Platform')}<//>

            <${Platform} //>

            <${Permissions} //>
        <//>`;
}
