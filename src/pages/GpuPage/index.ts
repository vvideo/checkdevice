import { html } from 'htm/preact';
import { GpuNavigator } from '../../components/GpuNavigator';
import { WebGLContext } from '../../components/WebGLContext';
import { Page } from '../Page';
import { Cube3d } from '../../components/Cube3d';
import { PageTitle } from '../../components/PageTitle';

export function GpuPage() {
    return html`
        <${Page}>
            <${PageTitle}>GPU<//>

            <${Cube3d} //>

            <${WebGLContext}><//>

            <${GpuNavigator}><//>
        <//>`;
}
