import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { i18n } from '../../i18n/i18n';
import { GpuNavigator } from '../../components/GpuNavigator';
import { WebGLContext } from '../../components/WebGLContext';
import { Page } from '../Page';

export function GpuPage() {
    return html`
        <${Page}>
            <${Header}>
                ${i18n('WebGPU')}
            <//>

            <${WebGLContext}><//>

            <${GpuNavigator}><//>
        <//>`;
}
