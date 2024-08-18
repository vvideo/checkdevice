import { h, render } from 'preact';

export function renderToRoot(Component: () => h.JSX.Element) {
    return render(<Component />, document.querySelector('.root') as HTMLDivElement);
}
