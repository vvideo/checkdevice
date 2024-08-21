import { h } from 'preact';

import { i18n } from '../../i18n';
import { Page } from '../Page';
import { Sensor } from './components/Sensor';

export function SensorPage() {
    return (
        <Page title={i18n('Sensors')}>
            <Sensor />
        </Page>
    );
}
