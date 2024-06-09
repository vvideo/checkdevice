import '../common';

import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/bem';
import { Footer } from '../../components/Footer';
import { i18n } from '../../i18n/i18n';
import { GpuNavigator } from '../../components/GpuNavigator';
import { InfoLink } from '../../components/InfoLink';
import { Menu } from '../Menu';
import { WebGLContext } from '../../components/WebGLContext';

const b = block('gpu-page');

export function GpuPage() {
    return html`
        <div class="${b()}">
            <${Menu}><//>

            <${Header}>
                ${i18n('Can I use WebGPU?')}<${InfoLink} href="https://developer.mozilla.org/en-US/docs/Web/API/GPU"><//>
            <//>

            <${WebGLContext}><//>

            <${GpuNavigator}><//>

            <${Footer}><//>
        </div>`;
}
