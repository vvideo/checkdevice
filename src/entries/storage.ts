import { html } from 'htm/preact';
import { render } from 'preact';
import { StoragePage } from '../pages/StoragePage';

render(html`<${StoragePage} //>`, document.querySelector('.page') as HTMLDivElement);
