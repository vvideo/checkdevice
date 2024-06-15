import { html } from 'htm/preact';
import { render } from 'preact';
import { AudioPage } from '../pages/AudioPage';

render(html`<${AudioPage} //>`, document.querySelector('.page') as HTMLDivElement);
