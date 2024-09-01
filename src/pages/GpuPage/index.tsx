import { h } from 'preact';
import { GpuNavigator } from './components/GpuNavigator';
import { WebGLContext } from './components/WebGLContext';
import { Page } from '../Page';
import { Cube3d } from './components/Cube3d';
import { keyset } from './i18n/keyset';
import { addI18nKeyset } from '../../i18n';

addI18nKeyset(keyset);

export function GpuPage() {
    return (
        <Page title="GPU">
            <Cube3d />
            <WebGLContext />
            <GpuNavigator />
        </Page>
    );
}
