import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '../lib/supabase';
import { useUI } from '../store/useUI';
import type { GuestbookEntry } from '../types';

const entrySchema = z.object({
  name: z
    .string()
    .min(2, 'İsim en az 2 karakter olmalı')
    .max(50, 'İsim en fazla 50 karakter olabilir'),
  message: z
    .string()
    .min(10, 'Mesaj en az 10 karakter olmalı')
    .max(500, 'Mesaj en fazla 500 karakter olabilir'),
});

export function Guestbook() {
  const { language } = useUI();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchingEntries, setFetchingEntries] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('guestbook_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (err) {
      console.error('Error fetching entries:', err);
    } finally {
      setFetchingEntries(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const validated = entrySchema.parse({ name, message });
      setLoading(true);

      const newEntry = {
        name: validated.name,
        message: validated.message,
      };

      setEntries([{ ...newEntry, id: 'temp', created_at: new Date().toISOString() }, ...entries]);
      setName('');
      setMessage('');

      const { error: insertError } = await supabase
        .from('guestbook_entries')
        .insert([newEntry]);

      if (insertError) throw insertError;

      await fetchEntries();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError('Girdi gönderilemedi');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ziyaretçi Defteri
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tarihteki bu yolculuk hakkındaki düşüncelerinizi paylaşın.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Adınız
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Adınızı girin"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Mesajınız
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Düşüncelerinizi paylaşın..."
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Send size={20} />
                <span>Girdiyi Gönder</span>
              </>
            )}
          </button>
        </motion.form>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Son Girdiler
          </h2>

          {fetchingEntries ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin text-blue-600" size={32} />
            </div>
          ) : entries.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-12">
              Henüz giriş yok. İlk siz olun!
            </p>
          ) : (
            entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {entry.name}
                  </h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(entry.created_at).toLocaleDateString('tr-TR')}
                  </time>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{entry.message}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
