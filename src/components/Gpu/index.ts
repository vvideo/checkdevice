import { html } from 'htm/preact';
import { Row } from '../Row';
import { i18n } from '../../i18n/i18n';
import { getGpuRenderer, getGpuVendor } from 'detect-audio-video';
import { block } from '../../utils/bem';

import './index.css';

const b = block('gpu');

export function Gpu() {
    const vendor = getGpuVendor();
    const renderer = getGpuRenderer();

    return (vendor || renderer) ? html`<${Row} name="${i18n('GPU')}">
        <ul class="${b()}">
            ${vendor ? html`<li>${i18n('Vendor')}: ${vendor}</li>` : ''}
            ${renderer ? html`<li>${i18n('Renderer')}: ${renderer}</li>` : ''}
        </ul>
    <//>` : '';
}
