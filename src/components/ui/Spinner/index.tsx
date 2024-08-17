import { h } from 'preact';
import { block } from '../../../utils/css/bem';

import './index.css';

interface SpinnerProps {
    size?: 's' | 'm';
}

const b = block('spinner');

export function Spinner(props: SpinnerProps) {
    return (<div class={b({ size: props.size })}></div>);
}
