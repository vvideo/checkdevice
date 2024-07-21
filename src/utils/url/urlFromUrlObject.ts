import { UrlObject } from './parseUrl';

export function urlFromUrlObject(urlObject: UrlObject): string {
    const host =
        urlObject.port === '443' || urlObject.port === '80' ? urlObject.hostname : urlObject.host;

    return `${urlObject.protocol}//${host}${urlObject.pathname}${urlObject.search}${urlObject.hash}`;
}