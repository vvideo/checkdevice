import { noop } from "../../../../utils/function/noop";
import { Signal } from "../../../../lib/Signal";

declare global {
    interface HTMLVideoElement {
        webkitShowPlaybackTargetPicker?: () => void;
        webkitCurrentPlaybackTargetIsWireless?: boolean;
    }
}

export class RemotePlaybackController extends Signal {
    video: null | HTMLVideoElement = null;

    availability: boolean | null = null;
    private callbackId: number | undefined = undefined;

    public start(video: HTMLVideoElement) {
        this.video = video;

        if (video.remote) {
            video.remote.addEventListener('connecting', this.handleConnecting);
            video.remote.addEventListener('connected', this.handleConnected);
            video.remote.addEventListener('disconnected', this.handleDisconnected);
        } else if (video.webkitShowPlaybackTargetPicker) {
            video.addEventListener('webkitcurrentplaybacktargetiswirelesschanged', this.handleWebkitCurrentPlaybackTargetIsWirelessChanged);
        }
    }

    public stop() {
        const { video } = this;
        if (!video) {
            return;
        }

        if (video.remote) {
            video.remote.removeEventListener('connecting', this.handleConnecting);
            video.remote.removeEventListener('connected', this.handleConnected);
            video.remote.removeEventListener('disconnected', this.handleDisconnected);
        } else if (video.webkitShowPlaybackTargetPicker) {
            video.removeEventListener('webkitcurrentplaybacktargetiswirelesschanged', this.handleWebkitCurrentPlaybackTargetIsWirelessChanged);
            video.removeEventListener('webkitplaybacktargetavailabilitychanged', this.handleWebKitPlaybackTargetAvailabilityChanged);
        }

        this.video = null;
        this.availability = null;
    }

    public prompt(): Promise<void> {
        const { video } = this;
        if (!video) {
            return Promise.resolve();
        }

        if (video.remote) {
            return video.remote.prompt();
        } else if (video.webkitShowPlaybackTargetPicker) {
            video.webkitShowPlaybackTargetPicker();
        }

        return Promise.resolve();
    }

    private handleWebkitCurrentPlaybackTargetIsWirelessChanged = () => {
        const { video } = this;
        if (!video) {
            return;
        }

        if (video.webkitCurrentPlaybackTargetIsWireless) {
            video.removeEventListener('webkitplaybacktargetavailabilitychanged', this.handleWebKitPlaybackTargetAvailabilityChanged);
        } else {
            video.addEventListener('webkitplaybacktargetavailabilitychanged', this.handleWebKitPlaybackTargetAvailabilityChanged);
        }
    }

    private handleWebKitPlaybackTargetAvailabilityChanged = (e: Event) => {
        // @ts-ignore
        this.availability = e.availability;
        this.trigger();
    }

    private handleAvailabilityChange = (availability: boolean) => {
        this.availability = availability;
        this.trigger();
    }

    private handleConnected = () => {
        this.updateRemoteState();
        this.trigger();
    }

    private handleConnecting = () => {
        this.updateRemoteState();
        this.trigger();
    }

    private handleDisconnected = () => {
        this.updateRemoteState();
        this.trigger();
    }

    private updateRemoteState() {
        const { video } = this;
        if (!video) {
            return;
        }

        if (video.remote.state === 'disconnected') {
            video.remote.watchAvailability(this.handleAvailabilityChange)
                .then(id => {
                    this.callbackId = id;
                })
                .catch(() => {
                    this.handleAvailabilityChange(true);
                });
        } else if (this.callbackId !== undefined) {
            video.remote.cancelWatchAvailability(this.callbackId)
                .then(() => {
                    this.callbackId = undefined;
                })
                .catch(() => noop);
        }
    }
}
