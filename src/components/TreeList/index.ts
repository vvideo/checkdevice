import { html } from 'htm/preact';
import { Row } from '../Row';
import { b } from './className';
import { buildData } from './utils';

import './index.css';

interface TreeListProps {
    title: string;
    data: any;
}

export function TreeList(props: TreeListProps) {
    return html`
        <${Row} title="${props.title}">
            <div class="${b()}">
                ${buildData(props.data)}
            </div>
        <//>`;
}
