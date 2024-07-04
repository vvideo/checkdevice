import '../common';

import { html } from 'htm/preact';
import { Footer } from '../../components/Footer';
import { Menu } from '../Menu';
import { VNode } from 'preact';
import { Head } from '../../components/Head';

import './index.css';

interface PageProps {
    children: VNode;
}

export function Page(props: PageProps) {
    return html`
        <div>
            <${Head} //>
            <${Menu}><//>

            ${props.children}

            <${Footer}><//>
        </div>`;
}
