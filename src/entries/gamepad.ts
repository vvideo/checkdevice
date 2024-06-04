import { html } from 'htm/preact';
import { render } from 'preact';
import { GamepadPage } from '../pages/GamepadPage';

render(html`<${GamepadPage} //>`, document.querySelector('.page') as HTMLDivElement);
