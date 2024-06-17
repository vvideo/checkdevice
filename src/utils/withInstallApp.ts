export function withInstallApp() {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', e => {
        // eslint-disable-next-line no-unused-vars
        deferredPrompt = e;
    });
}
