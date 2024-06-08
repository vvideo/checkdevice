import { html } from 'htm/preact';
import { Row } from '../Row';
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
        <${Row} name="${props.title}">
            <div class="${b()}">
                ${buildData(props.data, props.options)}
            </div>
        <//>`;
}
