import { html } from 'htm/preact';
import { PageTitle } from '../../components/PageTitle';
import { i18n } from '../../i18n';
import { Camera } from '../../components/Camera';
import { Page } from '../Page';

export function CameraPage() {
    return html`
        <${Page}>
            <${PageTitle}>${i18n('Webcamera')}<//>
            <${Camera}><//>
        <//>`;
}
