import { h } from 'preact';
import { block } from '../../../../utils/css/bem';
import { addFont } from './utils';

import './index.css';

interface FontPreviewProps {
    fullName: string;
    postscriptName: string;
}

const b = block('font-preview');

const letters = 'A B C D E F G H I K L M N O P Q R S T V X Y Z';
const digits = '1 2 3 4 5 6 7 8 9 0';

export function FontPreview(props: FontPreviewProps) {
    addFont(props.fullName, props.postscriptName);
    console.log(props.fullName, props.postscriptName);

    const style = `font-family: "${props.fullName}"`;
    return (<div class={b()} style={style}>
        <div class={b('line')}>{letters}</div>
        <div class={b('line', { lowercase: true })}>{letters}</div>
        <div class={b('line')}>{digits}</div>
    </div>);
}
