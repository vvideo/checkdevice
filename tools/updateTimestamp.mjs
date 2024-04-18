import fs from 'fs';

const FILENAME_INDEX_HTML = './index.html';
const indexHtml = fs.readFileSync(FILENAME_INDEX_HTML, { encoding: 'utf-8'});
const content = indexHtml.replace(/(?<=\?ts=)\d+/g, Date.now());
fs.writeFileSync(FILENAME_INDEX_HTML, content, 'utf-8');

