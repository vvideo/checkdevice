import { html } from 'htm/preact';

interface TooltipProps {
    canPlayType: string;
    isTypeSupported: boolean;
    contentType: string;
}

function getIsTypeSupportedProps(isTypeSupported: boolean) {
    return window.MediaSource ? {
        value: String(isTypeSupported),
        color: isTypeSupported ? 'green' : 'red',      
    } : {
        value: html`<b>unsupported</b>`,
        color: 'red',
    };
}

function getCanPlayTypeProps(canPlayType: string) {
    let color: string;

    switch(canPlayType) {
        case 'maybe':
            color = 'orange';
        break;
        case 'probably':
            color = 'green';
        break;
        default:
            color = 'red';
        break;
    }

    return {
        color,
        value: `"${String(canPlayType)}"`,
    };
}


export function CodecDetails(props: TooltipProps | boolean) {
    if (typeof props === 'boolean') {
        return '';
    }

    const canPlayTypeResult = getCanPlayTypeProps(props.canPlayType);
    const isTypeSupportedResult = getIsTypeSupportedProps(props.isTypeSupported);

    return html`
        video.canPlayType(): <span style="color:${canPlayTypeResult.color}">${canPlayTypeResult.value}</span><br />
        MediaSource.isTypeSupported(): <span style="color:${isTypeSupportedResult.color}">${isTypeSupportedResult.value}</span><br />
        <hr />
        ${props.contentType}
    `;
}
