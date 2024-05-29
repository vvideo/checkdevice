import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { noop } from '../../utils/noop';
import { isStandalone, hasHardwareAcceleration } from 'detect-audio-video';
import { VNode } from 'preact';
import { InfoLink } from '../InfoLink';
import { getAutoplayPolicy } from '../../utils/getAutoplayPolicy';

export function Platform() {
    const ref = useRef<[string, any][]>([]);
    const [_, setUserData] = useState(false);
    const [hardwareAcceleration, setHardwareAcceleration] = useState<boolean | undefined>(undefined);

    hasHardwareAcceleration().then(result => {
        setHardwareAcceleration(result);
    });

    // @ts-ignore
    navigator.userAgentData?.getHighEntropyValues?.([
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
            ['architecture', data.architecture ? `${data.architecture} ${(data.bitness || '')}` : ''],
            ['formFactor', data.formFactor],
            ['model', data.model],
        ];

        ref.current = result.filter(item => item[1]);

        setUserData(true);
    }).catch(noop);

    let items: [VNode | string, any][] = [
        ['Hardware concurrency', navigator.hardwareConcurrency],
        [html`Device memory <${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory" //>`, navigator.deviceMemory ? `${navigator.deviceMemory} ${i18n('GB')}` : undefined],
        ['Standalone', isStandalone()],
        ['UserAgent', navigator.userAgent],
    ];

    const autoplayPolicy = getAutoplayPolicy();
    if (autoplayPolicy) {
        items.push(['Autoplay Policy', autoplayPolicy]);
    }

    if (hardwareAcceleration !== undefined) {
        items.push([i18n('Hardware acceleration'), hardwareAcceleration]);
    }

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
