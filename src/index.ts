import { html } from 'htm/preact';
import { hit } from 'lyam';
import { MainPage } from './components/MainPage';
import { render } from 'preact';
import { I18NLanguage, setI18nLang } from './i18n/i18n';
import { getLang } from './utils/getLang';

import './index.css';

hit('95998062');

setI18nLang(getLang() as I18NLanguage);

render(html`<${MainPage} //>`, document.querySelector('.page') as HTMLDivElement);
