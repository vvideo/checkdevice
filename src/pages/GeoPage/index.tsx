import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { GeoLocation } from './components/GeoLocation';
import { config } from '../../config';

export function GeoPage() {
    return (
        <Page title={i18n('Geo')}>
            <GeoLocation yaMapsApiKey={config.yaMapsApiKey} />
        </Page>
    );
}
