import { hit } from 'lyam';
import { MainPage } from './components/MainPage';
import { render } from 'preact';
import { I18NLanguage, setI18nLang } from './i18n/i18n';

import './index.css';

hit('95998062');

let lang = ((navigator.language || '').split('-')[0] || 'en') as I18NLanguage;

if (lang !== 'en' && lang !== 'ru') {
    lang = 'en';
}

setI18nLang(lang);

render(MainPage(), document.querySelector('.page') as HTMLDivElement);
