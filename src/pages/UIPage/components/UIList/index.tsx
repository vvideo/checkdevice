import { h } from 'preact';

import { block } from '../../../../utils/css/bem';
import { Button } from '../../../../components/ui/Button';
import { Spinner } from '../../../../components/ui/Spinner';
import { Link } from '../../../../components/ui/Link';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { WarningMessage } from '../../../../components/ui/WarningMessage';
import { Input } from '../../../../components/ui/Input';
import { Checkbox } from '../../../../components/ui/Checkbox';
import { RadioButtons } from '../../../../components/ui/RadioButtons';
import { ColorSwitcher } from '../../../../components/ui/ColorSwitcher';

import './index.css';

const b = block('ui-list');

const radioButtonsItems = [
    { text: 'text1', value: '1', selected: true },
    { text: 'text2', value: '2' },
];

const colorSwitcherItems = [
    { color: 'black', value: 'black', title: 'Black' },
    { color: 'red', value: 'red', title: 'Red' },
    { color: 'white', value: 'white', title: 'White' },
];

export function UIList() {
    return (
        <div class={b()}>
            <h2>Button</h2>
            <ul class={b('items')}>
                <li><Button>Button</Button> <Button disabled>Button disabled</Button> <Button theme="active">Button theme=active</Button> <Button theme="red">Button theme=red</Button></li>
                <li><Button size="s">Button size=s</Button> <Button size="s" disabled>Button disabled</Button> <Button theme="active" size="s">Button theme=active size=s</Button> <Button theme="red" size="s">Button theme=red size=s</Button></li>
            </ul>

            <h2>Input</h2>
            <ul class={b('items')}>
            <li><Input placeholder="Placeholder" /></li>
            <li><Input value="text" /></li>
            </ul>

            <h2>RadioButtons</h2>
            <ul class={b('items')}>
                <li><RadioButtons onSelect={() => {}} label="Label" buttons={radioButtonsItems} /></li>
            </ul>

            <h2>Checkbox</h2>
            <ul class={b('items')}>
                <li><Checkbox checked label="Checkbox" /></li>
                <li><Checkbox theme="active" checked label="Checkbox theme=active" /></li>
            </ul>

            <h2>ColorSwitcher</h2>
            <ul class={b('items')}>
                <li><ColorSwitcher label="Label" selected="black" items={colorSwitcherItems} /></li>
            </ul>

            <h2>Spinner</h2>
            <ul class={b('items')}>
                <li>Spinner size=m: <Spinner size="m" /></li>
                <li>Spinner size=s: <Spinner size="s" /></li>
                <li>Spinner size=xl: <Spinner size="xl" /></li>
            </ul>

            <h2>Link</h2>
            <ul class={b('items')}>
                <li><Link href="/">Link</Link></li>
                <li><Link theme="white" href="/">Link theme=white</Link></li>
            </ul>

            <h2>Messages</h2>
            <ul class={b('items')}>
                <li><ErrorMessage>Error Message</ErrorMessage></li>
                <li><WarningMessage>Warning Message</WarningMessage></li>
            </ul>
        </div>
    );
}
