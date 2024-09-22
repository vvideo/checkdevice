import { h } from 'preact';
import { block } from '../../../utils/css/bem';
import { Input, InputProps } from '../Input';

import './index.css';

type SearchProps = InputProps;

const b = block('search');

export function Search(props: SearchProps) {
    return <Input class={b()} {...props} />
}
