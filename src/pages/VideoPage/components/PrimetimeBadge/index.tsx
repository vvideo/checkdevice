import { h } from 'preact';
import { useState } from 'preact/hooks';

import {
    PRIMETIME_KEY_SYSTEM,
    isPrimetimeSupported,
} from 'detect-audio-video';
import { Badge } from '../../../../components/Badge';
import { KeySystems } from '../KeySystems';
import { block } from '../../../../utils/css/bem';

const b = block('primetime-badge');

export function PrimetimeBadge() {
    const [hasPrimetime, setPrimetime] = useState(false);
    isPrimetimeSupported().then(result => {
        setPrimetime(result);
    });

    return (
        <div class={b()}>
            {hasPrimetime && (<Badge 
                text="Primetime"
                background="white"
                top={{ text: 'Adobe' }}
                bottom={{
                    text: (<KeySystems items={[PRIMETIME_KEY_SYSTEM]} />),
                }}
            />)}
        </div>
    );
}
