import { html } from 'htm/preact';
import { render } from 'preact';
import { MicPage } from '../pages/MicPage';

render(html`<${MicPage} //>`, document.querySelector('.page') as HTMLDivElement);
