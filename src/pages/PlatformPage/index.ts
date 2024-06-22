import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Page } from '../Page';
import { Platform } from '../../components/Platform';
import { Permissions } from '../../components/Permissions';

export function PlatformPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Platform')}
            <//>

            <${Platform} //>

            <${Permissions} //>
        <//>`;
}
