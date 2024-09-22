import { h } from 'preact';
import { block } from '../../../utils/css/bem';
import { Input, InputProps } from '../Input';
import { classname } from '../../../utils/css/classname';

import './index.css';

type SearchProps = InputProps;

const b = block('search');

export function Search(props: SearchProps) {
    const cls = classname(b(), props.class);
    return <Input {...props} class={cls} />
}
