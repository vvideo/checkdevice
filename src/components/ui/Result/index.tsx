import { h } from 'preact';
import { block } from '../../../utils/css/bem';
import { i18n } from '../../../i18n';
import { isSsr } from '../../../utils/isSsr';

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

    if (isSsr) {
        return '';
    }

    if (!props.text) {
        if (props.value === true) {
            text = i18n('Yes');
            type = 'yes';
        }

        if (props.value === false) {
            text = i18n('No');
            type = 'no';
        }

        if (props.value === undefined) {
            text = i18n('Warning');
            type = 'warning';
        }
    }

    return (<span class={b({ type })}>
        {text}
        {props.details ? (<span class={b('details')}>{props.details}</span>) : ''}
    </span>);
}
