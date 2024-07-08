import { html } from 'htm/preact';
import { Row } from '../Row';
import { block } from '../../utils/bem';

import './index.css';
import { classname } from '../../utils/classname';

interface ListProps {
    class?: string;
    title: string;
    items: Array<[string, any] | [string]>;
}

const b = block('list');

export function List(props: ListProps) {
    const filteredItems = props.items
        .filter(item => {
            if (!item) {
                return false;
            }

            if (item.length === 1) {
                return true;
            }

            const [_, value] = item;

            return typeof value !== 'undefined' && value !== '';
        })
        .map(item => {
            const [name, value] = item;

            return item.length === 1 ?
                [name] :
                [name, typeof value === 'boolean' ? String(value) : value];
        });

    const className = classname(props.class, b());

    return filteredItems.length ? html`<${Row} name="${props.title}">
        <ul class="${className}">
        ${
            filteredItems.map(item => {
                const [name, value] = item;

                if (item.length === 1) {
                    return html`<li>${name}</li>`;
                }

                return html`<li>${name}: ${value}</li>`;
            })
        }
        </ul>
    <//>` : '';
}
