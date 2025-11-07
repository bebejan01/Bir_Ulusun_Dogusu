import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AudioState {
  ambientOn: boolean;
  narrationOn: boolean;
  volume: number;
  currentNarration: string | null;
  toggleAmbient: () => void;
  toggleNarration: () => void;
  setVolume: (volume: number) => void;
  setCurrentNarration: (text: string | null) => void;
}

export const useAudio = create<AudioState>()(
  persist(
    (set) => ({
      ambientOn: false,
      narrationOn: true,
      volume: 0.7,
      currentNarration: null,
      toggleAmbient: () => set((state) => ({ ambientOn: !state.ambientOn })),
      toggleNarration: () => set((state) => ({ narrationOn: !state.narrationOn })),
      setVolume: (volume: number) => set({ volume }),
      setCurrentNarration: (text: string | null) => set({ currentNarration: text }),
    }),
    {
      name: 'museum-audio-settings',
    }
  )
);
