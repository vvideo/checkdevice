import { html } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { ScreenBadges } from '../../components/ScreenBadges';
import { VideoCodecs } from '../../components/VideoCodecs';
import { Header } from '../../components/Header';
import { DrmBadges } from '../../components/DrmBadges';
import { Row } from '../../components/Row';
import { NativeStreaming } from '../../components/NativeStreaming';
import { VideoQuestions } from '../../components/VideoQuestions';
import { HtmlVideoElementFeatures } from '../../components/HtmlVideoElementFeatures';
import { ImageFormats } from '../../components/ImageFormats';
import { i18n } from '../../i18n/i18n';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { Page } from '../Page';

export function VideoPage() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        function onVisibilityСhange() {
            forceUpdate();
        }

        document.addEventListener('visibilitychange', onVisibilityСhange);

        return () => {
            document.removeEventListener('visibilitychange', onVisibilityСhange);
        };
    }, []);

    return html`
        <${Page}>
            <${Header}>
                ${i18n('Can I watch video in this browser?')}
            <//>

            <${VideoQuestions}><//>
            <${ScreenBadges}><//>

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
        <//>`;
}
