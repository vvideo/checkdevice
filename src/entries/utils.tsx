import { h } from 'preact';
import { VNode, render } from 'preact';

export function renderToRoot(Component: () => VNode) {
    return render(<Component />, document.querySelector('.root') as HTMLDivElement);
}
