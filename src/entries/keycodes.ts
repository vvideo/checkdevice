import { html } from 'htm/preact';
import { render } from 'preact';
import { KeycodePage } from '../pages/KeycodePage';

render(html`<${KeycodePage} //>`, document.querySelector('.page') as HTMLDivElement);
