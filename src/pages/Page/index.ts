import '../common';

import { html } from 'htm/preact';
import { Footer } from '../../components/Footer';
import { Menu } from '../Menu';
import { VNode } from 'preact';

import './index.css';

interface PageProps {
    children: VNode;
}

export function Page(props: PageProps) {
    return html`
        <div>
            <${Menu}><//>

            ${props.children}

            <${Footer}><//>
        </div>`;
}
