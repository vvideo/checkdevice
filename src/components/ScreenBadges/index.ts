import { html } from 'htm/preact';
import { Component } from 'preact';
import { ScreenBadge } from '../ScreenBadge';
import { Row } from '../Row';
import { ScreenDetailed, screenInfo } from '../../lib/ScreenInfo';
import { i18n } from '../../i18n/i18n';

interface ScreenBadgesState {
    screens: ScreenDetailed[];
}

export class ScreenBadges extends Component<{}, ScreenBadgesState> {
    constructor() {
        super();

        screenInfo.addListener(this.handleScreenChange);
    }

    private handleScreenChange = () => {
        this.setState({
            screens: screenInfo.get().screens,
        });
    }

    private handleClick = () => {
        screenInfo.getScreenDetails();
    }

    render() {
        const { screens, isScreenDetails } = screenInfo.get();
        const content = screens.map(item => {
            const props = {
                isScreenDetails,
                ...item,
            };

            return html`<${ScreenBadge} ...${props}><//>`;
        });

        const name = screens.length > 1 ? i18n('Screens') : i18n('Screen');

        return html`<${Row} name="${name}">
            ${screenInfo.needUserActivity ? html`<div><button onClick="${this.handleClick}">${i18n('Request')}</button></div>` : ''}
            ${content}
        <//>`;
    }

    componentWillUnmount(): void {
        screenInfo.removeListener(this.handleScreenChange);
    }
}
