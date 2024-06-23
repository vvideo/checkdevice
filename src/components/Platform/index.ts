import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { i18n } from '../../i18n/i18n';
import { List } from '../List';
import { noop } from '../../utils/noop';
import { isStandalone, hasHardwareAcceleration } from 'detect-audio-video';
import { VNode } from 'preact';
import { InfoLink } from '../InfoLink';
import { getChecked } from '../../utils/getChecked';

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
            [
                i18n('Name'),
                `${data.platform} ${(data.platformVersion || '')}`
            ],
            [
                i18n('Architecture'),
                data.architecture ? `${data.architecture} ${(data.bitness || '')}` : ''
            ],
            [
                i18n('Form factor'),
                data.formFactor
            ],
            [
                i18n('Model'),
                data.model
            ],
        ];

        ref.current = result.filter(item => item[1]);

        setUserData(true);
    }).catch(noop);

    let items: [VNode | string, any][] = [
        [
            html`Hardware concurrency <${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"><//>`,
            navigator.hardwareConcurrency
        ],
        [
            html`${i18n('RAM')} <${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>`,
            navigator.deviceMemory ? `≈${navigator.deviceMemory} ${i18n('GB')}` : '?'
        ],
        [
            i18n('Standalone application'),
            getChecked(isStandalone())
        ],
        [
            'User agent',
            navigator.userAgent
        ],
    ];

    if (hardwareAcceleration !== undefined) {
        items.push([
            i18n('Hardware acceleration'),
            getChecked(hardwareAcceleration)
        ]);
    }

    if (ref.current.length) {
        items = [...ref.current, ...items];
    } else {
        items = [
            [
                i18n('Name'),
                navigator.platform
            ],
            ...items,
        ];
    }

    return html`<${List} items="${items}" //>`;
}
