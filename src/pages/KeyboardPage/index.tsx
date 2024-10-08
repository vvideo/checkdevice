import { h } from 'preact';

import { addI18nKeyset, i18n } from '../../i18n';
import { Page } from '../Page';
import { Keyboard } from './components/Keyboard';
import { Link } from '../../components/ui/Link';
import { getPagePath } from '../../utils/getPagePath';
import { Section } from '../../components/ui/Section';
import { NavList } from '../../components/NavList';
import { keyset } from './i18n/keyset';

addI18nKeyset(keyset);

export function KeyboardPage() {
    const items: [h.JSX.Element][] = [
        [(<Link href={getPagePath('keycodes')}>{i18n('Displaying key codes')}</Link>)]
    ];

    return (
        <Page title={i18n('Testing keyboard')}>
            <Keyboard />
            <Section name={i18n('Additionally')}>
                <NavList items={items} />
            </Section>
        </Page>
    );
}
