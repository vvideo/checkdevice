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

import './index.css';

const b = block('main-page');

export function MainPage() {
    return html`
        <div class="${b()}">
            <${Header}><//>

            <${Questions}><//>
            <${ScreenBadges}><//>

            <${Row} name="Audio">
                <${AudioBadges}><//>
            <//>

            <${AudioCodecs}><//>

            <${Row} name="Video Codecs">
                <${VideoCodecs}><//>
            <//>

            <${Row} name="DRM">
                <${DrmBadges}><//>
            <//>

            <${ImageFormats}><//>

            <${Row} name="Native Streaming Support">
                <${NativeStreaming}><//>
            <//>

            <${Row} name="HTMLVideoElement Features">
                <${HtmlVideoElementFeatures}><//>
            <//>

            <${Footer}><//>
        </div>`;
}
