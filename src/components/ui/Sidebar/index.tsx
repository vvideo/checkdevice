import { ComponentChildren, h } from 'preact';

import { block } from '../../../utils/css/bem';
import { Paranja } from '../Paranja';
import { Icon } from '../Icon';

import './index.css';

const b = block('sidebar');

interface SidebarProps {
    children: ComponentChildren;
    visible?: boolean;
    onClose?: () => void;
}

export function Sidebar(props: SidebarProps) {
    return (
        <div class={b({ visible: props.visible })}>
            <div class={b('content')}>
                {props.children}
                <div class={b('close')} onClick={props.onClose}><Icon type="cross" /></div>
            </div>
            <Paranja visible onClick={props.onClose} />
        </div>
    );
}
