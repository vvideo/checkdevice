import { h } from 'htm/preact';

import { block } from '../../utils/css/bem';

import './index.css';

const b = block('hdr-label');

interface HdrLabelProps {
    enabled: boolean;
}

export function HdrLabel(props: HdrLabelProps) {
    return (<span class={b({ enabled: props.enabled })}>HDR</span>);
}