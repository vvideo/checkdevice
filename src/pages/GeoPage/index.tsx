import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { GeoLocation } from './components/GeoLocation';
import { config } from '../../config';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function GeoPage() {
    return (
        <Page title={i18n('Geo')}>
            <GeoLocation yaMapsApiKey={config.yaMapsApiKey} />
        </Page>
    );
}
