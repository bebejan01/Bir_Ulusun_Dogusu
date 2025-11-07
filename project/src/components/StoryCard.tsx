import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { useUI } from '../store/useUI';
import { useAudio } from '../store/useAudio';
import type { Story } from '../types';

interface StoryCardProps {
  story: Story;
  index: number;
  onReadMore?: () => void;
}

export function StoryCard({ story, index, onReadMore }: StoryCardProps) {
  const { language } = useUI();
  const { narrationOn, setCurrentNarration } = useAudio();

  const handleNarrate = () => {
    if (!narrationOn) return;

    const text = `${story.title[language]}. ${story.body[language]}`;
    setCurrentNarration(text);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'tr' ? 'tr-TR' : 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {story.imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={story.imageUrl}
            alt={story.title[language]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {story.year}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {story.title[language]}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line leading-relaxed">
          {story.body[language]}
        </p>
        <div className="flex gap-3">
          {narrationOn && (
            <button
              onClick={handleNarrate}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              aria-label="Hikayeyi dinle"
            >
              <Volume2 size={18} />
              <span>{language === 'en' ? 'Hikayeyi Dinle' : 'Hikayeyi Dinle'}</span>
            </button>
          )}
          {onReadMore && (
            <button
              onClick={onReadMore}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
            >
              {language === 'en' ? 'Devamýný Oku' : 'DevamÄ±nÄ± Oku'}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
