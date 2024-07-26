import render from 'preact-render-to-string';
import { html } from 'htm/preact';

import { AudioPage } from '../pages/AudioPage';
import { BatteryPage } from '../pages/BatteryPage';
import { CameraPage } from '../pages/CameraPage';
import { Error404Page } from '../pages/Error404Page';
import { FontsPage } from '../pages/FontsPage';
import { GamepadPage } from '../pages/GamepadPage';
import { GpuPage } from '../pages/GpuPage';
import { IndexPage } from '../pages/IndexPage';
import { KeyboardPage } from '../pages/KeyboardPage';
import { KeycodesPage } from '../pages/KeycodesPage';
import { MousePage } from '../pages/MousePage';
import { PlatformPage } from '../pages/PlatformPage';
import { ScreenPage } from '../pages/ScreenPage';
import { StoragePage } from '../pages/StoragePage';
import { TestDeadPixelsPage } from '../pages/TestDeadPixelsPage';
import { VideoPage } from '../pages/VideoPage';
import { MicPage } from '../pages/MicPage';
import { NetworkPage } from '../pages/NetworkPage';
import { I18NLanguage, setI18nLang } from '../i18n/i18n';

export const pages: Record<string, any> = {
    audio: AudioPage,
    video: VideoPage,
    screen: ScreenPage,
    'test-dead-pixels': TestDeadPixelsPage,
    gamepad: GamepadPage,
    storage: StoragePage,
    platform: PlatformPage,
    error404: Error404Page,
    battery: BatteryPage,
    camera: CameraPage,
    fonts: FontsPage,
    gpu: GpuPage,
    index: IndexPage,
    keyboard: KeyboardPage,
    keycodes: KeycodesPage,
    mouse: MousePage,
    mic: MicPage,
    network: NetworkPage,
};

export function buildPage(id: string): string {
    return pages[id] ? render(html`<${pages[id]} //>`) : '';
}

export function setLang(lang: I18NLanguage) {
    setI18nLang(lang);
}
