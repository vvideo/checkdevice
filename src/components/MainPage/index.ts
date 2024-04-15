import { html } from 'htm/preact';
import { useEffect, useState } from 'preact/hooks';
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
import { Platform } from '../Platform';
import { Battery } from '../Battery';
import { Connection } from '../Connection';

import './index.css';
import { NetworkSpeed } from '../NetworkSpeed';

const b = block('main-page');

export function MainPage() {
    const [forceRender, setForceRender] = useState(0);

    useEffect(() => {
        function onVisibilityСhange() {
            setForceRender(forceRender + 1);
        }

        document.addEventListener('visibilitychange', onVisibilityСhange);

        return () => {
            document.removeEventListener('visibilitychange', onVisibilityСhange);
        };
    }, [forceRender]);

    return html`
        <div class="${b()}">
            <${Header}><//>

            <${Questions}><//>
            <${ScreenBadges}><//>

            <${Row} name="${i18n('Audio')}">
                <${AudioBadges}><//>
            <//>

            <${Row} name="${i18n('Audio Codecs')}">
                <${AudioCodecs}><//>
            <//>

            <${Row} name="${i18n('Video Codecs')}">
                <${VideoCodecs}><//>
            <//>

            <${Row} name="DRM">
                <${DrmBadges}><//>
            <//>

            <${Row} name="${i18n('Image Formats')}">
                <${ImageFormats}><//>
            <//>

            <${Row} name="${i18n('Native Streaming Support')}">
                <${NativeStreaming}><//>
            <//>

            <${Row} name="${i18n('HTMLVideoElement Features')}">
                <${HtmlVideoElementFeatures}><//>
            <//>

            <${Row} name="${i18n('Network Speed')}">
                <${NetworkSpeed}><//>
            <//>

            <${Platform}><//>

            <${Gpu}><//>

            <${Connection}><//>

            <${Battery}><//>

            <${Footer}><//>
        </div>`;
}
