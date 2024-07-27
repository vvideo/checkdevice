import { html } from 'htm/preact';
import { UsbPage } from '../pages/UsbPage';
import { render } from 'preact';

render(html`<${UsbPage} //>`, document.querySelector('.page') as HTMLDivElement);
