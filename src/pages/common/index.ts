import { hit } from 'lyam';
import { I18NLanguage, setI18nLang } from '../../i18n/i18n';
import { getLang } from '../../utils/getLang';
import { withInstallApp } from '../../utils/withInstallApp';
import { addHoverOnBody } from '../../utils/css/addHoverOnBody';
import { isSsr } from '../../utils/isSsr';

import './index.css';

if (!isSsr) {
    hit('95998062'); // 97747983

    const lang = getLang() as I18NLanguage;
    setI18nLang(lang);

    withInstallApp();

    addHoverOnBody();

    // ally
    document.documentElement?.setAttribute('lang', lang);
}
