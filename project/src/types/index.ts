export type Lang = 'tr' | 'en';

export interface Person {
  id: string;
  name: string;
  role: string;
  years?: string;
  portraitUrl?: string;
  quote?: Record<Lang, string>;
  bio: Record<Lang, string>;
}

export interface Story {
  id: string;
  room: 'liberation' | 'republic' | 'reforms';
  year: number;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
  imageUrl?: string;
}

export interface RoomMeta {
  key: 'liberation' | 'republic' | 'reforms' | 'companions';
  title: Record<Lang, string>;
  intro: Record<Lang, string>;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export interface BeforeAfterData {
  id: string;
  title: Record<Lang, string>;
  beforeLabel: Record<Lang, string>;
  afterLabel: Record<Lang, string>;
  beforeImage: string;
  afterImage: string;
  description: Record<Lang, string>;
}
