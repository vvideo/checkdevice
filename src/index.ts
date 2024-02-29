import { hit } from 'lyam';
import { MainPage } from './components/MainPage';
import { render } from 'preact';

import './index.css';
import { I18NLanguage, setI18nLang } from './i18n/i18n';

hit('95998062');

let lang = navigator.language as I18NLanguage;
if (lang !== 'en-US' && lang !== 'ru-RU') {
    lang = 'en-US';
}

setI18nLang(lang);

render(MainPage(), document.querySelector('.page') as HTMLDivElement);
