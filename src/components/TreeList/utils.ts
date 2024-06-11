import { html } from 'htm/preact';
import { VNode } from 'preact';
import { b } from './className';

const simpleTypes = {
    string: true,
    number: true,
    bigint: true,
    boolean: true,
    symbol: true,
    undefined: true,
    function: true,
    object: false,
};

function isArrayWithSimpleTypes(arr: any[]) {
    return arr.every(item => {
        return item === null || simpleTypes[typeof item];
    });
}

export interface BuildDataOptions {
    compactObject?: boolean;
    compactArrayWithSimpleTypes?: boolean;
    showArrayIndex?: boolean;
    showCurlyBracesAtRootLevel?: boolean;
}

export function buildData(data: any, options: BuildDataOptions = {}, level = 0): VNode {
    if (typeof data === 'string') {
        return html`<span class="${b('string')}">'${data}'</span>`;
    }

    if (typeof data === 'number') {
        return html`<span class="${b('number')}">${data}</span>`;
    }

    if (typeof data === 'bigint') {
        return html`<span class="${b('bigint')}">${data}n</span>`;
    }

    if (typeof data === 'boolean') {
        return html`<span class="${b('boolean')}">${String(data)}</span>`;
    }

    if (typeof data === 'function') {
        return html`<span class="${b('function')}">function</span>`;
    }

    if (typeof data === 'symbol') {
        return html`<span class="${b('symbol')}">${data}</span>`;
    }

    if (typeof data === 'undefined') {
        return html`<span class="${b('undefined')}">undefined</span>`;
    }

    if (data === null) {
        return html`<span class="${b('null')}">null</span>`;
    }

    if (Array.isArray(data)) {
        if (options.compactArrayWithSimpleTypes && isArrayWithSimpleTypes(data)) {
            return html`[${' '}
                ${data.map((item, i) => {
                    return html`${i ? ', ' : ''}${buildData(item, options, level + 1)}`;
                })}
            ${' '}]`;
        } else {
            return html`[<ul>
                ${data.map((item, i) => {
                    const arrayIndex = options.showArrayIndex ? html` <span class="${b('index')}">${i}: </span>` : '';
                    return html`<li>${arrayIndex}${buildData(item, options, level + 1)}${i === data.length - 1 ? '' : ','}</li>`;
                })}
            </ul>]`;
        }
    }

    if (options.compactObject && level > 0) {
        return html`{${' '}
            ${Object.keys(data).map((key: string, i: number, items) => {
                return html`<span class="${b('property')}">${key}: </span>${buildData(data[key], options, level + 1)}${i === items.length - 1 ? '' : ', '}`;
            })}
        ${' '}}`;
    }

    let hasBraces = Boolean(options.showCurlyBracesAtRootLevel || level);
    return html`${hasBraces ? '{' : ''}<ul class="${b('ul', { padding: hasBraces ? 'yes' : 'no' })}">
        ${Object.keys(data).map((key: string, i: number, items) => {
            return html`<li><span class="${b('property')}">${key}: </span>${buildData(data[key], options, level + 1)}${i === items.length - 1 ? '' : ','}</li>`;
        })}
    </ul>${hasBraces ? '}' : ''}`;
}
