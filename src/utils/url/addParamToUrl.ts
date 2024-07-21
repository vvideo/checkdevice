import { parseQueryString, QueryStringObject } from './parseQueryUrl';
import { parseUrl } from './parseUrl';
import { urlFromUrlObject } from './urlFromUrlObject';

export function addParamToUrl(url: string, key: string, value?: string | string[]): string {
    if (value === undefined) {
        return url;
    }

    const urlObj = parseUrl(url);
    const queryObj = parseQueryString(urlObj.search);
    queryObj[key] = value;

    return urlFromUrlObject({
        ...urlObj,
        search: formatQueryString(queryObj),
    });
}

const createQueryArrayParam = (key: string, arr: string[]) =>
    arr.map(el => `${key}[]=${encodeURIComponent(el)}`).join('&');

export function formatQueryString(queryObj: Partial<QueryStringObject>): string {
    const result: string[] = [];

    Object.keys(queryObj).forEach(key => {
        const value = queryObj[key];

        if (Array.isArray(value)) {
            result.push(createQueryArrayParam(key, value));
        } else if (value !== undefined) {
            result.push(`${key}=${encodeURIComponent(value)}`);
        }
    });

    if (!result.length) {
        return '';
    }

    return `?${result.join('&')}`;
}

