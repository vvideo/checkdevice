import { hit } from 'lyam';
import { MainPage } from './components/MainPage';
import { render } from 'preact';

import './index.css';

hit('95998062');

render(MainPage(), document.querySelector('.page') as HTMLDivElement);
