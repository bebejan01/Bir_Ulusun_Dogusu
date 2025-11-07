import { motion } from 'framer-motion';
import { useUI } from '../store/useUI';
import type { Lang } from '../types';

interface RoomHeaderProps {
  title: Record<Lang, string>;
  intro: Record<Lang, string>;
  breadcrumb?: string;
}

export function RoomHeader({ title, intro, breadcrumb }: RoomHeaderProps) {
  const { language } = useUI();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {breadcrumb && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {breadcrumb}
        </p>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {title[language]}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
        {intro[language]}
      </p>
    </motion.header>
  );
}
