import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../store/useUI';
import { StoryDialog } from './StoryDialog';
import type { Story } from '../types';

interface InteractiveTimelineProps {
  stories: Story[];
}

export function InteractiveTimeline({ stories }: InteractiveTimelineProps) {
  const { language } = useUI();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    setIsDialogOpen(true);
  };

  const sortedStories = [...stories].sort((a, b) => a.year - b.year);

  return (
    <>
      <div className="relative py-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          {language === 'en' ? 'Etkileþimli Zaman Çizelgesi' : 'Ä°nteraktif Zaman Ã‡izelgesi'}
        </motion.h3>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600" />

          <div className="space-y-8">
            {sortedStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}
              >
                <div className="flex-1" />

                <div className="relative z-10">
                  <motion.button
                    onClick={() => handleStoryClick(story)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-colors"
                    aria-label={`View story from ${story.year}`}
                  >
                    {story.year}
                  </motion.button>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 cursor-pointer"
                  onClick={() => handleStoryClick(story)}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {story.title[language]}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                      {story.body[language].split('\n')[0]}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <StoryDialog
        story={selectedStory}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
