import { motion } from 'framer-motion';
import { useUI } from '../store/useUI';

export function LanguageSwitch() {
  const { language, toggleLanguage } = useUI();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold text-sm"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      {language === 'en' ? 'TR' : 'EN'}
    </motion.button>
  );
}
