export function getCfIp(text: string) {
    if (!text) {
        return '';
    }

    const result = text.match(/^ip=([\w\d:]+?)$/m);
    if (result) {
        return result[1];
    }

    return '';
}