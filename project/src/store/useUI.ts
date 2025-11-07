import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Lang } from '../types';

interface UIState {
  theme: 'light' | 'dark';
  language: Lang;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setLanguage: (language: Lang) => void;
  toggleLanguage: () => void;
}

export const useUI = create<UIState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'tr',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setLanguage: (language) => set({ language }),
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'en' ? 'tr' : 'en',
        })),
    }),
    {
      name: 'museum-ui-settings',
    }
  )
);
