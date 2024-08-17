import '../common';

import { h } from 'preact';

import { Footer } from '../../components/Footer';
import { Menu } from '../Menu';
import { VNode } from 'preact';
import { Header } from '../../components/Header';
import { block } from '../../utils/css/bem';

import './index.css';
import { PageTitle } from '../../components/PageTitle';

interface PageProps {
    children: VNode;
    title?: string | h.JSX.Element; 
    withoutMenu?: boolean;
}

const b = block('page');

export function Page(props: PageProps) {
    return (
        <div class={b()}>
            <Header />
            {props.withoutMenu ? '' : (<Menu />)}
            {props.title ? (<PageTitle>{props.title}</PageTitle>) : ''}
            {props.children}
            <Footer />
        </div>
    );
}
