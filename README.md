# Bir Ulusun Doğuşu

Kısa Tanıtım  
"Bir Ulusun Doğuşu" interaktif bir dijital müze deneyimidir. Ziyaretçileri Kurtuluş, Cumhuriyet, Devrimler ve Silah Arkadaşları odalarında tarihsel hikâyeler, etkileşimli zaman çizelgeleri ve anlatımlı içeriklerle gezdirir.

## Proje Hakkında
Bu proje ana uygulama yapısını [`src/App.tsx`](src/App.tsx) üzerinden yönetir ve sayfa şablonunu [`src/components/Layout.tsx`](src/components/Layout.tsx) sağlar. Giriş sayfası ve uygulama başlatma noktası için bakınız: [`index.html`](index.html), [`src/main.tsx`](src/main.tsx) ve çalışma komutları için [`package.json`](package.json).

## Websitesi Özellikleri
- Kahraman başlık ve giriş: [`src/components/Hero.tsx`](src/components/Hero.tsx)  
- Zaman çizelgesi (etkileşimli): [`src/components/InteractiveTimeline.tsx`](src/components/InteractiveTimeline.tsx) + hikâye dialogu [`src/components/StoryDialog.tsx`](src/components/StoryDialog.tsx)  
- Hikâye kartları ile anlatım ve sesli okuma: [`src/components/StoryCard.tsx`](src/components/StoryCard.tsx) — anlatım kontrolü [`src/components/NarrationToggle.tsx`](src/components/NarrationToggle.tsx) ve ses durumu depolama [`src/store/useAudio.ts`](src/store/useAudio.ts)  
- Kişi kartları (çevrilebilir): [`src/components/FlipCard.tsx`](src/components/FlipCard.tsx) ve detay modalı (`RoomCompanions`): [`src/pages/RoomCompanions.tsx`](src/pages/RoomCompanions.tsx)  
- Önce / sonra karşılaştırmaları: [`src/components/BeforeAfter.tsx`](src/components/BeforeAfter.tsx) — veriler: [`src/data/reforms.json`](src/data/reforms.json)  
- Ziyaretçi defteri (Supabase ile): [`src/pages/Guestbook.tsx`](src/pages/Guestbook.tsx) + Supabase istemcisi: [`src/lib/supabase.ts`](src/lib/supabase.ts) ve DB migration: [`supabase/migrations/20251101154822_create_guestbook_table.sql`](supabase/migrations/20251101154822_create_guestbook_table.sql)  
- Tema, dil ve erişilebilirlik: Tema geçişi [`src/components/ThemeSwitch.tsx`](src/components/ThemeSwitch.tsx), dil/depo (`useUI`): [`src/store/useUI.ts`](src/store/useUI.ts), skip-link: [`src/components/SkipLink.tsx`](src/components/SkipLink.tsx)  
- Ortam müziği kontrolü: [`src/components/AmbientAudio.tsx`](src/components/AmbientAudio.tsx)

Veri kaynakları: hikâyeler ve içerikler [`src/data/stories.json`](src/data/stories.json), odalar [`src/data/rooms.json`](src/data/rooms.json), kişiler [`src/data/persons.json`](src/data/persons.json).

## Kullanılan Kaynaklar & Teknolojiler
- React + TypeScript — uygulama gövdesi: [`src/App.tsx`](src/App.tsx), [`src/main.tsx`](src/main.tsx)  
- Vite — geliştirme sunucusu / build: [`vite.config.ts`](vite.config.ts)  
- Tailwind CSS — stil: [`tailwind.config.js`](tailwind.config.js) ve [`src/index.css`](src/index.css)  
- Framer Motion — animasyonlar: (kullanım örnekleri komponentlerde)  
- Supabase — veri kalıcılığı: [`src/lib/supabase.ts`](src/lib/supabase.ts)  
- Web Speech API — anlatım/seslendirme (tarayıcı tarafı)  
- Zustand + persist — uygulama durumu: [`src/store/useUI.ts`](src/store/useUI.ts), [`src/store/useAudio.ts`](src/store/useAudio.ts)  
- Zod — form doğrulama: kullanımı [`src/pages/Guestbook.tsx`](src/pages/Guestbook.tsx)

## Video (Herkesin erişebileceği şekilde ekleme)
Aşağıda iki erişilebilir ekleme yöntemi örneği verilmiştir. Proje deposuna yerleştireceğiniz `public/demo.mp4` veya barındıracağınız YouTube/Vimeo linki ile güncelleyin.

HTML5 video (depo içi dosya: public/demo.mp4)
```html
<video controls width="720">
  <source src="/demo.mp4" type="video/mp4">
  Bu tarayıcı video formatını desteklemiyor. Videoyu doğrudan indirin: /demo.mp4
</video>
```

YouTube embed (herkese açık URL)
```html
<iframe width="720" height="405" src="https://www.youtube.com/embed/VIDEO_ID" title="Tanıtım Videosu" frameborder="0" allowfullscreen></iframe>
```

README içine gömülü küçük bir bağlantı örneği:
- Doğrudan dosya: /demo.mp4  
- YouTube: https://www.youtube.com/watch?v=VIDEO_ID

(Geliştirici notu: videoyu depo köküne `public/demo.mp4` olarak koyarsanız veya YouTube linkini yukarıdaki alana eklerseniz, herkes doğrudan izleyebilir.)

## Hızlı Başlangıç
Geliştirme sunucusunu başlatmak için:
```bash
npm install
npm run dev
```
Konfigürasyon ve çevresel değişkenler: `.env` dosyası kullanılır (ör. Supabase URL / ANON KEY). Supabase istemcisi: [`src/lib/supabase.ts`](src/lib/supabase.ts).

---

Geliştirici: Bebejan
