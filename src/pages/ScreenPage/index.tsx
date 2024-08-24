import { h } from 'preact';

import { ScreenList } from './components/ScreenList';
import { Page } from '../Page';
import { addI18nKeyset, i18n } from '../../i18n';
import { Link } from '../../components/ui/Link';
import { getPagePath } from '../../utils/getPagePath';
import { ExtLink } from '../../components/ui/ExtLink';
import { NavList } from '../../components/NavList';
import { Section } from '../../components/ui/Section';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function ScreenPage() {
    const items = [
        [(<Link href={getPagePath('test-dead-pixels')}>{i18n('Test dead pixels')}</Link>)],
        [(<ExtLink target="_blank" href="https://vvideo.github.io/hdcp/index.html">{i18n('Check HDCP version')}</ExtLink>)],
    ];

    return (
        <Page>
            <div>
                <ScreenList />
                <Section name={i18n('Tests')}>
                    <NavList items={items} />
                </Section>
            </div>
        </Page>
    );
}
