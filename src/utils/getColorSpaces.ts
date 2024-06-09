function getColorSpaceTitle(name: string) {
    return {
        srgb: 'sRGB',
        p3: 'DCI-P3',
        rec2020: 'Rec.2020',
    }[name] || name;
}

export function getColorSpaces(spaces?: string[]) {
    if (!spaces) {
        return '';
    }

    return [
        'srgb',
        'p3',
        'rec2020',
    ].map(item => {
        const title = getColorSpaceTitle(item);
        return `${spaces.indexOf(item) > -1 ? '✓' : '✗'} ${title}`;
    }).join(',\u00A0');
}
