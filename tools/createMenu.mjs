import fs from 'fs';
import { loadJson } from './utils/loadJson.mjs';

const json = loadJson('./src/pages/pages.json');
fs.writeFileSync('./src/pages/pages.ts', `export default ${JSON.stringify(json, '', 2)}`);
