export function prepareAdapterLimits(limits?: GPUSupportedLimits | null) {
    if (!limits) {
        return [];
    }

    const result: Array<[string, any]> = [];
    for (const key in limits) {
        // @ts-ignore
        result.push([key, limits[key]]);
    }

    result.sort((a, b) => a[0] > b[0] ? 1 : -1);

    return result;
}

export function prepareAdapterFeatures(features?: GPUSupportedFeatures | null) {
    if (!features) {
        return [];
    }

    const result: Array<[string]> = [];

    features.forEach(item => {
        result.push([item]);
    });

    return result.sort();
}

export function prepareAdapterInfo(adapterInfo?: GPUAdapterInfo | null) {
    return adapterInfo ? [
        ['vendor', adapterInfo.vendor],
        ['architecture', adapterInfo.architecture],
        ['description', adapterInfo.description],
        ['device', adapterInfo.device],
    ] : [];
}
