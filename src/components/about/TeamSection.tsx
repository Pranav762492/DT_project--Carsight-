import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Abhinav",
    role: "UX Research Lead",
    bio: "Passionate about understanding user behaviors and creating intuitive experiences."
  },
  {
    name: "Pranav",
    role: "Frontend Designer",
    bio: "Focused on creating beautiful and user-friendly interfaces that enhance the user experience."
  },
  {
    name: "Jessica",
    role: "UI/UX Designer",
    bio: "Transforms complex problems into beautiful, functional designs that users love."
  },
  {
    name: "Tanishq",
    role: "Frontend Developer",
    bio: "Brings designs to life with clean, efficient code and attention to detail."
  },
  {
    name: "Pratyusha",
    role: "Academic Mentor",
    bio: "Guiding the team through the design thinking process with industry expertise."
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            The passionate minds behind Carsight, dedicated to simplifying the car buying process for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                index === 4 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800">{member.name}</h3>
                <p className="text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-secondary-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="p-2 text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-2 text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;