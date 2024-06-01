import fs from 'fs';
import { createMD5 } from './md5.mjs';

export function updateTemplate(pageId) {
    const fileName = `./${pageId}.html`;
    const html = fs.readFileSync(fileName, { encoding: 'utf-8'});

    const content = html.replace(/(src|href)="(.*?)"/g, ($0, attr, file) => {
        if (!$0.includes('./dist')) {
            return $0;
        }

        const preparedFile = file.split('?')[0];

        return `${attr}="${preparedFile}?md5=${createMD5(preparedFile)}"`;
    });

    fs.writeFileSync(fileName, content, 'utf-8');
}
