import { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '../store/useAudio';

export function AmbientAudio() {
  const { ambientOn, volume, toggleAmbient } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (ambientOn) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [ambientOn]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/ambient.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAmbient}
        className="fixed bottom-24 right-6 z-40 p-4 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full shadow-lg backdrop-blur-sm transition-colors"
        aria-label={ambientOn ? 'Ortam sesini kapat' : 'Ortam sesini çal'}
      >
        {ambientOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
}
