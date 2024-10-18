export function playWithPromise(video: HTMLVideoElement) {
    const result = video.play();

    // For old browsers
    // @ts-ignore
    return result ? result : Promise.resolve();
}
