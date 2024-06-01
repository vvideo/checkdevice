import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Gpu } from '../../components/Gpu';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';

const b = block('gpu-page');

export function GpuPage() {
    return html`
        <div class="${b()}">
            <${Header} text="${i18n('Can I use GPU?')}"><//>

            <${Gpu}><//>

            <${Footer}><//>
        </div>`;
}
