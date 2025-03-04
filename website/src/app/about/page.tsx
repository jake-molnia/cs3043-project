import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right to Repair | About Us',
  description: 'Learn about our mission and team',
};

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Kamala Greenwood",
      role: "Bioinformatics and Computer science major. ",
      bio: "I first discovered right-to-repair when I was younger, looking into repairing an iPhone. At the time the anti-repair practices and high cost for repair, which Apple had systematically disincentivized, lead to me disposing of the phone and losing many photos. By my late teens I built my own desktop computer with interchangeable parts and started to investigate manufacturer practices for repair. As I move into my career maintaining devices and systems as well as data security, and the ability to manipulate a device on a low level will become increasingly important. right-to-repair as an ideology will impact the way I prioritize documentation availability and device maintainability on a hardware and software level. ",
      imageSrc: "/cs3043-project/about/image/kamala.png"
    },
    {
      id: 2,
      name: "Jacob Molnia",
      role: "Math and Computer Science major",
      bio: "I first learned about the right to repair movement when I was in high school. I was interested in repairing my own electronics and found that many manufacturers made it difficult to do so. I believe that consumers should have the right to repair their own devices and that manufacturers should be required to provide the necessary tools and information to do so. I am interested in the legal and ethical implications of the right to repair movement and how it can be used to promote sustainability and reduce electronic waste.",
      imageSrc: "/cs3043-project/about/image/jacob.jpeg"
    }
  ];

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 fade-in">About Us</h1>
      
      <section className="mb-16 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          We are dedicated to promoting and advocating for the Right to Repair movement. Our goal is to empower consumers with the knowledge and resources they need to repair their own devices, reduce electronic waste, and challenge restrictive manufacturer practices.
        </p>
        <p className="text-lg mt-4">
          Through education, advocacy, and community building, we aim to create a more sustainable and equitable future where consumers have full ownership of their devices and the right to repair them as needed.
        </p>
      </section>
      
      <section className="fade-in">
        <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-card transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* Replace Image component with regular img tag for static export */}
                <img
                  src={member.imageSrc}
                  alt={`Photo of ${member.name}`}
                  className="object-cover w-full h-full object-center"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-16 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>We believe in extending the lifespan of electronics to reduce waste and environmental impact.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Consumer Rights</h3>
            <p>We advocate for consumers' right to have full ownership and control over the devices they purchase.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
            <p>We're committed to making repair knowledge accessible to everyone, regardless of technical background.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>We foster a supportive community where people can learn from each other and collaborate.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-16 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-8">
          Join our community and help support the Right to Repair movement. Whether you&apos;re a repair technician, policy maker, or concerned consumer, there are many ways to contribute.
        </p>

      </section>
    </div>
  );
}
