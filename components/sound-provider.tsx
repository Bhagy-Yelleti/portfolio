"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SoundContextValue = {
  enabled: boolean;
  introAccent: boolean;
  toggle: () => void;
  playHover: () => void;
  playSectionChime: () => void;
  playLogoSpark: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

type ActiveTone = {
  oscillator: OscillatorNode;
  gain: GainNode;
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [introAccent, setIntroAccent] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const ambienceIntervalRef = useRef<number | null>(null);
  const activeTonesRef = useRef<ActiveTone[]>([]);

  const ensureAudio = useCallback(async () => {
    if (typeof window === "undefined") return null;

    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;

      const context = new AudioCtx();
      const master = context.createGain();
      master.gain.value = 0.07;
      master.connect(context.destination);

      audioContextRef.current = context;
      masterGainRef.current = master;
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }, []);

  const stopAmbience = useCallback(() => {
    if (ambienceIntervalRef.current !== null && typeof window !== "undefined") {
      window.clearInterval(ambienceIntervalRef.current);
      ambienceIntervalRef.current = null;
    }

    const context = audioContextRef.current;
    if (!context) return;

    activeTonesRef.current.forEach(({ oscillator, gain }) => {
      const now = context.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
      oscillator.stop(now + 1.5);
    });
    activeTonesRef.current = [];
  }, []);

  const spawnTone = useCallback(
    async ({
      frequency,
      type,
      volume,
      attack = 0.02,
      sustain = 0.25,
      release = 0.9,
      detune = 0,
    }: {
      frequency: number;
      type: OscillatorType;
      volume: number;
      attack?: number;
      sustain?: number;
      release?: number;
      detune?: number;
    }) => {
      const context = await ensureAudio();
      const master = masterGainRef.current;
      if (!context || !master) return;

      const oscillator = context.createOscillator();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      oscillator.detune.setValueAtTime(detune, context.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1600, context.currentTime);
      filter.Q.value = 0.8;

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.linearRampToValueAtTime(volume, context.currentTime + attack);
      gain.gain.setTargetAtTime(volume * 0.82, context.currentTime + attack, sustain);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + attack + sustain + release);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      oscillator.start();
      oscillator.stop(context.currentTime + attack + sustain + release + 0.08);
    },
    [ensureAudio],
  );

  const startAmbience = useCallback(async () => {
    const context = await ensureAudio();
    const master = masterGainRef.current;
    if (!context || !master) return;

    stopAmbience();

    const baseFrequencies = [164.81, 246.94, 329.63];
    activeTonesRef.current = baseFrequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = index === 1 ? "triangle" : "sine";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      oscillator.detune.setValueAtTime(index === 0 ? -8 : index === 2 ? 10 : 0, context.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(620 + index * 180, context.currentTime);

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.linearRampToValueAtTime(0.016 - index * 0.0025, context.currentTime + 2.8);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      oscillator.start();

      return { oscillator, gain };
    });

    if (typeof window !== "undefined") {
      const ambientNotes = [493.88, 659.25, 739.99, 783.99, 987.77];
      ambienceIntervalRef.current = window.setInterval(() => {
        const frequency = ambientNotes[Math.floor(Math.random() * ambientNotes.length)];
        const detune = [-9, -4, 0, 5, 9][Math.floor(Math.random() * 5)];

        void spawnTone({
          frequency,
          type: "triangle",
          volume: 0.008,
          attack: 0.06,
          sustain: 0.18,
          release: 1.9,
          detune,
        });

        if (Math.random() > 0.55) {
          void spawnTone({
            frequency: frequency / 2,
            type: "sine",
            volume: 0.0045,
            attack: 0.1,
            sustain: 0.22,
            release: 2.2,
            detune: detune - 7,
          });
        }
      }, 4200);
    }
  }, [ensureAudio, spawnTone, stopAmbience]);

  const playHover = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 659.25,
      type: "triangle",
      volume: 0.009,
      attack: 0.01,
      sustain: 0.05,
      release: 0.45,
    });
  }, [enabled, spawnTone]);

  const playSectionChime = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 493.88,
      type: "sine",
      volume: 0.011,
      attack: 0.02,
      sustain: 0.1,
      release: 1.2,
    });
    void spawnTone({
      frequency: 739.99,
      type: "triangle",
      volume: 0.007,
      attack: 0.03,
      sustain: 0.08,
      release: 1.6,
      detune: 6,
    });
  }, [enabled, spawnTone]);

  const playLogoSpark = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 987.77,
      type: "triangle",
      volume: 0.011,
      attack: 0.01,
      sustain: 0.07,
      release: 0.95,
    });
  }, [enabled, spawnTone]);

  const playIntroSting = useCallback(async () => {
    setIntroAccent(true);
    if (typeof window !== "undefined") {
      window.setTimeout(() => setIntroAccent(false), 1200);
    }

    const context = await ensureAudio().catch(() => null);
    const master = masterGainRef.current;
    if (!context || !master) return;

    const sequence = [
      { frequency: 329.63, type: "sine" as OscillatorType, volume: 0.011, delay: 0 },
      { frequency: 493.88, type: "triangle" as OscillatorType, volume: 0.01, delay: 0.28 },
      { frequency: 739.99, type: "triangle" as OscillatorType, volume: 0.008, delay: 0.74 },
      { frequency: 659.25, type: "sine" as OscillatorType, volume: 0.006, delay: 1.02 },
    ];

    sequence.forEach((tone) => {
      window.setTimeout(() => {
        void spawnTone({
          frequency: tone.frequency,
          type: tone.type,
          volume: tone.volume,
          attack: 0.03,
          sustain: 0.2,
          release: 1.1,
        });
      }, tone.delay * 1000);
    });

    window.setTimeout(() => {
      void spawnTone({
        frequency: 246.94,
        type: "sine",
        volume: 0.005,
        attack: 0.12,
        sustain: 0.6,
        release: 1.7,
      });
    }, 460);
  }, [ensureAudio, spawnTone]);

  const toggle = useCallback(async () => {
    const next = !enabled;
    setEnabled(next);

    if (next) {
      await startAmbience();
      return;
    }

    stopAmbience();
  }, [enabled, startAmbience, stopAmbience]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const introPlayedKey = "by_intro_played";
    if (!window.sessionStorage.getItem(introPlayedKey)) {
      window.sessionStorage.setItem(introPlayedKey, "true");
      void playIntroSting();
    }
  }, [playIntroSting]);

  useEffect(() => {
    return () => {
      stopAmbience();
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        void audioContextRef.current.close();
      }
    };
  }, [stopAmbience]);

  const value = useMemo(
    () => ({
      enabled,
      introAccent,
      toggle,
      playHover,
      playSectionChime,
      playLogoSpark,
    }),
    [enabled, introAccent, toggle, playHover, playSectionChime, playLogoSpark],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function usePortfolioSound() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error("usePortfolioSound must be used within SoundProvider");
  }

  return context;
}
