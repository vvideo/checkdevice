import { h } from 'preact';
import {
    isAPngSupported,
    isAvifSupported,
    isGifSupported,
    isJpegSupported,
    isPngSupported,
    isSvgSupported,
    isWebpSupported,
    GIF_CONTENT_TYPE,
    JPEG_CONTENT_TYPE,
    PNG_CONTENT_TYPE,
    APNG_CONTENT_TYPE,
    SVG_CONTENT_TYPE,
    WEBP_CONTENT_TYPE,
    HEIC_CONTENT_TYPE,
    AVIF_CONTENT_TYPE,
    isHeicSupported,
    isJpegXlSupported,
    JPEG_XL_CONTENT_TYPE,
} from 'detect-audio-video';
import { useState, useRef } from 'preact/hooks';

import { Codec } from '../../../../components/Codec';
import { Column } from '../../../../components/Column';
import { Columns } from '../../../../components/Columns';
import { i18n } from '../../../../i18n';
import { block } from '../../../../utils/css/bem';

import './index.css';

function getSupportedImageFormats() {
    const result: Record<string, boolean> = {
        svg: isSvgSupported(),
    };

    const formats: Record<string, Promise<boolean>> = {
        png: isPngSupported(),
        apng: isAPngSupported(),
        jpeg: isJpegSupported(),
        jpegXl: isJpegXlSupported(),
        gif: isGifSupported(),
        avif: isAvifSupported(),
        webp: isWebpSupported(),
        heic: isHeicSupported(),
    };

    const promises: Promise<void>[] = [];

    Object.keys(formats).forEach(key => {
        promises.push(formats[key].then(isSupported => {
            result[key] = isSupported;
        }));
    });

    return Promise.all(promises).then(() => result);
}

const b = block('image-formats');

export function ImageFormats() {
    const supported: h.JSX.Element[] = [];
    const unsupported: h.JSX.Element[] = [];

    const [_, setReady] = useState(false);
    const ref = useRef<Record<string, boolean>>({});

    getSupportedImageFormats().then(data => {
        setReady(true);
        ref.current = data;
    });

    const images = ref.current;
    [
        { supported: images.gif, name: 'GIF', color: 'orange', tooltip: GIF_CONTENT_TYPE },
        { supported: images.png, name: 'PNG', color: 'orange', tooltip: PNG_CONTENT_TYPE },
        { supported: images.apng, name: 'APNG', color: 'orange', tooltip: APNG_CONTENT_TYPE },
        { supported: images.jpeg, name: 'JPEG', color: 'blue', tooltip: JPEG_CONTENT_TYPE },
        { supported: images.jpeg, name: 'JPEG XL', color: 'blue', tooltip: JPEG_XL_CONTENT_TYPE },
        { supported: images.svg, name: 'SVG', color: 'red', tooltip: SVG_CONTENT_TYPE },
        { supported: images.webp, name: 'WebP', color: 'green', tooltip: WEBP_CONTENT_TYPE },
        { supported: images.heif, name: 'HEIC', color: 'orange', tooltip: HEIC_CONTENT_TYPE },
        { supported: images.avif, name: 'AVIF', color: 'yellow', tooltip: AVIF_CONTENT_TYPE },
    ].map(item => {
        if (item.supported) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                tooltip: getTooltip(item.tooltip),
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                color: 'black',
                disabled: true,
                tooltip: getTooltip(item.tooltip),
            }));
        }
    });

    return (<Columns>
        <Column name={i18n('Supported')}>
            {supported.length ? supported : i18n('No supported image formats.')}
        </Column>
        {unsupported.length ? (<Column disabled name={i18n('Unsupported')}>{unsupported}</Column>) : null}
    </Columns>);
}

function getTooltip(mimeType: string) {
    return (<div class={b('tooltip')}>{i18n('MIME type')}: <code>{mimeType}</code></div>);
}
