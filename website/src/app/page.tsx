import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import MapSection from '@/components/MapSection';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right to Repair | Home',
  description: 'Educational resource on the Right to Repair movement',
};

export default function Home() {
  const educationalContent = [
    {
      id: 1,
      title: "What is Right to Repair?",
      content: "Right to Repair refers to legislation that allows consumers the ability to repair and modify their own consumer electronic devices, where otherwise the manufacturer of such devices requires the consumer to use only their offered services.",
      icon: "🔧"
    },
    {
      id: 2,
      title: "Why It Matters",
      content: "The movement aims to protect consumer rights, reduce electronic waste, and promote sustainability by extending the lifespan of electronic devices.",
      icon: "🌱"
    },
    {
      id: 3,
      title: "Common Barriers",
      content: "Manufacturers often restrict access to parts, tools, and information needed for repairs. They may use proprietary fasteners or design products to be difficult to open.",
      icon: "🚫"
    }
  ];

  return (
    <>
      <HeroSection 
        title="Right to Repair"
        subtitle="Empowering consumers to fix their own devices"
        ctaText="Explore Timeline"
        ctaLink="/timeline"
      />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Understanding Right to Repair</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {educationalContent.map((item) => (
            <div key={item.id} className="fade-in-card">
              <Card 
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/timeline" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            View Interactive Timeline
          </Link>
        </div>
      </section>

      <MapSection />
    </>
  );
}
