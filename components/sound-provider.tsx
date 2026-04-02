"use client";

import {
  createContext,
  useCallback,
  useContext,
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

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [introAccent, setIntroAccent] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  const ensureAudio = useCallback(async () => {
    if (typeof window === "undefined") return null;

    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;

      const context = new AudioCtx();
      const master = context.createGain();
      master.gain.value = 0.08;
      master.connect(context.destination);

      audioContextRef.current = context;
      masterGainRef.current = master;
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }, []);

  const spawnTone = useCallback(
    async ({
      frequency,
      type,
      volume,
      attack = 0.02,
      sustain = 0.14,
      release = 0.7,
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
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      oscillator.detune.setValueAtTime(detune, context.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1800, context.currentTime);
      filter.Q.value = 0.8;

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.linearRampToValueAtTime(volume, context.currentTime + attack);
      gain.gain.setTargetAtTime(volume * 0.7, context.currentTime + attack, sustain);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + attack + sustain + release);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      oscillator.start();
      oscillator.stop(context.currentTime + attack + sustain + release + 0.08);
    },
    [ensureAudio],
  );

  const pulseAccent = useCallback(() => {
    setIntroAccent(true);
    if (typeof window !== "undefined") {
      window.setTimeout(() => setIntroAccent(false), 900);
    }
  }, []);

  const playMagicSting = useCallback(async () => {
    pulseAccent();

    const sequence = [
      { frequency: 392, type: "sine" as OscillatorType, volume: 0.011, delay: 0 },
      { frequency: 587.33, type: "triangle" as OscillatorType, volume: 0.01, delay: 0.16 },
      { frequency: 783.99, type: "triangle" as OscillatorType, volume: 0.009, delay: 0.42 },
      { frequency: 1046.5, type: "sine" as OscillatorType, volume: 0.006, delay: 0.68 },
    ];

    sequence.forEach((tone) => {
      window.setTimeout(() => {
        void spawnTone({
          frequency: tone.frequency,
          type: tone.type,
          volume: tone.volume,
          attack: 0.03,
          sustain: 0.18,
          release: 1.1,
        });
      }, tone.delay * 1000);
    });

    window.setTimeout(() => {
      void spawnTone({
        frequency: 261.63,
        type: "sine",
        volume: 0.004,
        attack: 0.08,
        sustain: 0.28,
        release: 1.2,
      });
    }, 260);
  }, [pulseAccent, spawnTone]);

  const toggle = useCallback(async () => {
    await playMagicSting();
    setEnabled(true);
  }, [playMagicSting]);

  const playHover = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 698.46,
      type: "triangle",
      volume: 0.006,
      attack: 0.01,
      sustain: 0.04,
      release: 0.32,
    });
  }, [enabled, spawnTone]);

  const playSectionChime = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 523.25,
      type: "sine",
      volume: 0.007,
      attack: 0.02,
      sustain: 0.06,
      release: 0.8,
    });
  }, [enabled, spawnTone]);

  const playLogoSpark = useCallback(() => {
    if (!enabled) return;
    void spawnTone({
      frequency: 880,
      type: "triangle",
      volume: 0.007,
      attack: 0.01,
      sustain: 0.05,
      release: 0.6,
    });
  }, [enabled, spawnTone]);

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
