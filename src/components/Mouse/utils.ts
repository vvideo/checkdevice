import { isMacintosh } from '../../utils/platform';

export function prepareDeltaY(event: WheelEvent): number {
    return (event.deltaMode ? 10 : event.deltaY) * (isMacintosh() ? -1 : 1)
}
