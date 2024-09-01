import { h } from 'preact';

import { block } from '../../../utils/css/bem';

import './index.css';

const b = block('paranja');

interface ParanjaProps {
    visible: boolean;
    onClick?: () => void;
}

export function Paranja(props: ParanjaProps) {
    return (<div class={b({ visible: props.visible })} onClick={props.onClick}></div>);
}
