import { html } from 'htm/preact';
import { render } from 'preact';
import { BatteryPage } from '../pages/BatteryPage';

render(html`<${BatteryPage} //>`, document.querySelector('.page') as HTMLDivElement);
