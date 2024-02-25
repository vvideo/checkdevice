import {
    isAPngSupported,
    isAvifSupported,
    isGifSupported,
    isHeifSupported,
    isJpegSupported,
    isPngSupported,
    isSvgSupported,
    isWebpSupported,
} from 'detect-audio-video';

import { Codec } from '../Codec';
import { html } from 'htm/preact';
import { useState, useRef } from 'preact/hooks';
import { Row } from '../Row';
import { VNode } from 'preact';
import { Column } from '../Column';
import { Columns } from '../Columns';
//import { getTooltip } from '../../utils/getTooltip';

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
        { supported: images.gif, name: 'GIF', color: 'blue' },
        { supported: images.jpeg, name: 'JPEG', color: 'blue' },
        { supported: images.png, name: 'PNG', color: 'blue' },
        { supported: images.apng, name: 'APNG', color: 'blue' },
        { supported: images.svg, name: 'SVG', color: 'red' },
        { supported: images.webp, name: 'WebP', color: 'green' },
        { supported: images.heif, name: 'HEIF', color: 'yellow' },
        { supported: images.avif, name: 'AVIF', color: 'yellow' },
    ].map(item => {
        //const tooltip = getTooltip(item.supported);
        if (item.supported) {
            supported.push(Codec({
                name: item.name,
                color: item.color,
                //tooltip,
            }));
        } else {
            unsupported.push(Codec({
                name: item.name,
                color: 'black',
                disabled: true,
                //tooltip,
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
