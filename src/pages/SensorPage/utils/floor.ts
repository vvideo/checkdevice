export function floor(sensorValue: number | undefined | null) {
    return typeof sensorValue === 'undefined' || sensorValue === null ? sensorValue : Math.floor(sensorValue * 1e6) / 1e6;
}

export function floorTimestamp(sensorValue: number | undefined | null) {
    return typeof sensorValue === 'undefined' || sensorValue === null ? sensorValue : Math.floor(sensorValue * 1e3) / 1e3;
}
