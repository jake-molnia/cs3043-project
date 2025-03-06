import { resourcesData } from '@/lib/data/resourcesData';
import { Metadata } from 'next';
import LetterTemplateSection from '@/components/LetterTemplateSection';

export const metadata: Metadata = {
  title: 'Right to Repair | Resources',
  description: 'Resources and links related to the Right to Repair movement, including advocacy tools',
};

export default function Resources() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Resources</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Explore these resources to learn more about the Right to Repair movement and how you can get involved.
      </p>

      {/* Letter Template Section */}
      <LetterTemplateSection />

      {/* Original Resources Grid */}
      <h2 className="text-2xl font-bold mb-6 text-center">Helpful Resources</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(resourcesData).map(([category, resources], index) => (
          <div 
            key={category}
            className="bg-white rounded-lg shadow-md overflow-hidden fade-in-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-xl font-bold">{category}</h2>
            </div>
            
            <ul className="p-6">
              {resources.map((resource) => (
                <li key={resource.name} className="mb-4 last:mb-0">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-start"
                  >
                    <span className="mr-2">→</span> {resource.name}
                  </a>
                  <p className="mt-1 text-gray-600">{resource.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}