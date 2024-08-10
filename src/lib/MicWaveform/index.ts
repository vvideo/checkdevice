import { getStreamParams } from '../../utils/getStreamParams';

export class MicWaveform {
    private canvas!: HTMLCanvasElement;

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

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(255, 255, 255)';
        canvasCtx.beginPath();

        const sliceWidth = this.canvas.width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
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
}

export const micWaveform = new MicWaveform();
