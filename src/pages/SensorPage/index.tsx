import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Sensor } from './components/Sensor';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function SensorPage() {
    return (
        <Page title={i18n('Sensors')}>
            <Sensor />
        </Page>
    );
}
