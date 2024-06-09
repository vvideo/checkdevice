import fs from 'fs';

export function loadJson(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}
