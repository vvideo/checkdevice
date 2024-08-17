export function prepareAdapterLimits(limits?: GPUSupportedLimits | null) {
    if (!limits) {
        return {};
    }

    const result: Record<string, number> = {};
    for (const key in limits) {
        // @ts-ignore
        result[key] = limits[key];

    }

    return result;
}

export function prepareAdapterFeatures(features?: GPUSupportedFeatures | null) {
    if (!features) {
        return [];
    }

    const result: string[] = [];

    features.forEach(item => {
        result.push(item);
    });

    return result.sort();
}

export function prepareAdapterInfo(adapterInfo?: GPUAdapterInfo | null) {
    return adapterInfo ? {
        vendor: adapterInfo.vendor,
        architecture: adapterInfo.architecture,
        description: adapterInfo.description,
        device: adapterInfo.device,
    } : {};
}
