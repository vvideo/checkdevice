import { html } from 'htm/preact';
import { VideoPage } from '../pages/VideoPage';
import { render } from 'preact';

render(html`<${VideoPage} //>`, document.querySelector('.page') as HTMLDivElement);
