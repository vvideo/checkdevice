import fs from 'fs';
import { createMD5 } from './utils/createMd5.mjs';

export function updateTemplate(template) {
    const html = fs.readFileSync(template, { encoding: 'utf-8'});

    const content = html.replace(/(src|href)="(.*?)"/g, ($0, attr, file) => {
        if (!$0.includes('/static')) {
            return $0;
        }

        const preparedFile = file.split('?')[0];

        return `${attr}="${preparedFile}?md5=${createMD5(preparedFile[0] === '/' ? preparedFile.slice(1) : preparedFile)}"`;
    });

    fs.writeFileSync(template, content, 'utf-8');
}
