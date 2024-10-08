import { h } from 'preact';

import { Section } from '../ui/Section';
import { block } from '../../utils/css/bem';
import { classname } from '../../utils/css/classname';

import './index.css';

interface DescriptionListProps {
    class?: string;
    title?: string;
    items: Array<[any, any]>;
}

const b = block('description-list');

export function DescriptionList(props: DescriptionListProps) {
    const filteredItems = props.items
        .filter(item => {
            if (!item || item.length !== 2) {
                return false;
            }

            const [_, details] = item;

            return typeof details !== 'undefined' && details !== '';
        })
        .map(item => {
            const [term, details] = item;
            return [term, typeof details === 'boolean' ? String(details) : details];
        });

    const className = classname(props.class, b());

    return filteredItems.length ? (<Section name={props.title}>
        <dl class={className}>
        {
            filteredItems.map(item => {
                const [name, value] = item;

                return (<div key={name} class={b('item')}>
                    <dt class={b('term')}>{name}</dt>
                    <dd class={b('details')}>{value}</dd>
                </div>);
            })
        }
        </dl>
    </Section>) : null;
}
