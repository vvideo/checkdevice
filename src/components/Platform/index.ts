import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { noop } from '../../utils/noop';

let cachedPromise: Promise<any> | undefined;

export function Platform() {
    const ref = useRef<[string, any][]>([]);
    const [_, setUserData] = useState(false);

    // @ts-ignore
    cachedPromise = cachedPromise || navigator.userAgentData?.getHighEntropyValues?.([
        'architecture',
        'bitness',
        'formFactor',
        'fullVersionList',
        'model',
        'platformVersion',
        'wow64',
    ]).then((data: any) => {
        const result: [string, any][] = [
            ['platform', `${data.platform} ${(data.platformVersion || '')}`],
            ['architecture', `${data.architecture} ${(data.bitness || '')}`],
            ['formFactor', data.formFactor],
            ['model', data.model],
        ]; 

        ref.current = result.filter(item => item[1]);

        setUserData(true);
    }).catch(noop);

    let items: [string, any][] = [
        ['hardwareConcurrency', navigator.hardwareConcurrency],
        ['deviceMemory', navigator.deviceMemory],
        ['userAgent', navigator.userAgent],
    ];

    if (ref.current.length) {
        items = [...ref.current, ...items];
    } else {
        items = [
            ['platform', navigator.platform],
            ...items,
        ];
    }
    
    return html`<${List} title="${i18n('Platform')}" items="${items}" //>`;
}
