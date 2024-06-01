import { html } from 'htm/preact';
import { GpuPage } from '../pages/GpuPage';
import { render } from 'preact';

render(html`<${GpuPage} //>`, document.querySelector('.page') as HTMLDivElement);
