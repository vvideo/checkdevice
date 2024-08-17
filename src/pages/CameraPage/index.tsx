import { h } from 'preact';
import { i18n } from '../../i18n';
import { Camera } from './components/Camera';
import { Page } from '../Page';

export function CameraPage() {
    return (
        <Page title={i18n('Webcamera')}>
            <Camera />
        </Page>
    );
}
