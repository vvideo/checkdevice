import { html } from 'htm/preact';
import { render } from 'preact';
import { TestDeadPixelsPage } from '../pages/TestDeadPixelsPage';

render(html`<${TestDeadPixelsPage} //>`, document.querySelector('.page') as HTMLDivElement);
