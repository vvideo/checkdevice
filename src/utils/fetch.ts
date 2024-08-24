import { noop } from './function/noop';

export function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    if (window.fetch) {
        return window.fetch.call(null, input, init);
    }

    // TODO: add polyfill

    return new Promise(noop);
}
