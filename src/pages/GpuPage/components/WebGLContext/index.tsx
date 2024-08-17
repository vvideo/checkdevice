import { h } from 'preact';

import { getGpuRenderer, getGpuVendor } from 'detect-audio-video';
import { List } from '../../../../components/ui/List';

export function WebGLContext() {
    let items: [string, string][] = [
        ['Vendor', getGpuVendor() as string],
        ['Renderer', getGpuRenderer()],
    ];
    
    items = items.filter(item => Boolean(item[1]));

    return (<List title="WebGL context" items={items} />);
}
