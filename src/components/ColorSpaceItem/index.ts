import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

export interface ColorSpaceItemProps {
    type: string;
    supported: boolean;
    name: string;
}

const b = block('color-space-item');

export function ColorSpaceItem(props: ColorSpaceItemProps) {
    const { name, supported, type } = props;

    return html`<span class="${b({ type, supported })}"><span class="${b('checked')}">${supported ? '✓' : '✗'}</span> <span class="${b('color')}">${name}</span></span>`;
}
