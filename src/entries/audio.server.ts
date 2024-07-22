import render from 'preact-render-to-string';
import { html } from 'htm/preact';
import { AudioPage } from '../pages/AudioPage';

console.log(render(html`<${AudioPage} //>`));
