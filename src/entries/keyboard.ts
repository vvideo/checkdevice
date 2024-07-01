import { html } from 'htm/preact';
import { render } from 'preact';
import { KeyboardPage } from '../pages/KeyboardPage';

render(html`<${KeyboardPage} //>`, document.querySelector('.page') as HTMLDivElement);
