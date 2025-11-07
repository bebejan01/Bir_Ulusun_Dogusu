import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Flag, Sparkles, Users, MessageSquare, Info } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUI } from '../store/useUI';
import { ThemeSwitch } from './ThemeSwitch';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language } = useUI();

  const navItems = [
    { path: '/', label: { en: 'Ana Sayfa', tr: 'Ana Sayfa' }, icon: Home },
    { path: '/rooms/liberation', label: { en: 'Kurtuluþ', tr: 'KurtuluÅŸ' }, icon: Flag },
    { path: '/rooms/republic', label: { en: 'Cumhuriyet', tr: 'Cumhuriyet' }, icon: Sparkles },
    { path: '/rooms/reforms', label: { en: 'Devrimler', tr: 'Ä°nkÄ±laplar' }, icon: BookOpen },
    { path: '/rooms/companions', label: { en: 'Silah Arkadaþlarý', tr: 'Silah ArkadaÅŸlarÄ±' }, icon: Users },
    { path: '/guestbook', label: { en: 'Ziyaretçi Defteri', tr: 'ZiyaretÃ§i Defteri' }, icon: MessageSquare },
    { path: '/about', label: { en: 'Hakkýnda', tr: 'HakkÄ±nda' }, icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? "Bir Ulusun Doðuþu" : 'Bir Ulusun DoÄŸuÅŸu'}
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label[language]}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitch />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="MenÃ¼yÃ¼ aÃ§/kapat"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 pb-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label[language]}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
