import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
import { formatBytesToGB } from '../../utils/formatBytesToGB';
import { ExtLink } from '../ExtLink';
import { getChecked } from '../../utils/getChecked';
import { i18n } from '../../i18n/i18n';
import { VNode } from 'preact';
import { List } from '../List';

export function StorageFeatures() {
    const [quota, setQuota] = useState<null | number>(null);

    if (typeof navigator.storage?.estimate !== 'function') {
        return '';
    }

    useEffect(() => {
        navigator.storage.estimate().then(data => {
            if (data.quota) {
                setQuota(data.quota);
            }
        });
    }, []);

    const features: Array<[VNode | string, string]> = [];
    if (quota) {
        features.push([
            html`<${ExtLink} theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">${i18n('Storage quota for origin')}<//>`,
            formatBytesToGB(quota)
        ]);
    }

    features.push([
        html`<${ExtLink} theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">${i18n('Support of persistent storage')}<//>`,
        getChecked(Boolean(typeof navigator.storage?.persist === 'function'))
    ]);

    return html`
        <${List} title="${i18n('Features')}" items="${features}"><//>
    `;
}
