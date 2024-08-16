import { h } from 'preact';
import { Section } from '../Section';
import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';

import './index.css';

interface ListProps {
    class?: string;
    title?: string;
    items: Array<[string | number | h.JSX.Element | undefined, any] | [string | undefined]>;
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

    return filteredItems.length ? (<Section name={props.title}>
        <ul class={className}>
        {
            filteredItems.map(item => {
                const [name, value] = item;

                if (item.length === 1) {
                    return (<li>{name}</li>);
                }

                return (<li>{name}: {value}</li>);
            })
        }
        </ul>
    </Section>) : null;
}
