export function floor(sensorValue: number | undefined) {
    return typeof sensorValue === 'undefined' ? sensorValue : Math.floor(sensorValue * 1e6) / 1e6;
}
