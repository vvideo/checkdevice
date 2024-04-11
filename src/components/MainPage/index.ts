import { html } from 'htm/preact';
import { AudioBadges } from '../AudioBadges';
import { ScreenBadges } from '../ScreenBadges';
import { AudioCodecs } from '../AudioCodecs';
import { VideoCodecs } from '../VideoCodecs';
import { Header } from '../Header';
import { DrmBadges } from '../DrmBadges';
import { Row } from '../Row';
import { NativeStreaming } from '../NativeStreaming';
import { Questions } from '../Questions';
import { HtmlVideoElementFeatures } from '../HtmlVideoElementFeatures';
import { block } from '../../utils/bem';
import { Footer } from '../Footer';
import { ImageFormats } from '../ImageFormats';
import { i18n } from '../../i18n/i18n';
import { Gpu } from '../Gpu';

import './index.css';
import { Platform } from '../Platform';
import { Battery } from '../ Battery';
import { Connection } from '../Connection';

const b = block('main-page');

export function MainPage() {
    return html`
        <div class="${b()}">
            <${Header}><//>

            <${Questions}><//>
            <${ScreenBadges}><//>

            <${Row} name="${i18n('Audio')}">
                <${AudioBadges}><//>
            <//>

            <${AudioCodecs}><//>

            <${Row} name="${i18n('Video Codecs')}">
                <${VideoCodecs}><//>
            <//>

            <${Row} name="DRM">
                <${DrmBadges}><//>
            <//>

            <${ImageFormats}><//>

            <${Row} name="${i18n('Native Streaming Support')}">
                <${NativeStreaming}><//>
            <//>

            <${Row} name="${i18n('HTMLVideoElement Features')}">
                <${HtmlVideoElementFeatures}><//>
            <//>

            <${Platform}><//>

            <${Gpu}><//>

            <${Connection}><//>

            <${Battery}><//>

            <${Footer}><//>
        </div>`;
}
