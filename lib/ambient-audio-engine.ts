import { ambientAudioSources } from "@/lib/audio-config";

type AmbientNodes = {
  oscillators: OscillatorNode[];
  lfo: OscillatorNode;
};

export class AmbientAudioEngine {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private nodes: AmbientNodes | null = null;
  private mediaElement: HTMLAudioElement | null = null;
  private activeSourceIndex = 0;
  private started = false;
  private useProceduralOnly = false;

  async start() {
    if (typeof window === "undefined") return;

    if (this.mediaElement && !this.useProceduralOnly) {
      try {
        await this.mediaElement.play();
        await this.fadeMediaVolume(ambientAudioSources[this.activeSourceIndex]?.volume ?? 0.4);
        return;
      } catch {
        this.mediaElement.pause();
      }
    }

    const resumed = await this.tryPlayTrack();
    if (resumed) return;

    await this.startProcedural();
  }

  async stop() {
    await this.fadeOut();

    this.nodes?.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        // Oscillator may already be stopped.
      }
    });

    this.nodes?.lfo.stop();
    this.nodes = null;
    this.started = false;

    if (this.mediaElement) {
      this.mediaElement.pause();
      this.mediaElement.currentTime = 0;
    }
  }

  private async tryPlayTrack() {
    if (this.useProceduralOnly) return false;

    for (let index = 0; index < ambientAudioSources.length; index += 1) {
      const source = ambientAudioSources[index];
      const audio = new Audio(source.url);

      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0;

      try {
        await audio.play();
        this.mediaElement = audio;
        this.activeSourceIndex = index;
        await this.fadeMediaVolume(source.volume);
        return true;
      } catch {
        audio.pause();
      }
    }

    this.useProceduralOnly = true;
    return false;
  }

  private async startProcedural() {
    if (!this.context) {
      this.context = new AudioContext();
      this.filter = this.context.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.value = 900;

      this.masterGain = this.context.createGain();
      this.masterGain.gain.value = 0;

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.context.destination);
    }

    if (this.context.state === "suspended") {
      await this.context.resume();
    }

    if (!this.started) {
      this.nodes = this.createProceduralNodes();
      this.started = true;
    }

    await this.fadeMasterGain(0.22);
  }

  private createProceduralNodes(): AmbientNodes {
    const context = this.context!;
    const filter = this.filter!;

    const layers = [
      { frequency: 55, type: "sine" as OscillatorType, gain: 0.22 },
      { frequency: 110, type: "triangle" as OscillatorType, gain: 0.12 },
      { frequency: 164.81, type: "sine" as OscillatorType, gain: 0.08 },
      { frequency: 220, type: "triangle" as OscillatorType, gain: 0.05 },
    ];

    const oscillators = layers.map((layer) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = layer.type;
      oscillator.frequency.value = layer.frequency;
      gain.gain.value = layer.gain;

      oscillator.connect(gain);
      gain.connect(filter);
      oscillator.start();

      return oscillator;
    });

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.06;
    lfoGain.gain.value = 180;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    return { oscillators, lfo };
  }

  private fadeMasterGain(target: number) {
    const context = this.context;
    const gain = this.masterGain;
    if (!context || !gain) return Promise.resolve();

    const now = context.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(target, now + 2.2);

    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 2200);
    });
  }

  private fadeMediaVolume(target: number) {
    const audio = this.mediaElement;
    if (!audio) return Promise.resolve();

    const steps = 24;
    const start = audio.volume;
    const delta = (target - start) / steps;

    return new Promise<void>((resolve) => {
      let step = 0;
      const interval = window.setInterval(() => {
        step += 1;
        audio.volume = Math.min(target, start + delta * step);
        if (step >= steps) {
          window.clearInterval(interval);
          resolve();
        }
      }, 90);
    });
  }

  private fadeOut() {
    if (this.mediaElement && !this.mediaElement.paused) {
      const audio = this.mediaElement;
      const start = audio.volume;
      const steps = 18;
      const delta = start / steps;

      return new Promise<void>((resolve) => {
        let step = 0;
        const interval = window.setInterval(() => {
          step += 1;
          audio.volume = Math.max(0, start - delta * step);
          if (step >= steps) {
            window.clearInterval(interval);
            resolve();
          }
        }, 70);
      });
    }

    const context = this.context;
    const gain = this.masterGain;
    if (!context || !gain) return Promise.resolve();

    const now = context.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(0, now + 1.4);

    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1400);
    });
  }
}
