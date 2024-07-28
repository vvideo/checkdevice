import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { VNode } from 'preact';
import { formatBytesToGB } from '../../utils/formatBytesToGB';
import { ExtLink } from '../ExtLink';
import { getChecked } from '../../utils/getChecked';
import { i18n } from '../../i18n';
import { List } from '../List';
import { isSsr } from '../../utils/isSsr';

export function StorageFeatures() {
    const [quota, setQuota] = useState<undefined | number>(undefined);

    if (isSsr || typeof navigator.storage?.estimate !== 'function') {
        return '';
    }

    useEffect(() => {
        navigator.storage.estimate().then(data => {
            if (typeof data.quota !== 'undefined') {
                setQuota(data.quota);
            }
        });
    }, []);

    const features: Array<[VNode | string, string]> = [
        [
            html`<${ExtLink} theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">${i18n('Support of persistent storage')}<//>`,
            getChecked(Boolean(typeof navigator.storage?.persist === 'function'))
        ],
    ];

    if (typeof quota === 'number') {
        features.push([
            html`<${ExtLink} theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">${i18n('Storage quota for origin')}<//>`,
            formatBytesToGB(quota)
        ]);
    }

    return html`<${List} title="${i18n('Features')}" items="${features}"><//>`;
}
