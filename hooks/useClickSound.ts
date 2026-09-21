"use client";

import { useCallback, useEffect, useRef } from "react";

export const useClickSound = (
  soundUrl: string = "/sounds/mario-coin-sound-effect.mp3"
) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.preload = "auto";
    }
  }, [soundUrl]);

  const playClickSound = useCallback(() => {
    try {
      if (!audioRef.current && typeof window !== "undefined") {
        audioRef.current = new Audio(soundUrl);
      }
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Click sound playback failed:", err);
          });
        }
      }
    } catch (err) {
      console.warn("Click sound error:", err);
    }
  }, [soundUrl]);

  return playClickSound;
};