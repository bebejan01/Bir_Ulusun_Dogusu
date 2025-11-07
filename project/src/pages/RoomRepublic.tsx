import { RoomHeader } from '../components/RoomHeader';
import { StoryCard } from '../components/StoryCard';
import { InteractiveTimeline } from '../components/InteractiveTimeline';
import { NarrationToggle } from '../components/NarrationToggle';
import storiesData from '../data/stories.json';
import roomsData from '../data/rooms.json';
import type { Story } from '../types';

export function RoomRepublic() {
  const room = roomsData.find((r) => r.key === 'republic')!;
  const stories = storiesData.filter(
    (s) => s.room === 'republic'
  ) as Story[];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <RoomHeader
            title={room.title}
            intro={room.intro}
            breadcrumb="Ana Sayfa / Cumhuriyet Odası"
          />
          <NarrationToggle />
        </div>

        <InteractiveTimeline stories={stories} />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
