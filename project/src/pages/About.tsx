import { motion } from 'framer-motion';
import { Github, Book, Heart } from 'lucide-react';
import { useUI } from '../store/useUI';

export function About() {
  const { language } = useUI();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Bu Proje Hakkında' : 'Bu Proje HakkÄ±nda'}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            {language === 'en'
              ? 'A digital museum experience celebrating the birth of modern TÃ¼rkiye.'
              : 'Modern TÃ¼rkiye\'nin doÄŸuÅŸunu kutlayan dijital bir mÃ¼ze deneyimi.'}
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Book className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'Amaç' : 'AmaÃ§'}
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {language === 'en'
              ? 'This interactive digital museum was created to commemorate the founding of the Republic of TÃ¼rkiye and honor Mustafa Kemal AtatÃ¼rk and his comrades who fought for independence and modernization.'
              : 'Bu interaktif dijital mÃ¼ze, TÃ¼rkiye Cumhuriyeti\'nin kuruluÅŸunu anmak ve baÄŸÄ±msÄ±zlÄ±k ve modernleÅŸme iÃ§in savaÅŸan Mustafa Kemal AtatÃ¼rk ve silah arkadaÅŸlarÄ±nÄ± onurlandÄ±rmak iÃ§in yaratÄ±ldÄ±.'}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {language === 'en'
              ? 'Sürükleyici hikâye anlatımı, etkileşimli zaman çizelgeleri ve özenle derlenen içeriklerle ziyaretçileri Türk tarihinin bu dönüştürücü dönemine dair bilgilendirmeyi ve ilham vermeyi amaçlıyoruz.'
              : 'SÃ¼rÃ¼kleyici hikaye anlatÄ±mÄ±, interaktif zaman Ã§izelgeleri ve Ã¶zenle seÃ§ilmiÅŸ iÃ§erik aracÄ±lÄ±ÄŸÄ±yla, ziyaretÃ§ileri TÃ¼rk tarihinin bu dÃ¶nÃ¼ÅŸtÃ¼rÃ¼cÃ¼ dÃ¶nemi hakkÄ±nda eÄŸitmeyi ve ilham vermeyi amaÃ§lÄ±yoruz.'}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-red-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'Teşekkürler' : 'TeÅŸekkÃ¼rler'}
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {language === 'en'
              ? 'This project draws on historical research and documentation from various sources. All content is presented for educational Amaçs.'
              : 'Bu proje, Ã§eÅŸitli kaynaklardan tarihsel araÅŸtÄ±rma ve dokÃ¼mantasyona dayanmaktadÄ±r. TÃ¼m iÃ§erik eÄŸitim amaÃ§lÄ± sunulmaktadÄ±r.'}
          </p>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>{language === 'en' ? 'Tarihsel Kaynaklar:' : 'Tarihsel Kaynaklar:'}</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1">
              <li>{language === 'en' ? 'Türk Tarih Kurumu' : 'TÃ¼rk Tarih Kurumu'}</li>
              <li>{language === 'en' ? 'AtatÃ¼rk Research Center' : 'AtatÃ¼rk AraÅŸtÄ±rma Merkezi'}</li>
              <li>{language === 'en' ? 'Milli Kütüphane Arşivleri' : 'Milli KÃ¼tÃ¼phane ArÅŸivleri'}</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Github className="text-gray-900 dark:text-white" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'Teknoloji' : 'Teknoloji'}
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {language === 'en'
              ? 'Bu müze; erişilebilir, ilgi çekici ve yüksek performanslı bir deneyim sunmak için modern web teknolojileriyle inşa edilmiştir:'
              : 'Bu mÃ¼ze, eriÅŸilebilir, ilgi Ã§ekici ve performanslÄ± bir deneyim saÄŸlamak iÃ§in modern web teknolojileriyle inÅŸa edilmiÅŸtir:'}
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
            <li>React + TypeScript</li>
            <li>Framer Motion {language === 'en' ? 'animasyonlar için' : 'animasyonlar iÃ§in'}</li>
            <li>Tailwind CSS {language === 'en' ? 'stil için' : 'stil iÃ§in'}</li>
            <li>Supabase {language === 'en' ? 'veri kalıcılığı için' : 'veri kalÄ±cÄ±lÄ±ÄŸÄ± iÃ§in'}</li>
            <li>Web Speech API {language === 'en' ? 'anlatım için' : 'anlatÄ±m iÃ§in'}</li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p className="text-sm">
            {language === 'en'
              ? 'Bir ulus inşa edenlere saygı ve hayranlıkla oluşturulmuştur.'
              : 'Bir ulus inÅŸa edenlere saygÄ± ve hayranlÄ±kla yaratÄ±lmÄ±ÅŸtÄ±r.'}
          </p>
          <p className="text-xs mt-2">
            Â© 2024 {language === 'en' ? "Bir Ulusun Doğuşu" : 'Bir Ulusun DoÄŸuÅŸu'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
