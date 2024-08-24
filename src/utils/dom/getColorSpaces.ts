import { isP3Supported, isRec2020Supported, isSrgbSupported } from "detect-audio-video";

export function getColorSpaceTitle(name: string) {
    return {
        srgb: 'sRGB',
        p3: 'DCI-P3',
        rec2020: 'Rec.2020',
    }[name] || name;
}

export const colorSpaceTypes = [
    'srgb',
    'p3',
    'rec2020',
];

export function prepareColorSpaces(spaces?: string[]) {
    if (!spaces) {
        return '';
    }

    return colorSpaceTypes.map(item => {
        const title = getColorSpaceTitle(item);
        return `${spaces.indexOf(item) > -1 ? '✓' : '✗'} ${title}`;
    }).join(',\u00A0');
}

export function getColorSpaces(win = window) {
    const result: string[] = [];

    if (isSrgbSupported(win)) {
        result.push('srgb');
    }

    if (isP3Supported(win)) {
        result.push('p3');
    }

    if (isRec2020Supported(win)) {
        result.push('rec2020');
    }

    return result;
}

