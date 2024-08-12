import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { i18n } from '../../i18n';
import { List } from '../List';
import { noop } from '../../utils/noop';
import { isStandalone, hasHardwareAcceleration } from 'detect-audio-video';
import { VNode } from 'preact';
import { InfoLink } from '../InfoLink';
import { getChecked } from '../../utils/getChecked';
import { isSsr } from '../../utils/isSsr';
import { ValueInProgress } from '../ValueInProgress';
import { DateInProgress } from '../DateInProgress';

export function Platform() {
    const ref = useRef<[string, any][]>([]);
    const [_, setUserData] = useState(false);
    const [hardwareAcceleration, setHardwareAcceleration] = useState<boolean | undefined>(undefined);

    if(!isSsr) {
        hasHardwareAcceleration().then(result => {
            setHardwareAcceleration(result);
        });
    }

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !isSsr && navigator.userAgentData?.getHighEntropyValues?.([
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
            isSsr ? html`<${ValueInProgress} />` : navigator.hardwareConcurrency
        ],
        [
            i18n('Standalone application'),
            isSsr ? html`<${ValueInProgress} />` : getChecked(isStandalone())
        ],
        [
            'User agent',
            isSsr ? html`<${ValueInProgress} />` : navigator.userAgent
        ],
        [
            i18n('Date and time'),
            isSsr ? html`<${ValueInProgress} />` : html`<${DateInProgress} //>`,
        ]
    ];

    if (!isSsr && navigator.deviceMemory) {
        items.unshift([
            html`${i18n('RAM')} <${InfoLink} title="MDN" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory"><//>`,
            `≈\u202F${navigator.deviceMemory} ${i18n('GB')}`
        ]);
    }

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
                isSsr ? '…' : navigator.platform
            ],
            ...items,
        ];
    }

    return html`<${List} items="${items}" //>`;
}
