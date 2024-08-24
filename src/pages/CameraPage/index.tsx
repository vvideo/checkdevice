import { h } from 'preact';
import { addI18nKeyset, i18n } from '../../i18n';
import { Camera } from './components/Camera';
import { Page } from '../Page';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function CameraPage() {
    return (
        <Page title={i18n('Webcamera')}>
            <Camera />
        </Page>
    );
}
