import { html } from 'htm/preact';
import { Component } from 'preact';
import {
    getScreenDepth,
    isHdrScreenSupported,
    getDevicePixelRatio,
} from 'detect-audio-video';
import { ScreenBadge } from '../ScreenBadge';
import { Row } from '../Row';

interface ScreenDetailed extends Screen {
    label: string;
    devicePixelRatio: number;
    isInternal?: boolean;
    isExtended?: boolean;
    isPrimary?: boolean;
    isHDR: boolean;
}

interface ScreenDetailedResult {
    currentScreen: ScreenDetailed;
    screens: ScreenDetailed[];
    onscreenschange(): void;
}

declare global {
    interface Window {
        getScreenDetails?(): Promise<ScreenDetailedResult>
    }
}

interface ScreenBadgesState {
    isScreenDetails: boolean;
    screens: ScreenDetailed[]; 
}

export class ScreenBadges extends Component<{}, ScreenBadgesState> {
    private timer = -1;

    constructor() {
        super();

        this.state = this.updateScreen();

        if (window.getScreenDetails) {
            window.getScreenDetails().then(result => {
                result.onscreenschange = () => {
                    this.updateScreenDetails(result);
                };

                this.updateScreenDetails(result);
            });    
        }

        let screenJson = JSON.stringify(this.state);
        this.timer = window.setInterval(() => {
            if (this.state.isScreenDetails) {
                return;
            }

            const currentScreenJson = JSON.stringify(this.updateScreen());
            if (screenJson !== currentScreenJson) {
                screenJson = currentScreenJson;
                this.setState(this.updateScreen());
            }
        }, 1000);
    }

    private updateScreen() {
        return { 
            isScreenDetails: false,
            screens: [{
                label: '',
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                width: screen.width,
                height: screen.height,
                colorDepth: getScreenDepth(),
                pixelDepth: getScreenDepth(),
                devicePixelRatio: getDevicePixelRatio(),
                isHDR: Boolean(isHdrScreenSupported()),
                orientation: screen.orientation,
            }],
        };
    }

    private updateScreenDetails(result: ScreenDetailedResult) {
        this.setState({
            isScreenDetails: true,
            screens: result.screens.map(item => {
                return {
                    label: item.label,
                    width: item.width,
                    height: item.height,
                    colorDepth: item.colorDepth,
                    pixelDepth: item.colorDepth,
                    isHDR: item.colorDepth > 24,
                    isExtended: item.isExtended,
                    isPrimary: item.isPrimary,
                    isInternal: item.isInternal,
                    availHeight: item.availHeight,
                    availWidth: item.availWidth,
                    orientation: item.orientation,
                    devicePixelRatio: item.devicePixelRatio,
                };
            }),
        });
    }
  
    render() {
        const screens = this.state.screens;
        const content = screens.map(item => {
            return html`<${ScreenBadge} ...${item}><//>`;
        });
        
        const name = screens.length > 1 ? 'Screens' : 'Screen';

        return html`<${Row} name="${name}">${content}<//>`;
    }

    componentWillUnmount(): void {
        window.clearInterval(this.timer);
    }
}
