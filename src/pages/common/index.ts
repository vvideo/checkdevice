import { hit } from 'lyam';
import { I18NLanguage, setI18nLang } from '../../i18n/i18n';
import { getLang } from '../../utils/getLang';

import './index.css';

if (window.location.host !== 'localhost') {
    hit('95998062');
}

setI18nLang(getLang() as I18NLanguage);
