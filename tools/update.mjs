import { pageIds } from '../rollup.config.mjs';
import { updateTemplate } from './updateTemplate.mjs';

pageIds.forEach(id => updateTemplate(id));
