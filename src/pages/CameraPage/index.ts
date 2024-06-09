import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { Camera } from '../../components/Camera';
import { Page } from '../Page';

export function CameraPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('Camera')}
            <//>

            <${Camera}><//>
        <//>`;
}
