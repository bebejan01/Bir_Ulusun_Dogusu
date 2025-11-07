import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useUI } from '../store/useUI';
import type { Story } from '../types';

interface StoryDialogProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StoryDialog({ story, isOpen, onClose }: StoryDialogProps) {
  const { language } = useUI();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!story) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
            >
              {story.imageUrl && (
                <div className="relative h-80 overflow-hidden rounded-t-xl">
                  <img
                    src={story.imageUrl}
                    alt={story.title[language]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-lg font-semibold">
                    {story.year}
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2
                    id="dialog-title"
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                  >
                    {story.title[language]}
                  </h2>
                  <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Pencereyi kapat"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {story.body[language]}
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
