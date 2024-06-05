import { html } from 'htm/preact';
import { render } from 'preact';
import { ScreenPage } from '../pages/ScreenPage';

render(html`<${ScreenPage} //>`, document.querySelector('.page') as HTMLDivElement);
