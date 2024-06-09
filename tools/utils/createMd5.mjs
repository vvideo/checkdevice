import crypto from 'crypto';
import fs from 'fs';

export function createMD5(filePath) {
    const hash = crypto.createHash('md5');
    const content = fs.readFileSync(filePath, { encoding: 'utf-8'});
    hash.update(content);

    return hash.digest('hex');
}
