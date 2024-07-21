import { html } from 'htm/preact';
import { IndexPage } from '../pages/IndexPage';
import { render } from 'preact';

render(html`<${IndexPage} //>`, document.querySelector('.page') as HTMLDivElement);
