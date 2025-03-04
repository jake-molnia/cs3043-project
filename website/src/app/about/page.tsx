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
      role: "Repair Technician",
      bio: "Technology enthusiast with 15+ years experience in consumer electronics repair.",
      imageSrc: "/api/placeholder/400/400"
    },
    {
      id: 2,
      name: "Sam Rivera",
      role: "Policy Researcher",
      bio: "Specializes in technology policy with a focus on consumer rights and environmental impact.",
      imageSrc: "/api/placeholder/400/400"
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "Community Organizer",
      bio: "Passionate about building grassroots movements and educating consumers about their rights.",
      imageSrc: "/api/placeholder/400/400"
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-card"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
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
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-8">
          Join our community and help support the Right to Repair movement. Whether you&apos;re a repair technician, policy maker, or concerned consumer, there are many ways to contribute.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>
            Email: info@righttorepaireducation.org<br />
            Twitter: @RightToRepairEdu<br />
            Join our monthly virtual meetups on the first Tuesday of each month.
          </p>
        </div>
      </section>
    </div>
  );
}