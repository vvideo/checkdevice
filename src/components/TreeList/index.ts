import { html } from 'htm/preact';
import { Section } from '../Section';
import { b } from './className';
import { BuildDataOptions, buildData } from './utils';

import './index.css';

interface TreeListProps {
    title: string;
    data: any;
    options?: BuildDataOptions;
}

export function TreeList(props: TreeListProps) {
    return html`
        <${Section} name="${props.title}">
            <div class="${b()}">
                ${buildData(props.data, props.options)}
            </div>
        <//>`;
}
