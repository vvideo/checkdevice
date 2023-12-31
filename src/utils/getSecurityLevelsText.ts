export function getSecurityLevelsText(levels: string[]) {
    if (levels.length === 0) {
        return 'Not detected';
    }

    if (levels.length === 1) {
        return `Security level: ${levels[0]}`;
    }

    return `Security levels: ${levels.join(', ')}`;
}
