import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { formatBytesToGB } from '../../../../utils/formatBytesToGB';
import { ExtLink } from '../../../../components/ui/ExtLink';
import { getChecked } from '../../../../utils/getChecked';
import { i18n } from '../../../../i18n';
import { List } from '../../../../components/ui/List';
import { isSsr } from '../../../../utils/isSsr';

export function StorageFeatures() {
    const [quota, setQuota] = useState<undefined | number>(undefined);

    if (isSsr || typeof navigator.storage?.estimate !== 'function') {
        return null;
    }

    useEffect(() => {
        navigator.storage.estimate().then(data => {
            if (typeof data.quota !== 'undefined') {
                setQuota(data.quota);
            }
        });
    }, []);

    const features: Array<[h.JSX.Element | string, string]> = [
        [
            (<ExtLink theme="white" href="https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist">{i18n('Support of persistent storage')}</ExtLink>),
            getChecked(Boolean(typeof navigator.storage?.persist === 'function'))
        ],
    ];

    if (typeof quota === 'number') {
        features.push([
            (<ExtLink theme="white" href="https://developer.mozilla.org/ru/docs/Web/API/StorageManager/estimate">{i18n('Storage quota for origin')}</ExtLink>),
            formatBytesToGB(quota)
        ]);
    }

    return (<List title={i18n('Features')} items={features} />);
}
