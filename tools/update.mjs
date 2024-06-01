import fs from 'fs';
import { pageIds } from '../rollup.config.mjs';
import { buildPage } from './buildPage.mjs';
import { updateTemplate } from './updateTemplate.mjs';

pageIds.forEach(id => {
    const html = buildPage(id);
    fs.writeFileSync(`${id}.html`, html, 'utf-8');
});

pageIds.forEach(id => updateTemplate(id));
