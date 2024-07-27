import { html } from 'htm/preact';
import { GeoPage } from '../pages/GeoPage';
import { render } from 'preact';

render(html`<${GeoPage} //>`, document.querySelector('.page') as HTMLDivElement);
