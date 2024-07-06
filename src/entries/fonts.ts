import { html } from 'htm/preact';
import { render } from 'preact';
import { FontsPage } from '../pages/FontsPage';

render(html`<${FontsPage} //>`, document.querySelector('.page') as HTMLDivElement);
