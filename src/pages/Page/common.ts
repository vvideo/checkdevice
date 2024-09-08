import { showJSError } from 'show-js-error';
import { hit } from 'lyam';

import { addI18nKeyset, I18NLanguage, setI18nLang, setI18nLangs } from '../../i18n';
import { withInstallApp } from '../../utils/dom/withInstallApp';
import { addHoverOnBody } from '../../utils/css/addHoverOnBody';
import { isSsr } from '../../utils/isSsr';
import { setPageId } from '../../utils/pageId';
import { defaultLang, langsData } from '../../i18n/langs';
import { keyset } from './i18n/keyset';
import { config } from '../../config';
import { initPageTheme } from '../../lib/Theme';

import './global.css';

addI18nKeyset(keyset);

export function getLang() {
    let lang = window.__appData__.lang || getLangFromNavigator();

    const result = langsData.filter(item => item.value === lang);
    if (!result.length) {
        lang = defaultLang;
    }

    return lang;
}

function getLangFromNavigator() {
    return ((navigator.language || '').split('-')[0] || defaultLang);
}

setI18nLangs(langsData);
addI18nKeyset(keyset);

if (!isSsr) {
    showJSError.setSettings({
        reportUrl: config.showJSErrorRepportUrl,
        // Fix for old webOS
        errorFilter: (error) => {
            return error?.message !== 'Script error.';
        }
    });

    hit(config.metrikaCounterId);

    const lang = getLang() as I18NLanguage;
    setI18nLang(lang as I18NLanguage);

    setPageId(window.__appData__.pageId);

    withInstallApp();

    addHoverOnBody();

    initPageTheme();

    // ally
    document.documentElement?.setAttribute('lang', lang);
}
