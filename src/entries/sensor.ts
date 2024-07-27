import { html } from 'htm/preact';
import { SensorPage } from '../pages/SensorPage';
import { render } from 'preact';

render(html`<${SensorPage} //>`, document.querySelector('.page') as HTMLDivElement);
