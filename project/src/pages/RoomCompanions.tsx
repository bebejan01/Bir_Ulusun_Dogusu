import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { RoomHeader } from '../components/RoomHeader';
import { FlipCard } from '../components/FlipCard';
import { NarrationToggle } from '../components/NarrationToggle';
import { useUI } from '../store/useUI';
import roomsData from '../data/rooms.json';
import personsData from '../data/persons.json';
import type { Person } from '../types';

export function RoomCompanions() {
  const room = roomsData.find((r) => r.key === 'companions')!;
  const { language } = useUI();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <RoomHeader
            title={room.title}
            intro={room.intro}
            breadcrumb="Ana Sayfa / Silah Arkadaşları Odası"
          />
          <NarrationToggle />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personsData.map((person) => (
            <FlipCard
              key={person.id}
              person={person as Person}
              onReadMore={() => setSelectedPerson(person as Person)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPerson && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                {selectedPerson.portraitUrl && (
                  <div className="relative h-80 overflow-hidden rounded-t-xl">
                    <img
                      src={selectedPerson.portraitUrl}
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedPerson.name}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {selectedPerson.role}
                      </p>
                      {selectedPerson.years && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                          {selectedPerson.years}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedPerson(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {selectedPerson.quote && (
                    <blockquote className="border-l-4 border-blue-600 pl-4 py-2 mb-6 italic text-gray-700 dark:text-gray-300">
                      "{selectedPerson.quote[language]}"
                    </blockquote>
                  )}

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedPerson.bio[language]}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
