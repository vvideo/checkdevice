import { isMacintosh } from '../../../../utils/platform';

const MAX_WHEELDELTA = 10;

export function prepareDeltaY(event: WheelEvent): number {
    const coef = isMacintosh() ? -1 : 1;
    let { deltaY } = event;

    if (!event.deltaMode ) {
        if (deltaY > MAX_WHEELDELTA) {
            deltaY = MAX_WHEELDELTA;
        }

        if (deltaY < -MAX_WHEELDELTA) {
            deltaY = -MAX_WHEELDELTA;
        }

        return deltaY * coef;
    }

    return (deltaY > 0 ? MAX_WHEELDELTA : -MAX_WHEELDELTA) * coef;
}
