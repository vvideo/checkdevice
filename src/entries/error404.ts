import { html } from 'htm/preact';
import { render } from 'preact';
import { Error404Page } from '../pages/Error404Page';

render(html`<${Error404Page} //>`, document.querySelector('.page') as HTMLDivElement);
