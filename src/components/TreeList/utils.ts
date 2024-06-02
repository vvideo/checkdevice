import { html } from 'htm/preact';
import { VNode } from 'preact';
import { b } from './className';

export function buildData(data: any): VNode {
    if (typeof data === 'string') {
        return html`<span class="${b('string')}">'${data}'</span>`;
    }

    if (typeof data === 'number') {
        return html`<span class="${b('number')}">${data}</span>`;
    }

    if (typeof data === 'boolean') {
        return html`<span class="${b('boolean')}">${String(data)}</span>`;
    }

    if (data === undefined) {
        return html`<span class="${b('undefined')}">undefined</span>`;
    }

    if (data === null) {
        return html`<span class="${b('null')}">null</span>`;
    }

    if (typeof data === 'function') {
        return html`<span class="${b('function')}">function</span>`;
    }

    if (Array.isArray(data)) {
        return html`<ul>
            ${data.map(item => {
                return html`<li>${buildData(item)}</li>`;
            })}
        </ul>`;
    }

    return html`<ul>
        ${Object.keys(data).map((key: string) => {
            return html`<li><span class="${b('property')}">${key}: </span>${buildData(data[key])}</div>`;
        })}
    </ul>`;
}
