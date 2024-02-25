import {
    isAPngSupported,
    isAvifSupported,
    isGifSupported,
    isHeifSupported,
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
    HEIF_CONTENT_TYPE,
    AVIF_CONTENT_TYPE,
} from 'detect-audio-video';

import { Codec } from '../Codec';
import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { Row } from '../Row';
import { VNode } from 'preact';
import { Column } from '../Column';
import { Columns } from '../Columns';

function getImageFormatsSupported() {
    const result: Record<string, boolean> = {
        svg: isSvgSupported(),
    };

    const formats: Record<string, Promise<boolean>> = {
        png: isPngSupported(),
        apng: isAPngSupported(),
        jpeg: isJpegSupported(),
        gif: isGifSupported(),
        avif: isAvifSupported(),
        webp: isWebpSupported(),
        heif: isHeifSupported(),
    };

    const promises: Promise<void>[] = [];

    Object.keys(formats).forEach(key => {
        promises.push(formats[key].then(isSupported => {
            result[key] = isSupported;
        }));
    });

    return Promise.all(promises).then(() => result);
}

export function ImageFormats() {
    const supported: VNode[] = [];
    const unsupported: VNode[] = [];

    const [_, setReady] = useState(false);
    const ref = useRef<Record<string, boolean>>({});

    getImageFormatsSupported().then(data => {
        setReady(true);
        ref.current = data;
    });


    const images = ref.current;
    [
        { supported: images.gif, name: 'GIF', color: 'blue', tooltip: GIF_CONTENT_TYPE },
        { supported: images.jpeg, name: 'JPEG', color: 'blue', tooltip: JPEG_CONTENT_TYPE },
        { supported: images.png, name: 'PNG', color: 'blue', tooltip: PNG_CONTENT_TYPE },
        { supported: images.apng, name: 'APNG', color: 'blue', tooltip: APNG_CONTENT_TYPE },
        { supported: images.svg, name: 'SVG', color: 'red', tooltip: SVG_CONTENT_TYPE },
        { supported: images.webp, name: 'WebP', color: 'green', tooltip: WEBP_CONTENT_TYPE },
        { supported: images.heif, name: 'HEIF', color: 'orange', tooltip: HEIF_CONTENT_TYPE },
        { supported: images.avif, name: 'AVIF', color: 'yellow', tooltip: AVIF_CONTENT_TYPE },
    ].map(item => {
        if (item.supported) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                tooltip: item.tooltip,
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                color: 'black',
                disabled: true,
                tooltip: item.tooltip,
            }));
        }
    });

    return html`<${Row} name="Image Formats">
        <${Columns}>
            <${Column} name="Supported">
                ${supported.length ? supported : 'No supported image formats.'}
            <//>
            ${unsupported.length ? html`<${Column} name="Unsupported">${unsupported}<//>` : ''}
        <//>
    <//>`;
}
