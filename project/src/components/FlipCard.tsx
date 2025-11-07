import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../store/useUI';
import type { Person } from '../types';

interface FlipCardProps {
  person: Person;
  onReadMore: () => void;
}

export function FlipCard({ person, onReadMore }: FlipCardProps) {
  const { language } = useUI();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-96 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${person.name} kartını çevir`}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            {person.portraitUrl && (
              <div className="h-3/4 overflow-hidden">
                <img
                  src={person.portraitUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4 h-1/4 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                {person.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {person.role}
              </p>
              {person.years && (
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-1">
                  {person.years}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl p-6 flex flex-col justify-center">
            {person.quote && (
              <>
                <blockquote className="text-white text-lg italic mb-4 text-center">
                  "{person.quote[language]}"
                </blockquote>
                <p className="text-blue-200 text-sm text-center mb-4">
                  {person.bio[language].split('.')[0]}.
                </p>
              </>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReadMore();
              }}
              className="mt-auto px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {language === 'en' ? 'Devam�n� Oku' : 'Devamını Oku'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
