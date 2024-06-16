export function withInstallApp() {
    // @ts-ignore
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', e => {
        // eslint-disable-next-line no-unused-vars
        deferredPrompt = e;
    });
}
