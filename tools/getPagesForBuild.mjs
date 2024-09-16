import { loadJson } from './utils/loadJson.mjs';
import process from 'process';

let pages = loadJson('./src/pages/pages.json');

const pageId = process.env.PAGE_ID;

if (pageId) {
    const pageIds = pageId.split(',');
    pages = pages.filter(item => pageIds.includes(item.id));
}

export default pages;
