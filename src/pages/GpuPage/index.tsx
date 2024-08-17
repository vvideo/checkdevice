import { h } from 'preact';
import { GpuNavigator } from './components/GpuNavigator';
import { WebGLContext } from '../../components/WebGLContext';
import { Page } from '../Page';
import { Cube3d } from '../../components/Cube3d';

export function GpuPage() {
    return (
        <Page title="GPU">
            <div>
                <Cube3d />
                <WebGLContext />
                <GpuNavigator />
            </div>
        </Page>
    );
}
