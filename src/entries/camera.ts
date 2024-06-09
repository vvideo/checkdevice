import { html } from 'htm/preact';
import { render } from 'preact';
import { CameraPage } from '../pages/CameraPage';

render(html`<${CameraPage} //>`, document.querySelector('.page') as HTMLDivElement);
