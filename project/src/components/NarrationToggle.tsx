import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '../store/useAudio';
import { useUI } from '../store/useUI';

export function NarrationToggle() {
  const { narrationOn, toggleNarration } = useAudio();
  const { language } = useUI();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg"
    >
      <button
        onClick={toggleNarration}
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label={narrationOn ? 'Anlatımı kapat' : 'Anlatımı aç'}
      >
        {narrationOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
        <span className="text-sm font-medium">
          {language === 'en' ? 'Voice Narration' : 'Sesli Anlatım'}
        </span>
      </button>
      <div
        className={`w-10 h-6 rounded-full transition-colors ${
          narrationOn ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      >
        <motion.div
          className="w-5 h-5 bg-white rounded-full shadow-md m-0.5"
          animate={{ x: narrationOn ? 16 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>
    </motion.div>
  );
}
