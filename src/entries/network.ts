import { html } from 'htm/preact';
import { NetworkPage } from '../pages/NetworkPage';
import { render } from 'preact';

render(html`<${NetworkPage} //>`, document.querySelector('.page') as HTMLDivElement);
