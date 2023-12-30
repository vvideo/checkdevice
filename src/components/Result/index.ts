import { html } from 'htm/preact';
import { block } from '../../utils/bem';

import './index.css';

const b = block('result');

interface ResultProps {
    value: true | false | undefined;
    text?: '';
    details?: string;
}

export function Result(props: ResultProps) {
    let text: string | undefined = props.text;
    let type = '';

    if (!props.text) {
        if (props.value === true) {
            text = 'Yes';
            type = 'yes';
        }

        if (props.value === false) {
            text = 'No';
            type = 'no';
        }

        if (props.value === undefined) {
            text = 'Warning';
            type = 'warning';
        }
    }

    return html`<span class="${b({
        type,
    })}">
        ${text}
        ${props.details ? html`<span class="${b('details')}">${props.details}</span>` : ''}
    </span>`;
}