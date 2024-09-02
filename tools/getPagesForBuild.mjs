import { loadJson } from './utils/loadJson.mjs';
import process from 'process';

let pages = loadJson('./src/pages/pages.json');

const pageId = process.env.PAGE_ID;

if (pageId) {
    pages = pages.filter(item => item.id === pageId);
}

export default pages;
