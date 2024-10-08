import './common';
//import { MetrikaCounter } from 'react-metrika';

import { ComponentChildren, h } from 'preact';

import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { block } from '../../utils/css/bem';
import { PageTitle } from '../../components/PageTitle';

//import { config } from '../../config';

import './index.css';

interface PageProps {
    children: ComponentChildren;
    title?: string;
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
            {/* <MetrikaCounter id={config.metrikaCounterId} options={config.metrikaOptions} /> */}
        </div>
    );
}
