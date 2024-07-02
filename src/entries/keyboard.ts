import { html } from 'htm/preact';
import { render } from 'preact';
import { KeyboardPage } from '../pages/KeyboardPage';
import { keyboardLedController } from '../lib/KeyboardLedController';

keyboardLedController.on();

render(html`<${KeyboardPage} //>`, document.querySelector('.page') as HTMLDivElement);
