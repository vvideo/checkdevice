import { html } from 'htm/preact';
import { VNode, render } from 'preact';

export function renderToRoot(Component: () => VNode) {
    return render(html`<${Component} //>`, document.querySelector('.root') as HTMLDivElement);
}
