export function getStreamParams(stream: MediaStream) {
    const video = stream.getVideoTracks()[0];
    const audio = stream.getAudioTracks()[0];

    const videoSettings = video?.getSettings();
    const audioSettings = audio?.getSettings();

    return {
        video: video && videoSettings ? {
            deviceId: videoSettings.deviceId,
            groupId: videoSettings.groupId,
            label: video.label,
            width: videoSettings.width,
            height: videoSettings.height,
            frameRate: videoSettings.frameRate,
            // @ts-ignore
            resizeMode: videoSettings.resizeMode,
            // @ts-ignore
            backgroundBlur: videoSettings.backgroundBlur,
        } : undefined,
        audio: audio && audioSettings ? {
            deviceId: audioSettings.deviceId,
            groupId: audioSettings.groupId,
            label: audio.label,
            // @ts-ignore
            latency: audioSettings.latency,
            autoGainControl: audioSettings.autoGainControl,
            channelCount: audioSettings.channelCount,
            echoCancellation: audioSettings.echoCancellation,
            noiseSuppression: audioSettings.noiseSuppression,
            sampleRate: audioSettings.sampleRate,
            sampleSize: audioSettings.sampleSize,
        } : undefined,
    };
}
