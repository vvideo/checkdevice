import { hit } from 'lyam';
import { I18NLanguage, setI18nLang } from '../../i18n/i18n';
import { getLang } from '../../utils/getLang';
import { withInstallApp } from '../../utils/withInstallApp';

import './index.css';

const host = window.location.host;
const counterId = (
    host === 'caniwatchvideo.online' ||
    host === 'checkdevice.online'
) ? '95998062' : '97747983';

hit(counterId);

setI18nLang(getLang() as I18NLanguage);

withInstallApp()
