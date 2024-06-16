import { html } from 'htm/preact';
import { render } from 'preact';
import { PlatformPage } from '../pages/PlatformPage';

render(html`<${PlatformPage} //>`, document.querySelector('.page') as HTMLDivElement);
