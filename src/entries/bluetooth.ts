import { html } from 'htm/preact';
import { render } from 'preact';
import { BluetoothPage } from '../pages/BluetoothPage';

render(html`<${BluetoothPage} //>`, document.querySelector('.page') as HTMLDivElement);
