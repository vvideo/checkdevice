import { h } from 'preact';
import { useEffect } from 'preact/hooks';

import { ScreenBadges } from '../../components/ScreenBadges';
import { VideoCodecs } from './components/VideoCodecs';
import { DrmBadges } from './components/DrmBadges';
import { Section } from '../../components/ui/Section';
import { NativeStreaming } from './components/NativeStreaming';
import { VideoQuestions } from './components/VideoQuestions';
import { HtmlVideoElementFeatures } from './components/HtmlVideoElementFeatures';
import { ImageFormats } from './components/ImageFormats';
import { i18n } from '../../i18n';
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

    return (
        <Page title={i18n('Video')}>
            <div>
                <h2>{i18n('Can I watch video in this browser?')}</h2>
                <VideoQuestions />
                <ScreenBadges />

                <Section name={i18n('Video Codecs')}>
                    <VideoCodecs />
                </Section>

                <Section name="DRM">
                    <DrmBadges />
                </Section>

                <Section name={i18n('Image Formats')}>
                    <ImageFormats />
                </Section>

                <Section name={i18n('Native Streaming Support')}>
                    <NativeStreaming />
                </Section>

                <Section name={i18n('HTMLVideoElement Features')}>
                    <HtmlVideoElementFeatures />
                </Section>
            </div>
        </Page>
    );
}