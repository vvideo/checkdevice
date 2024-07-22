import { hit } from 'lyam';
import { I18NLanguage, setI18nLang } from '../../i18n/i18n';
import { getLang } from '../../utils/getLang';
import { withInstallApp } from '../../utils/withInstallApp';
import { addHoverOnBody } from '../../utils/addHoverOnBody';
import { isSsr } from '../../utils/isSsr';

import './index.css';

if (isSsr) {
    setI18nLang('en');
} else {
    hit('95998062'); // 97747983

    setI18nLang(getLang() as I18NLanguage);

    withInstallApp();

    addHoverOnBody();
}
