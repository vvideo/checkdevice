import { html } from 'htm/preact';
import { MainPage } from '../pages/MainPage';
import { render } from 'preact';

render(html`<${MainPage} //>`, document.querySelector('.page') as HTMLDivElement);
