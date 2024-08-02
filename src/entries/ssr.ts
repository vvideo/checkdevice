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
import { I18NLanguage, setI18nLang, i18n as i18nOriginal } from '../i18n';
import { getPageId as getPageIdOriginal, setPageId as setPageIdOriginal } from '../pages/common/pageId';
import { SensorPage } from '../pages/SensorPage';
import { UsbPage } from '../pages/UsbPage';
import { BluetoothPage } from '../pages/BluetoothPage';
import { MidiPage } from '../pages/MidiPage';
import { GeoPage } from '../pages/GeoPage';

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
    midi: MidiPage,
    sensor: SensorPage,
    usb: UsbPage,
    bluetooth: BluetoothPage,
    geo: GeoPage,
};

export function buildPage(id: string): string {
    if (pages[id]) {
        return render(html`<${pages[id]} //>`);
    } else {
        throw Error(`Not founded "${id}" page component for SSR`);
    }
}

export function setLang(lang: I18NLanguage) {
    setI18nLang(lang);
}

export function i18n(id: string) {
    return i18nOriginal(id);
}

export function setPageId(id: string) {
    setPageIdOriginal(id);
}

export function getPageId() {
    return getPageIdOriginal();
}
