import { html } from 'htm/preact';
import { Row } from '../Row';
import { block } from '../../utils/bem';

import './index.css';

interface ListProps {
    title: string;
    items: [string, any][];
}

const b = block('list');

export function List(props: ListProps) {
    const filteredItems = props.items
        .filter(item => typeof item[1] !== 'undefined')
        .map(item => {
            return [
                item[0],
                typeof item[1] === 'boolean' ? String(item[1]) : item[1],
            ];
        });

    return filteredItems.length ? html`<${Row} name="${props.title}">
        <ul class="${b()}">
        ${
            filteredItems.map(item => {
                const [name, value] = item;
                return html`<li>${name}: ${value}</li>`;
            })
        }
        </ul>
    <//>` : '';
}
