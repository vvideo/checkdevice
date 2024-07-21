export interface UrlObject {
    originalPath: string;
    href: string;
    protocol: string;
    /**
     * Тут лежит значение `${hostname}:${port}`
     */
    host: string;
    /**
     * Тут лежит домен хоста, адрес хоста
     */
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
}

const PARSE_LINK_ELEMENT = document.createElement('a');

export function parseUrl(url: string): UrlObject {
    PARSE_LINK_ELEMENT.href = url;

    let pathname = PARSE_LINK_ELEMENT.pathname || '';
    if (pathname.charAt(0) !== '/') {
        pathname = `/${pathname}`;
    }

    const searchAndHash = (PARSE_LINK_ELEMENT.search || '') + (PARSE_LINK_ELEMENT.hash || '');
    const pos = url.lastIndexOf(searchAndHash);
    const originalPath = pos === -1 ? url : url.slice(0, pos);

    return {
        originalPath,
        href: PARSE_LINK_ELEMENT.href,
        protocol: PARSE_LINK_ELEMENT.protocol,
        host: PARSE_LINK_ELEMENT.host,
        hostname: PARSE_LINK_ELEMENT.hostname,
        port: PARSE_LINK_ELEMENT.port,
        pathname,
        search: PARSE_LINK_ELEMENT.search,
        hash: PARSE_LINK_ELEMENT.hash,
    };
}
