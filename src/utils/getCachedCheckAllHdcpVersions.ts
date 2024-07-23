import { CheckHdcpVersion, checkAllHdcpVersions } from 'hdcp';
import { isSsr } from './isSsr';

interface CacheItem {
    promise: Promise<CheckHdcpVersion[]>;
    timestamp: number;
}

const cache: Record<string, CacheItem> = {};
const CACHE_ITEM_LIFETIME = 5000;

export function resetCacheCheckAllHdcpVersions() {
    Object.keys(cache).forEach(key => {
        delete cache[key];
    });
}

export function getCachedCheckAllHdcpVersions(keySystem: string) {
    const result = cache[keySystem];
    if (result) {
        if (result.timestamp + CACHE_ITEM_LIFETIME < Date.now()) {
            delete cache[keySystem];
        } else {
            return result.promise;
        }
    }

    const promise = isSsr ? Promise.resolve([]) : checkAllHdcpVersions(keySystem);

    cache[keySystem] = {
        promise,
        timestamp: Date.now(),
    };

    return promise;
}
