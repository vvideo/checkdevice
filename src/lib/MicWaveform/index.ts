import { fillArray } from '../../utils/array/fillArray';
import { getStreamParams } from '../../utils/getStreamParams';
import { isLightPageTheme } from '../Theme';
import { Favicon } from 'favorite-icon';

export class MicWaveform {
    private canvas!: HTMLCanvasElement;
    private canvasFavicon?: HTMLCanvasElement;

    private audioCtx?: AudioContext;
    private audio!: HTMLAudioElement;
    private analyser?: AnalyserNode;
    private stream: MediaStream | null = null;

    private frameRequestId = 0;

    private requestMic() {
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            this.audio.srcObject = stream;
            this.audio.play();

            this.stream = stream;

            return stream;
        });
    }

    private initAudio() {
        if (!this.audio) {
            this.audio = new Audio();
        }
    }

    public setMuted(muted: boolean) {
        this.initAudio();
        this.audio.muted = muted;
    }

    public start(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.canvasFavicon = document.createElement('canvas');
        this.canvasFavicon.width = Favicon.size;
        this.canvasFavicon.height = Favicon.size;

        this.audioCtx = new AudioContext();
        this.initAudio();
        this.analyser = this.audioCtx.createAnalyser();

        return this.requestMic().then(stream => {
            if (!this.audioCtx || !this.analyser) {
                return;
            }

            const source = this.audioCtx.createMediaStreamSource(stream);
            source.connect(this.analyser);
            // const distortion = this.audioCtx.createWaveShaper();
            // distortion.connect(this.audioCtx.destination);

            this.frameRequestId = requestAnimationFrame(this.draw);
        });
    }

    public getStreamParams() {
        return this.stream ? getStreamParams(this.stream) : null;
    }

    public stop() {
        if (this.frameRequestId && this.stream) {
            this.stream.getTracks().forEach((track => {
                track.stop();
            }));

            this.audio.pause();
            this.audio.srcObject = null;
            this.stream = null;

            cancelAnimationFrame(this.frameRequestId);
            this.frameRequestId = 0;
        }

        this.clearCanvas();

        this.canvasFavicon = undefined;
        Favicon.reset();
    }

    private clearCanvas() {
        const canvasCtx = this.canvas.getContext('2d')!;
        canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public draw = () => {
        if (!this.audioCtx || !this.analyser) {
            return;
        }

        const canvasCtx = this.canvas.getContext('2d')!;

        this.analyser.fftSize = 2048;
        const bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        this.analyser.getByteTimeDomainData(dataArray);

        if (Favicon.hasSupport) {
            this.drawFavicon(dataArray);
        }

        const isLight = isLightPageTheme();
        const fillStyle = isLight ? 'white' : 'black';
        const strokeStyle = isLight ? 'black' : 'white';

        canvasCtx.fillStyle = fillStyle;
        canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = strokeStyle;
        canvasCtx.beginPath();

        const sliceWidth = this.canvas.width / bufferLength;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
            const v = dataArray[i] / 128.0;
            const y = v * (this.canvas.height / 2);

            if (i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx.lineTo(this.canvas.width, this.canvas.height / 2);
        canvasCtx.stroke();

        this.frameRequestId = requestAnimationFrame(this.draw);
    }

    private drawFavicon(dataArray: Uint8Array) {
        const size = Favicon.size;
        const context = this.canvasFavicon!.getContext('2d')!;
        context.fillStyle = '#000000';
        context.fillRect(0, 0, size, size);

        context.lineWidth = 1;
        context.strokeStyle = '#ffffff';
        context.beginPath();

        const faviconArray = new Array(size);
        fillArray(faviconArray);

        const step = Math.floor(dataArray.length / size);
        let n = 0;
        for (let i = 0; i < dataArray.length; i += step) {
            faviconArray[n] += dataArray[i];
            n++;
        }

        for (let x = 0; x < faviconArray.length; x++) {
            const y = ((faviconArray[x] - 128) * 2 + 128) * size / 256;

            if (!x) {
                context.moveTo(x, y);
            }

            context.lineTo(x, y);
        }

        context.stroke();

        Favicon.set(this.canvasFavicon!);
    }
}

export const micWaveform = new MicWaveform();
