import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../store/useUI';
import type { BeforeAfterData } from '../types';

interface BeforeAfterProps {
  data: BeforeAfterData;
}

export function BeforeAfter({ data }: BeforeAfterProps) {
  const { language } = useUI();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percent, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
        {data.title[language]}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        {data.description[language]}
      </p>

      <div
        className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        <img
          src={data.afterImage}
          alt={data.afterLabel[language]}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={data.beforeImage}
            alt={data.beforeLabel[language]}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ width: `calc(100vw * ${100 / sliderPosition})` }}
          />
        </div>

        <div
          className="absolute top-0 h-full w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-gray-600" />
              <div className="w-1 h-4 bg-gray-600" />
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {data.beforeLabel[language]}
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {data.afterLabel[language]}
        </div>
      </div>
    </motion.div>
  );
}
