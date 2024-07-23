import { html } from 'htm/preact';
import { render } from 'preact';
import { KeycodesPage } from '../pages/KeycodesPage';

render(html`<${KeycodesPage} //>`, document.querySelector('.page') as HTMLDivElement);
