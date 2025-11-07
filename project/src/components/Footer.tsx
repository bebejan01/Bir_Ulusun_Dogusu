import { Github, Heart } from 'lucide-react';
import { useUI } from '../store/useUI';

export function Footer() {
  const { language } = useUI();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>{language === 'en' ? 'Sevgiyle yapıldı' : 'Ä°le yapÄ±ldÄ±'}</span>
            <Heart size={16} className="text-red-600" fill="currentColor" />
            <span>
              {language === 'en'
                ? 'bir ulus inşa edenler için'
                : 'bir ulus inÅŸa edenler iÃ§in'}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Kaynağı Görüntüle on GitHub"
            >
              <Github size={20} />
              <span className="text-sm">
                {language === 'en' ? 'Kaynağı Görüntüle' : 'KaynaÄŸÄ± GÃ¶rÃ¼ntÃ¼le'}
              </span>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-500">
          Â© 2024 {language === 'en' ? "Bir Ulusun Doğuşu" : 'Bir Ulusun DoÄŸuÅŸu'}
        </div>
      </div>
    </footer>
  );
}
