import '../common';

import { html } from 'htm/preact';
import { Footer } from '../../components/Footer';
import { Menu } from '../Menu';
import { VNode } from 'preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/css/bem';

import './index.css';

interface PageProps {
    children: VNode;
    withoutMenu?: boolean;
}

const b = block('page');

export function Page(props: PageProps) {
    return html`
        <div class="${b('page')}">
            <${Header} //>
            ${props.withoutMenu ? '' : html`<${Menu} //>`}
            ${props.children}
            <${Footer} //>
        </div>`;
}
