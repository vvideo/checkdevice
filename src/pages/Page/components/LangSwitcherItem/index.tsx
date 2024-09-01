import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { Link } from '../../../../components/ui/Link';
import { LangIcon } from '../LangIcon';

import './index.css';

interface LangSwitcherItemProps {
    name: string;
    value: string;
    url: string;
    selected?: boolean;
}

const b = block('lang-switcher-item');

export function LangSwitcherItem(props: LangSwitcherItemProps) {
    const { value, name, selected, url } = props;

    return (<li class={b()}>
        <Link href={url}><LangIcon lang={value} /> {name}{selected ? ' ✓' : ''}</Link>
    </li>);
}
