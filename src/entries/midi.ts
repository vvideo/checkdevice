import { html } from 'htm/preact';
import { render } from 'preact';
import { MidiPage } from '../pages/MidiPage';

render(html`<${MidiPage} //>`, document.querySelector('.page') as HTMLDivElement);
