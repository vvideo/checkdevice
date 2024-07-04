import { html } from 'htm/preact';
import { render } from 'preact';
import { KeyboardPage } from '../pages/KeyboardPage';
import { keyboardLedController } from '../lib/KeyboardLedController';
import { keyboardStateController } from '../lib/KeyboardStateController';

keyboardStateController.on();
keyboardLedController.on();

render(html`<${KeyboardPage} //>`, document.querySelector('.page') as HTMLDivElement);
