import fs from 'fs';
import { createMD5 } from './md5.mjs';

const FILENAME_INDEX_HTML = './index.html';
const indexHtml = fs.readFileSync(FILENAME_INDEX_HTML, { encoding: 'utf-8'});

const content = indexHtml.replace(/(src|href)="(.*?)"/g, ($0, attr, file) => {
    if (!$0.includes('./dist')) {
        return $0;
    }

    const preparedFile = file.split('?')[0];

    return `${attr}="${preparedFile}?md5=${createMD5(preparedFile)}"`;
});

fs.writeFileSync(FILENAME_INDEX_HTML, content, 'utf-8');
