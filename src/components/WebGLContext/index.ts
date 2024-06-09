import { html } from 'htm/preact';
import { getGpuRenderer, getGpuVendor } from 'detect-audio-video';
import { List } from '../List';

export function WebGLContext() {
    const items = [
        ['Vendor', getGpuVendor()],
        ['Renderer', getGpuRenderer()],
    ].filter(item => Boolean(item[1]));

    return html`<${List} title="WebGL context" items="${items}" //>`;
}
