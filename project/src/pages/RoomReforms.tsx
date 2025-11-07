import { RoomHeader } from '../components/RoomHeader';
import { StoryCard } from '../components/StoryCard';
import { BeforeAfter } from '../components/BeforeAfter';
import { NarrationToggle } from '../components/NarrationToggle';
import storiesData from '../data/stories.json';
import roomsData from '../data/rooms.json';
import reformsData from '../data/reforms.json';
import type { Story, BeforeAfterData } from '../types';

export function RoomReforms() {
  const room = roomsData.find((r) => r.key === 'reforms')!;
  const stories = storiesData.filter(
    (s) => s.room === 'reforms'
  ) as Story[];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <RoomHeader
            title={room.title}
            intro={room.intro}
            breadcrumb="Ana Sayfa / Devrimler Odası"
          />
          <NarrationToggle />
        </div>

        <div className="mb-16">
          {reformsData.map((reform) => (
            <BeforeAfter key={reform.id} data={reform as BeforeAfterData} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
