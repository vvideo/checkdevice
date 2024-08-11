import { KeyboardPage } from '../pages/KeyboardPage';
import { keyboardLedController } from '../lib/KeyboardLedController';
import { keyboardStateController } from '../lib/KeyboardStateController';
import { renderToRoot } from './utils';

keyboardStateController.on();
keyboardLedController.on();

renderToRoot(KeyboardPage);
