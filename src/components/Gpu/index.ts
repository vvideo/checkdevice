import { html } from 'htm/preact';
import { Row } from '../Row';
import { i18n } from '../../i18n/i18n';
import { getGpuRenderer, getGpuVendor } from 'detect-audio-video';

export function Gpu() {
    const vendor = getGpuVendor();
    const renderer = getGpuRenderer();

    return vendor || renderer ? html`<${Row} name="${i18n('GPU')}">
        ${vendor ? html`<div>Vendor: ${vendor}</div>` : ''}
        ${renderer ? html`<div>Renderer: ${vendor}</div>` : ''}
    <//>` : '';
}
