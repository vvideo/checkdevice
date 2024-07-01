import { html } from 'htm/preact';
import { render } from 'preact';
import { MousePage } from '../pages/MousePage';

render(html`<${MousePage} //>`, document.querySelector('.page') as HTMLDivElement);
