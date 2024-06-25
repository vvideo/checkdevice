import { html } from 'htm/preact';
import { render } from 'preact';
import { InputPage } from '../pages/InputPage';

render(html`<${InputPage} //>`, document.querySelector('.page') as HTMLDivElement);
