import TimelineComponent from '@/components/TimelineComponent';
import { timelineData } from '@/lib/data/timelineData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right to Repair | Timeline',
  description: 'Interactive timeline of Right to Repair movement',
};

export default function Timeline() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Right to Repair Timeline</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Explore key events in the Right to Repair movement. Click on any event to learn more about its significance.
      </p>
      
      <TimelineComponent events={timelineData} />
    </div>
  );
}
