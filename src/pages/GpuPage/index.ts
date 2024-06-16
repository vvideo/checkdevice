import { html } from 'htm/preact';
import { Header } from '../../components/Header';
import { GpuNavigator } from '../../components/GpuNavigator';
import { WebGLContext } from '../../components/WebGLContext';
import { Page } from '../Page';
import { Cube3d } from '../../components/Cube3d';

export function GpuPage() {
    return html`
        <${Page}>
            <${Header}>GPU<//>

            <${Cube3d} //>

            <${WebGLContext}><//>

            <${GpuNavigator}><//>
        <//>`;
}
