import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Flag, Sparkles, Users } from 'lucide-react';
import { Hero } from '../components/Hero';
import { useUI } from '../store/useUI';
import roomsData from '../data/rooms.json';

export function Home() {
  const navigate = useNavigate();
  const { language } = useUI();

  const handleEnter = () => {
    const element = document.getElementById('rooms-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const roomIcons = {
    liberation: Flag,
    republic: Sparkles,
    reforms: BookOpen,
    companions: Users,
  };

  return (
    <div>
      <Hero onEnter={handleEnter} />

      <section id="rooms-section" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          >
            {language === 'en' ? 'Müzeyi Keþfet' : 'MÃ¼zeyi KeÅŸfet'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12"
          >
            {language === 'en'
              ? 'Tarihin dört odasýnda bir yolculuk'
              : 'Tarihin dÃ¶rt odasÄ±nda bir yolculuk'}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {roomsData.map((room, index) => {
              const Icon = roomIcons[room.key as keyof typeof roomIcons];
              return (
                <motion.div
                  key={room.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/rooms/${room.key}`)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Icon size={32} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {room.title[language as keyof typeof room.title]}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {room.intro[language as keyof typeof room.intro]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
