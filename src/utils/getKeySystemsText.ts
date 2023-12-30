export function getKeySystemsText(keySystems: string[]) {
    if (keySystems.length === 0) {
        return '';
    }

    if (keySystems.length === 1) {
        return `KeySystem: ${keySystems[0]}`;
    }

    return `KeySystems: \n` + keySystems.map(item => `• ${item}`).join('\n');
}
